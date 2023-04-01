<?php 

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\TransctionLog;
use App\Models\ScoreLog;
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
            return response()->json(
                array(
                    'status'=>"200", 
                    "message"=>"Login Successfully", 
                    "user_info"=>$this->userCredit()
            ));    
        }
        
        return response()->json(array('status'=>"201", "message"=>"Incorrect username or password."));
    }
    public function checkLoginState(Request $request) {
        
        
        if(Auth()->check()) {
            return response()->json(
                array(
                    'status'=>"200",
                    "user_info"=> $this->userCredit()
                )) ;
        } else {
            return response()->json(array('status'=>"201")) ;
        }
    } 
    public function signOut() {
        Auth::logout() ;
        return response()->json(array('status'=>"200", "message"=>"Success"));
    }
    public function userCredit() {
        $username = Auth()->user()->username ;
        $user_info = USER::where('username', $username)
            ->select(["point"])
            ->get()
            ->toArray() ;
        $now_point = $user_info[0]['point'] ;
        $last_credit_point = 0 ;
        $trans_info = ScoreLog::where("username", $username)
            ->where("type", "credit")
            ->select("*")
            ->orderBy("updatetime", "desc")
            ->get()
            ->toArray() ;
        if(count($trans_info) > 0) {
            $last_credit_point = $trans_info[0]['point'] ;
        }

        return array(
            "now_point"=>$now_point,
            "last_credit_point"=>$last_credit_point
        ) ;
    }
    public function AdminLogin(Request $request) {
        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required'],
        ]);
        $credentials['is_admin'] = 'Y' ;
        if (Auth::guard("web")->attempt($credentials)) {
            $request->session()->regenerate();
            return response()->json(
                array(
                    'status'=>"200", 
                    "message"=>"Login Successfully", 
                    "user_info"=>$this->userCredit()
            ));    
        }
        
        return response()->json(array(
            "status"=>"201",
            "message"=>"Incorrect Username or Password"
        )) ;
    }
}

?>