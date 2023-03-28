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
        $ret = DatMarket::all() ;
        return response()->json($ret);
    }
}

?>