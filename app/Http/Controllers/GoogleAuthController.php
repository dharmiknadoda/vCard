<?php

namespace App\Http\Controllers;
use App\Models\MultiTenant;
use App\Models\Plan;
use App\Models\Role;
use App\Models\Setting;
use App\Models\Subscription;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Laravel\Socialite\Facades\Socialite;

class GoogleAuthController extends Controller
{
    public function redirect(){
        return Socialite::driver('google')->redirect();
    }

    public function callbackGoogle(){
        try {
            DB::beginTransaction();
            $googleUser = Socialite::driver('google')->user();
            $user = User::where('google_id',$googleUser->getId())->first();
            $userDefaultLanguage = Setting::where('key', 'user_default_language')->first()->value ?? 'en';

            if(!$user){
                $tenant = MultiTenant::create(['tenant_username' => $googleUser->getName()]);

                $chekUserAvailability = User::whereEmail($googleUser->getEmail())->first();
                if(!$chekUserAvailability) {
                    $newUser = User::create([
                        "first_name" => $googleUser->getName(),
                        "email" => $googleUser->getEmail(),
                        'language' => $userDefaultLanguage,
                        "tenant_id" => $tenant->id,
                        "google_id" => $googleUser->getId(),
                        "email_verified_at" => Carbon::now(),
                        'affiliate_code' => generateUniqueAffiliateCode(),
                    ])->assignRole(Role::ROLE_ADMIN);

                    $plan = Plan::whereIsDefault(true)->first();

                    Subscription::create([
                        'plan_id' => $plan->id,
                        'plan_amount' => $plan->price,
                        'plan_frequency' => $plan->frequency,
                        'starts_at' => Carbon::now(),
                        'ends_at' => Carbon::now()->addDays($plan->trial_days),
                        'trial_ends_at' => Carbon::now()->addDays($plan->trial_days),
                        'status' => Subscription::ACTIVE,
                        'tenant_id' => $tenant->id,
                        'no_of_vcards' => $plan->no_of_vcards,
                    ]);

                    DB::commit();

                    Auth::login($newUser);

                    return redirect()->intended(getDashboardURL());
                }else{
                    session()->put('login_error','error');
                    return redirect()->route('login');
                }
            }else{
                Auth::login($user);
                return redirect()->intended(getDashboardURL());
            }

        } catch (\Throwable $th){
            dd($th->getMessage());
        }
    }
}
