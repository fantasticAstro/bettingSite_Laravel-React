<?php
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\User\DashController;
use App\Http\Controllers\User\MarketController;
use App\Http\Controllers\AuthController;

use App\Http\Controllers\Admin\AdminUsersController;
use App\Http\Controllers\Admin\AdminGameController;
use App\Http\Controllers\Admin\AdminDashController;
use App\Http\Controllers\Admin\AdminUserProfileController ;
use App\Http\Controllers\Admin\AdminTransactionController ;
use App\Http\Controllers\Admin\AdminDeclareController ;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get("{any}", function () {
    return view('welcome'); // or wherever your React app is bootstrapped.
})->where('any', '.*');

Route::post('/get_live_result', [DashController::class, 'getLiveResult']);
Route::post('/get_market_list', [MarketController::class, 'getMarketList']);
Route::post('/get_bet_info', [MarketController::class, 'getBetInfo']);
Route::post('/save_bet', [MarketController::class, 'saveBet']);
Route::post('/sign_up', [AuthController::class, 'signUp']);


Route::post('/admin/user/get_user_data', [AdminUsersController::class, 'getUserData']);
Route::post('/admin/user/add_user_data', [AdminUsersController::class, 'addUserData']);
Route::post('/admin/game/get_game_list', [AdminGameController::class, 'getGameList']);
Route::post('/admin/game/save_edit_game', [AdminGameController::class, 'saveEditGame']);
Route::post('/admin/game/delete_game', [AdminGameController::class, 'deleteGame']);

Route::post('/admin/game/get_game_rates', [AdminGameController::class, 'getGameRates']);
Route::post('/admin/save_game_rates', [AdminGameController::class, 'saveGameRates']);
Route::post('/admin/get_dash_info', [AdminDashController::class, 'getDashInfo']);
Route::post('/admin/user_profile/edit_point', [AdminUserProfileController::class, 'editPoint']);
Route::post('/admin/user_profile/get_user_info', [AdminUserProfileController::class, 'getUserInfo']);
Route::post('/admin/get_trans_data', [AdminTransactionController::class, 'getTransData']);
Route::post('/admin/declare/get_game_data', [AdminDeclareController::class, 'getGameData']);
Route::post('/admin/declare/get_filter_data', [AdminDeclareController::class, 'getFilterData']);
Route::post('/admin/declare/save_data', [AdminDeclareController::class, 'saveData']);
Route::post('/admin/declare/delete_data', [AdminDeclareController::class, 'deleteData']);





