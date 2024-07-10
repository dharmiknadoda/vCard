<?php

namespace App\Http\Controllers;

use App\Models\Nfc;
use App\Models\NfcCardCategory;
use App\Models\NfcOrders;
use Laracasts\Flash\Flash;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\Models\NfcOrderTransaction;
use App\Repositories\NfcRepository;
use App\Http\Requests\CreateNfcRequest;
use App\Http\Requests\UpdateNfcCardRequest;
use App\Models\NfcTemplate;

class NfcController extends AppBaseController
{
    private $NfcRepository;

    public function __construct(NfcRepository $NfcRepository)
    {
        $this->NfcRepository = $NfcRepository;
    }

    public function index(Request $request)
    {
        return view('sadmin.nfc.index');
    }

    public function store(CreateNfcRequest $request)
    {

        $input = $request->all();

        $nfc = $this->NfcRepository->store($input);

        return $this->sendResponse($nfc,__('messages.nfc.nfc_card_created_success'));
    }

    public function edit($id){

       $nfc = Nfc::with('media')->find($id);

        return $this->sendResponse($nfc, 'Nfc Type  successfully retrieved.');
    }

    public function update(UpdateNfcCardRequest $request,$id){
        $input = $request->all();

        $nfc = $this->NfcRepository->update($input, $id);

        return $this->sendResponse($nfc,__('messages.nfc.nfc_card_updated_success'));

    }

    public function destroy($id)
    {
        $nfcOrder = NfcOrders::where('card_type',$id)->exists();

        if($nfcOrder){
            return $this->sendError(__('messages.nfc.card_can_not_deleted'));
        }

        $nfc = Nfc::find($id);
        $nfc->delete();

        return $this->sendSuccess(__('messages.nfc.nfc_card_deleted_success'));
    }

    public function nfcCardCategory(){
        return view('nfc-card-category.index');
    }

    public function nfcCategoryCreate(){
        return view('nfc-card-category.create');
    }
    public function nfcCategoryStore(Request $request){
        $data = $request->all();
//        dd($data);
        $card_frount_side = '';
        $card_back_side = '';
        
        if($request->hasFile('card_frount_side')) {
            $files = $request->file('card_frount_side');
            $card_frount_side = time().'.'.$files->getClientOriginalExtension();
            $destinationPath ='assets/images';
            $files->move($destinationPath,$card_frount_side);
        }

        if($request->hasFile('card_back_side')) {
            $files = $request->file('card_back_side');
            $card_back_side = time().'.'.$files->getClientOriginalExtension();
            $destinationPath ='assets/images';
            $files->move($destinationPath,$card_back_side);
        }

        // $data['sub_menu'] = json_encode($data['sub_menu']);
        NfcCardCategory::create([
            "name"=>$data['name'],
            "card_frount_side" => $card_frount_side,
            "card_back_side" => $card_back_side,
        ]);
        return redirect()->route('sadmin.nfc.card.category');
    }

    public function nfcCategoryEdit($id){
        $data = NfcCardCategory::where('id',$id)->first();
        return view('nfc-card-category.edit',compact('data'));
    }

    public function nfcCategoryUpdate(Request $request){
        $data = $request->all();
        $card_frount_side = '';
        $card_back_side = '';
        
        if($request->hasFile('card_frount_side')) {
            $files = $request->file('card_frount_side');
            $card_frount_side = time().'.'.$files->getClientOriginalExtension();
            $destinationPath ='assets/images';
            $files->move($destinationPath,$card_frount_side);
        }

        if($request->hasFile('card_back_side')) {
            $files = $request->file('card_back_side');
            $card_back_side = time().'.'.$files->getClientOriginalExtension();
            $destinationPath ='assets/images';
            $files->move($destinationPath,$card_back_side);
        }

        NfcCardCategory::where('id',$data['id'])->update([
            "name"=>$data['name'],
            "card_frount_side" => $card_frount_side,
            "card_back_side" => $card_back_side,
        ]);
        return redirect()->route('sadmin.nfc.card.category');
    }
    public function cardCategoryDestroy($id){
        $delete  = NfcCardCategory::find($id)->delete();
        if($delete){
            return response()->json(['success'],200);
        }
    }

    public function addTemplate(Request $res )
    {
        return view('template.index');
    }

    public function templateCreate(){
        $data = NfcCardCategory::all();
        return view('template.create', compact('data'));
    }

    public function templateStore(Request $request){
        $data = $request->all();
        $ct_front = '';
        $ct_back = '';
        $cp_front = '';
        $cp_back = '';
        
        if($request->hasFile('ct_front')) {
            $files = $request->file('ct_front');
            $ct_front = time().mt_rand(1000000, 9999999).'.'.$files->getClientOriginalExtension();
            $destinationPath ='assets/images';
            $files->move($destinationPath,$ct_front);
        }

        if($request->hasFile('ct_back')) {
            $files = $request->file('ct_back');
            $ct_back = time().mt_rand(1000000, 9999999).'.'.$files->getClientOriginalExtension();
            $destinationPath ='assets/images';
            $files->move($destinationPath,$ct_back);
        }

        // preview 

        if($request->hasFile('cp_front')) {
            $files = $request->file('cp_front');
            $cp_front = time().mt_rand(1000000, 9999999).'.'.$files->getClientOriginalExtension();
            $destinationPath ='assets/images';
            $files->move($destinationPath,$cp_front);
        }

        if($request->hasFile('cp_back')) {
            $files = $request->file('cp_back');
            $cp_back = time().mt_rand(1000000, 9999999).'.'.$files->getClientOriginalExtension();
            $destinationPath ='assets/images';
            $files->move($destinationPath,$cp_back);
        }


        NfcTemplate::create([
            "category_id" => $request['category_id'],
            "ct_front" => $ct_front,
            "ct_back" => $ct_back,
            "cp_front" => $cp_front,
            "cp_back" => $cp_back,
        ]);
        return redirect()->route('template.add.template');
    }

    public function templateEdit($id){
        $data = NfcTemplate::where('id',$id)->first();
        $categories = NfcCardCategory::all();
        return view('template.edit',compact('data','categories'));
    }

    public function templateUpdate(Request $request){

        $data = $request->all();
        $ct_front = '';
        $ct_back = '';
        $cp_front = '';
        $cp_back = '';
        
        if($request->hasFile('ct_front')) {
            $files = $request->file('ct_front');
            $ct_front = time().mt_rand(1000000, 9999999).'.'.$files->getClientOriginalExtension();
            $destinationPath ='assets/images';
            $files->move($destinationPath,$ct_front);
        }

        if($request->hasFile('ct_back')) {
            $files = $request->file('ct_back');
            $ct_back = time().mt_rand(1000000, 9999999).'.'.$files->getClientOriginalExtension();
            $destinationPath ='assets/images';
            $files->move($destinationPath,$ct_back);
        }

        // preview 

        if($request->hasFile('cp_front')) {
            $files = $request->file('cp_front');
            $cp_front = time().mt_rand(1000000, 9999999).'.'.$files->getClientOriginalExtension();
            $destinationPath ='assets/images';
            $files->move($destinationPath,$cp_front);
        }

        if($request->hasFile('cp_back')) {
            $files = $request->file('cp_back');
            $cp_back = time().mt_rand(1000000, 9999999).'.'.$files->getClientOriginalExtension();
            $destinationPath ='assets/images';
            $files->move($destinationPath,$cp_back);
        }

        NfcTemplate::where('id',$data['id'])->update([
            "category_id" => $request['category_id'],
            "ct_front" => $ct_front,
            "ct_back" => $ct_back,
            "cp_front" => $cp_front,
            "cp_back" => $cp_back,
        ]);
        return redirect()->route('template.add.template');
    }

    public function templatedestroy($id){
        $delete  = NfcTemplate::find($id)->delete();
        if($delete){
            return response()->json(['success'],200);
        }
    }

}
