<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/home',[ProductController::class,'index']);
Route::get('/home/{id}',[ProductController::class,'show']);

Route::get('/chat',[ChatController::class,'index']);
Route::get('/chat/store',[ChatController::class,'store']);
Route::post('/chat/store',[ChatController::class,'store']);

Route::get('cart',[CartController::class,'index']);
Route::get('cart/store',[CartController::class,'store']);
Route::post('cart/store',[CartController::class,'store']);