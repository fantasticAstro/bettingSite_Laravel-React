<?php 

namespace App\Http\Controllers\Admin;
use App\Models\DatMarket;
use App\Models\MarketCategory;
use App\Models\DatBet;
use App\Models\User;
use App\Models\TransactionLog;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App;
use Carbon\Carbon;


class AdminDeclareController extends Controller
{
    public function getGameData(Request $request) {
        $date = $request->date ;
        $dayBefore = (new Carbon($date))->modify('-1 day')->format('Y-m-d') ;
        $dayafter = (new Carbon($date))->modify('+1 day')->format('Y-m-d') ;

        $ret = DatMarket::whereDate("date", ">", "$dayBefore")
                ->whereDate("date", "<", "$dayafter")
                ->select("*")
                ->get()
                ->toArray() ;
        $data = array() ;
        foreach($ret as  $item) {

            $_item = MarketCategory::where('id', $item['category_id'])->select("*")->get()->toArray() ;
            
            $item['name'] = $_item[0]['name'] ;
            $data[] = $item ;
        }

        return response()->json($data);
    }
    public function getFilterData() {
        $game_list = MarketCategory::where("status", "Y")->select("*")->get()->toArray() ;
        $patti_list = [];
        while(count($patti_list) < 800){
            do  {
                $patti_number = mt_rand(101,999);    
            } while (in_array($patti_number, $patti_list));
            $patti_list[] = $patti_number;
        }
        $digit_number = mt_rand(0, 9) ;
        return response()->json(array(
            "game_list"=>$game_list,
            "patti_list"=>$patti_list,
            "digit"=>$digit_number
        ));
    }
    public function saveData(Request $request) {
        $market_id = $request->game_id;
        $session = $request->session ;
        $patti = $request->patti ;
        $date = (new Carbon($request->date))->format("Y-m-d") ;
        $digit = $request->digit ;
        $res_letter= "" ;

        if($session == "open") {
            $res_letter= "{$patti}-{$digit}" ;
        } else {
            $res_letter= "{$digit}-{$patti}" ;
        }
        
        DatMarket::insert([
            "date"=>$date,
            "{$session}_patti"=>$res_letter,
            "category_id"=>$market_id,
        ]) ;
        return response()->json(array(
            "status"=>"200"
        ));

    }
    public function deleteData(Request $request) {
        $id = $request->id ;
        DatMarket::where("id", $id)->delete() ;
        return response()->json(array(
            "status"=>"200"
        ));
    }
}