<?php

namespace App\Http\Controllers;

use App\Mail\TwoFaMail;
use App\Mail\TwoFaMaill;
use App\Mail\VerifyMail;
use App\Models\TwoFactor;
use App\Models\User;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class TwoFactorController extends Controller
{
    public function sendOtp(Request $request)
    {
        try {
            $data = $request->all();

            // Generate OTP
            $otp = rand(100000, 999999); // Use 100000 to 999999 to ensure 6 digits
            $data['otp'] = $otp;

            // Delete previous OTP records
                TwoFactor::where('email', $data['email'])->delete();
             // Save new OTP
                $saveOtp = TwoFactor::create($data);

                // Find user by email
                $user = User::whereEmail($data['email'])->first();

                // Send OTP via email
                if ($saveOtp && $user) {
                    Mail::to($user->email)->send(new TwoFaMail($otp));
                    return response()->json(['success'], 200);
                } else {
                    return response()->json(['mail_sent_failed'], 402);
                }
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
