<?php 

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;

use Auth;
use Session;

class AuthController extends Controller
{
    public function signUp(Request $request) {
        $rules = [
            "username"=>'required',
            "email"=>'required',
            "mobile"=>'required',
            "password"=>'required',
            "full_name"=>'required',
        ];
        
        // $validator = Validator::make(Input::all(), $rules);

        // if ($validator->fails()) {
        //     return response()->json(array('errors' => $validator->getMessageBag()->toArray()));
        // }

        // $validator = Validator::make(Input::all(), $rules);

        // if ($validator->fails()) {
        //     return response()->json(array('errors' => $validator->getMessageBag()->toArray()));
        // }
        
        User::insert([
            "username"=>$request->username,
            "email"=>$request->email,
            "mobile"=>$request->mobile,
            "password"=>md5($request->password),
            "full_name"=>$request->full_name,
            "regist_date"=>date("Y-m-d")
        ]) ;
        return response()->json(array('status'=>"200"));
    }
    public function logIn(Request $request) {
        $rules = [
            'email' => 'required|email',
            'password' => 'required'
        ];

        $validator = Validator::make(Input::all(), $rules);

        if ($validator->fails()) {
            return response()->json(array('errors' => $validator->getMessageBag()->toArray()));
        }
    }
}

?>