<?php
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\User\DashController;
use App\Http\Controllers\Admin\AdminUsersController;
use App\Http\Controllers\Admin\AdminGameController;


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

Route::post('/test', [DashController::class, 'getLiveResult']);

Route::post('/admin/get_user_data', [AdminUsersController::class, 'getUserData']);
Route::post('/admin/add_user_data', [AdminUsersController::class, 'addUserData']);
Route::post('/admin/get_game_list', [AdminGameController::class, 'getGameList']);
Route::post('/admin/save_edit_game', [AdminGameController::class, 'saveEditGame']);

Route::post('/admin/get_game_rates', [AdminGameController::class, 'getGameRates']);
Route::post('/admin/save_game_rates', [AdminGameController::class, 'saveGameRates']);



