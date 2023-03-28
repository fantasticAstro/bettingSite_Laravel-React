<?php
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\User\DashController;
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