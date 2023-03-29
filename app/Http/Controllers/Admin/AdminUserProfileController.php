<?php 

namespace App\Http\Controllers\Admin;
use App\Models\User;
use App\Models\ScoreLog;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App;


class AdminUserProfileController extends Controller
{
    public function editPoint(Request $request) {
        $point = $request->point ;
        $id = $request->id ;
        $type = $request->type ;
        
        $user_info = User::where("id", $id)->select("*")->get()->toArray() ;
        $user_point = $user_info[0]['point'] ;
        if($type == "Add Points") {
            $user_point = $user_point + $point ;
            $type = "credit" ;
        } else {
            $user_point = $user_point - $point ;
            $type = "debit" ;
        }

        $ret = User::where("id", $id)->update(["point"=>$user_point]) ;
        
        ScoreLog::insert([
            "username"=>$user_info[0]['username'],
            "updatetime"=>date("Y-m-d H:i:s"),
            "type"=>$type,
            "point"=>$point
        ]) ;

        return response()->json(array("status"=>"200"));

    }
    public function getUserInfo(Request $request) {
        $id = $request->id; 
        $user_info = User::where("id", $id)->select("*")->get()->toArray() ;
        return response()->json($user_info[0]);
    }
}

?>