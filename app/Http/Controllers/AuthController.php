<?php 

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;
use Illuminate\Auth\EloquentUserProvider ;
use Auth;
use Session;
use Illuminate\Support\Facades\Hash;

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

        $validator = Validator::make($request->all(), $rules) ;
        if($validator->passes()) {
            if(!$this->checkExistUser($request->username)){
                return response()->json(array('status'=>"200", "message"=>"Aleady exist your username."));    
            }
            
            User::insert([
                "username"=>$request->username,
                "email"=>$request->email,
                "mobile"=>$request->mobile,
                "password"=>Hash::make($request->password),
                "full_name"=>$request->full_name,
                "regist_date"=>date("Y-m-d")
            ]) ;  
            return response()->json(array('status'=>"200", "message"=>"Regist Successfully"));    
        } 
        return response()->json(array('status'=>"201", "message"=>"You must Regist Form."));

    }

    public function checkExistUser($username) {
        $ret = User::where("username", $username)->select("*")->get()->toArray() ;
        if(count($ret) > 0) {
            return true;
        }
        return false ;
    }
    public function logIn(Request $request) {
        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required'],
        ]);

        if (Auth::guard("web")->attempt($credentials)) {
            $request->session()->regenerate();
            return response()->json(array('status'=>"200", "Login Successfully"));    
        }
        
        return response()->json(array('status'=>"201", "message"=>"Incorrect username or password."));
    }
    public function checkLoginState(Request $request) {
        if(Auth()->check()) {
            return response()->json(array('status'=>"200")) ;
        } else {
            return response()->json(array('status'=>"201")) ;
        }
    } 
    public function signOut() {
        Auth::logout() ;
        return response()->json(array('status'=>"200", "message"=>"Success"));
    }
}

?>