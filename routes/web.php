<?php

use App\Http\Controllers\admin\AdminLoginController;
use App\Http\Controllers\admin\AdminLogoutController;
use App\Http\Controllers\admin\AdminTopController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\LikeController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->middleware(['auth', 'verified']);


Route::get('/home/{id}', function () {
    return Inertia::render('HomeListDetail', [
        // 'canLogin' => Route::has('login'),
        // 'canRegister' => Route::has('register'),
        // 'laravelVersion' => Application::VERSION,
        // 'phpVersion' => PHP_VERSION,
    ]);
})->middleware(['auth', 'verified']);

Route::get('/post', function () {
    return Inertia::render('Post', [
        // 'canLogin' => Route::has('login'),
        // 'canRegister' => Route::has('register'),
        // 'laravelVersion' => Application::VERSION,
        // 'phpVersion' => PHP_VERSION,
    ]);
})->middleware(['auth', 'verified']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/cartlist',function () {
    return Inertia::render('CartList');
})->middleware(['auth', 'verified']);

Route::get('/profile/{id}',function () {
    return Inertia::render('Profile');
})->middleware(['auth', 'verified']);

Route::get('/following/{id}',function () {
    return Inertia::render('Following');
})->middleware(['auth', 'verified']);

Route::get('/follower/{id}',function () {
    return Inertia::render('Follower');
})->middleware(['auth', 'verified']);

Route::get('/carthistory',function () {
    return Inertia::render('CartHistory');
})->middleware(['auth', 'verified']);

Route::get('/like/{id}',function () {
    return Inertia::render('LikeProduct');
})->middleware(['auth', 'verified']);

Route::get('/genre/{id}',function () {
    return Inertia::render('ByGenre');
})->middleware(['auth', 'verified']);

require __DIR__.'/auth.php';

// Admin
Route::prefix('/admin')->group(function(){
    Route::get('/login',[AdminLoginController::class,'showLoginForm'])->name('admin.login');
    Route::get('/login/post',[AdminLoginController::class,'login']);
    Route::post('/login/post',[AdminLoginController::class,'login']);
    Route::get('/logout',[AdminLogoutController::class,'logout'])->name('admin.logout');
});

Route::prefix('/admin')->group(function(){
    Route::get('/home',[AdminTopController::class,'index'])->name('admin.home');
    Route::get('/user',function(){
        return Inertia::render('Admin/AdminUser');
    })->name('admin.home.user');
});

Route::get('/test',[CartController::class,'test']);