<?php 

namespace App\Http\Controllers\User;
use App\Models\DatMarket;
use App\Models\DatBet;
use App\Models\TransactionLog;


use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App;


class MarketController extends Controller
{
    public function getMarketList(Request $request) {
        $ret = DatMarket::where("status", "Y")->select(["id", "name", "open_time", "close_time", "status"])->get()->toArray() ;
        $data_ = array() ;
        return response()->json($ret);
    }
    public function getBetInfo(Request $request) {
        $name = $request->name ;
        $ret = DatBet::where("type", $name)->select("*")->get()->toArray();
        return response()->json($ret);
    }
    public function saveBet(Request $request) {
        $data = $request->data ;
        $market_id = $request->market_id;
        $bet_id = $request->bet_id ;
        $username = 'mickjagger' ;
        
        $ret = DatBet::where("id", $bet_id)->select("*")->get()->toArray();
        $bet_amount = $ret[0]['value'] ;

        $bet_data = array() ;
        $check_bet_count = 0 ;

        foreach($data as  $key => $item) {
            if($item) {
                $bet_data[] = $key ;
                $check_bet_count++ ;
            }
        }

        $points = $bet_amount * $check_bet_count ;

        TransactionLog::insert([
            "updatetime"=>date("Y-m-d H:i:s"),
            "market_id"=>$market_id,
            "bet_id"=>$bet_id,
            "points"=>$points,
            "username"=>$username,
            "bet_data"=>json_encode($bet_data)
        ]) ;

        return response()->json(array("status"=>"200"));

    }
}

?>