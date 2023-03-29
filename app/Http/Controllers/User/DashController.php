<?php 

namespace App\Http\Controllers\User;
use App\Models\DatMarket;
use App\Models\MarketCategory;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App;


class DashController extends Controller
{
    public function getLiveResult(Request $request) {
        $live_market = DatMarket::where("status", "Y")->select("*")->get()->toArray() ;
        $ret = array() ;
        foreach($live_market as $item) {
            $_item = MarketCategory::where("id", $item['category_id'])->select(["id", "name", "open_time", "close_time", "status"])->get()->toArray() ;
            $_item[0]['result'] = $item["open_patti"].$item['close_patti'] ;
            $ret[] = $_item[0] ;
        }
        
        return response()->json($ret);
    }
}

?>