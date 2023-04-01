<?php 

namespace App\Http\Controllers\User;
use App\Models\DatMarket;
use App\Models\DatBet;
use App\Models\MarketCategory;
use App\Models\TransactionLog;
use App\Models\User;


use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App;
use Carbon\Carbon;


class MarketController extends Controller
{
    public function getMarketList(Request $request) {
        $bet_type = $request->bet_type ;

        $dayBefore = (new Carbon())->modify('-1 day')->format('Y-m-d') ;
        $dayafter = (new Carbon())->modify('+1 day')->format('Y-m-d') ; 
        $ret = DatMarket::where("status", "N")
        ->whereBetween("date", [$dayBefore, $dayafter])
        ->select("*")
        ->get()
        ->toArray() ;

        $data_ = array() ;
        foreach($ret as $item) {
            $type = "" ;
            $time="00:00" ;
            
            $market_info = MarketCategory::where("id", $item["category_id"])
            ->where("status", "Y")
            ->select(["name", "open_time", "close_time", "id"])
            ->get()
            ->toArray() ;
            if(!$market_info)  {
                continue ;
            }
            
            $market_info = $market_info[0] ;
            $market_info['date'] = $item['date'] ;

            $now = strtotime(date("Y-m-d H:i:s")) ;
            $open_time = strtotime(date("Y-m-d {$market_info['open_time']}")) ;
            $close_time = strtotime(date("Y-m-d {$market_info['close_time']}")) ;
            if($now< $open_time) {
                $type = "OPEN" ;
                $time = $market_info['open_time'] ;
            } else if($now < $close_time && $now > $open_time) {
                $type = "CLOSE" ;
                $time = $market_info['close_time'] ;
            } else {
                continue ;
            }

            
            $market_info['type'] = $type ;
            $market_info['time'] = $time ;
            $data_[] = $market_info ;   
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
        
        $username = Auth()->user()->username ; 
        $user_info = User::where("username", $username)->select("point")->get()->toArray() ;
        $user_point = $user_info[0]['point'] ;
        

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
        if($user_point < $points) {
            return response()->json(array("status"=>"201", "message"=>"You don't have enough balance."));
        } else {   

            TransactionLog::insert([
                "updatetime"=>date("Y-m-d H:i:s"),
                "market_id"=>$market_id,
                "bet_id"=>$bet_id,
                "points"=>$points,
                "username"=>$username,
                "bet_data"=>json_encode($bet_data)
            ]) ;
            
            Users::where("username", $username)->update([
                "point"=>$user_point - $points
            ]) ;
        }
        return response()->json(array("status"=>"200"));
    }
}

?>