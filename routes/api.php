<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PurchaseController;
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


//ホーム画面
Route::get('/home',[ProductController::class,'index']);
Route::get('/home/{id}',[ProductController::class,'show']);


//商品ごとのチャット機能
Route::get('/chat',[ChatController::class,'index']);
Route::get('/chat/store',[ChatController::class,'store']);
Route::post('/chat/store',[ChatController::class,'store']);

// 商品を出品
Route::get('/post/store',[PostController::class,'store']);
Route::post('/post/store',[PostController::class,'store']);

Route::get('cart',[CartController::class,'index']);
Route::get('cart/store',[CartController::class,'store']);
Route::post('cart/store',[CartController::class,'store']);
Route::get('cart/delete',[CartController::class,'delete']);
Route::post('cart/delete',[CartController::class,'delete']);

//商品購入
Route::get('/purchase/store',[PurchaseController::class,'store']);
Route::post('/purchase/store',[PurchaseController::class,'store']);

//商品をジャンルごとに表示
Route::get('genre/{id}',[GenreController::class,'find']);