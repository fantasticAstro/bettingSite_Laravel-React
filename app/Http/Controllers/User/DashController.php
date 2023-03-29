<?php 

namespace App\Http\Controllers\User;
use App\Models\DatMarket;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App;


class DashController extends Controller
{
    public function getLiveResult(Request $request) {
        $ret = DatMarket::where("status", "Y")->select("*")->get()->toArray() ;
        $data = array() ;
        foreach($ret as  $item) {
            $now = strtotime(date("Y-m-d H:i:s")) ;
            $open_time = strtotime(date("Y-m-d {$item['open_time']}")) ;
            $close_time = strtotime(date("Y-m-d {$item['close_time']}")) ;
            if($now < $close_time) {
                $data[] = $item ;
            }
        }
        return response()->json($data);
    }
}

?>