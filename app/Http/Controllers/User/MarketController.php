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
        $bet_type = $request->bet_type ;

        $ret = DatMarket::where("status", "N")->select(["id", "name", "open_time", "close_time", "status"])->get()->toArray() ;
        $data_ = array() ;
        
        foreach($ret as $item) {
            $type = "" ;
            $time="00:00" ;

            $now = strtotime(date("Y-m-d H:i:s")) ;
            $open_time = strtotime(date("Y-m-d {$item['open_time']}")) ;
            $close_time = strtotime(date("Y-m-d {$item['close_time']}")) ;
            if($now < $open_time) {
                $type = "OPEN" ;
                $time = $item['open_time'] ;
            } else if($now < $close_time && $now > $open_time) {
                $type = "CLOSE" ;
                $time = $item['close_time'] ;
            } else {
                continue ;
            }

            if($bet_type == "tripple_patti" && $type != "open") {
                continue ;
            }

            if($bet_type == "tripple_patti" && $type != "open") {
                continue ;
            }
            

            $item['type'] = $type ;
            $item['time'] = $time ;
            $data_[] = $item ;
            
        }
        
        
        return response()->json($data_);
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