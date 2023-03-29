<?php 

namespace App\Http\Controllers\Admin;
use App\Models\DatMarket;
use App\Models\DatBet;
use App\Models\User;
use App\Models\TransactionLog;



use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App;


class AdminDashController extends Controller
{
    public function getDashInfo(Request $request) {
        $data = array(
            "approved_user"=>$this->getApprovedUser(),
            "unapproved_user"=>$this->getUnApprovedUser(),
            "bet_count"=>$this->getBetCount(),
            "bet_amount"=>$this->getBetAmount()
        ) ;
        return response()->json($data);

    } 
    public  function getApprovedUser() {
       $ret = User::where("is_block", "N")->select("*")->get()->toArray() ;
       return count($ret) ;
    }
    public  function getUnApprovedUser() {
        $ret = User::where("is_block", "Y")->select("*")->get()->toArray() ;
        return count($ret) ;
    }
    public function getBetCount() {
        $ret = TransactionLog::select("*")->get()->toArray() ;
        return count($ret) ;
    }
    public function getBetAmount() {
        $total_points = 0 ;
        $ret = TransactionLog::select(["points"])->get()->toArray() ;
        foreach($ret as $item) {
            $total_points = $total_points + $item["points"] ;
        }
        return $total_points ;
    }
}

?>