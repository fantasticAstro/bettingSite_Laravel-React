<?php 

namespace App\Http\Controllers\Admin;
use App\Models\DatMarket;
use App\Models\DatBet;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App;


class AdminGameController extends Controller
{
    public function getGameList(Request $request) {
        $ret = DatMarket::all() ;
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
    public function saveEditGame(Request $request) {
        $edit_id = $request->edit_id ;
        $edit_form = $request->edit_form ;

    }
    public function getGameRates(Request $request) {
        $ret = DatBet::all() ;
        return response()->json($ret);
    }
    public function saveGameRates(Request $request) {
        
        $data = $request->data ;

        foreach($data as $item) {
            DatBet::where('id', $item['id'])->update(['value' => $item['value']]);
        }
        
        
        return response()->json(array("status"=>"200")) ;
    }
}

?>