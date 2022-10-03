<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\FollowController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\LikeproductController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderdetailController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\UserController;
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

// ユーザ情報
Route::get('/user',[UserController::class,'index']);
Route::get('/user/{id}',[UserController::class,'show']);

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

// カート機能
Route::get('cart',[CartController::class,'index']);
Route::get('cart/store',[CartController::class,'store']);
Route::post('cart/store',[CartController::class,'store']);
Route::get('cart/delete',[CartController::class,'delete']);
Route::post('cart/delete',[CartController::class,'delete']);
Route::get('cart/cancel/{id}',[CartController::class,'cancel']);
Route::post('cart/cancel/{id}',[CartController::class,'cancel']);
Route::get('cart/delete',[CartController::class,'delete']);
Route::post('cart/delete',[CartController::class,'delete']);

// オーダー機能
Route::get('order/store',[OrderController::class,'store']);
Route::post('order/store',[OrderController::class,'store']);

// 商品購入
Route::get('/orderdetail/store',[OrderdetailController::class,'store']);
Route::post('/orderdetail/store',[OrderdetailController::class,'store']);
Route::get('/orderdetail/cancel',[OrderdetailController::class,'cancel']);
Route::post('/orderdetail/cancel',[OrderdetailController::class,'cancel']);

// 商品をジャンルごとに表示
Route::get('genre/{id}',[GenreController::class,'find']);

// いいねした商品を表示
Route::get('like/{id}',[LikeproductController::class,'show']);

// いいね機能
Route::get('/likeHome/{id}/{productId}',[LikeController::class,'index']);
Route::get('/like/{id}/{productId}',[LikeController::class,'store']);
Route::post('/like/{id}/{productId}',[LikeController::class,'store']);
Route::get('/unlike/{id}/{productId}',[LikeController::class,'destroy']);
Route::post('/unlike/{id}/{productId}',[LikeController::class,'destroy']);

//フォロー機能
Route::get('/follow',[FollowController::class,'index']);

// テスト
// Route::get('/test',[OrderdetailController::class,'index']);