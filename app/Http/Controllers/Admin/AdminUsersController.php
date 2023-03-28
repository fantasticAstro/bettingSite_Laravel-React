<?php 

namespace App\Http\Controllers\Admin;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App;


class AdminUsersController extends Controller
{
    public function getUserData(Request $request) {
        $ret = User::all() ;
        return response()->json($ret);
    }
    public function addUserData(Request $request) {
        User::insert([
            'username' => $request->username,
            'mobile' => $request->mobile,
            'password' =>md5($request->password),
            'point'=>0,
            'is_block'=>'N',
            'created_at'=>date("Y-m-d H:i:s")
        ]);
        return response()->json(array('status'=>'200'));
    }
}

?>