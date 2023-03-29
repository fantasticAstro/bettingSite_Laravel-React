<?php 

namespace App\Http\Controllers\Admin;
use App\Models\User;
use App\Models\ScoreLog;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App;
use Carbon\Carbon;


class AdminTransactionController extends Controller
{
    public function getTransData(Request $request) {
        $date = $request->date ;
        $dayBefore = (new Carbon($date))->modify('-1 day')->format('Y-m-d') ;
        $dayafter = (new Carbon($date))->modify('+1 day')->format('Y-m-d') ;
        
        $ret = ScoreLog::whereDate("updatetime", ">", "$dayBefore")
                ->whereDate("updatetime", "<", "$dayafter")
                ->select("*")
                ->get()
                ->toArray() ;
        $deposit =  0 ; 
        $withdraw = 0 ;
        
        foreach($ret as $item) {
            if($item['type'] == 'credit') {
                $deposit = $deposit + $item['point'] ;
            } else {
                $withdraw = $withdraw + $item['point'] ;
            }
        }

        $profit = $deposit - $withdraw ;
        $data = array(
            "deposit"=>$deposit,
            "withdraw"=>$withdraw,
            "profit"=>$profit,
            "log"=>$ret 
        ) ;
        return response()->json($data);
    }
}

?>