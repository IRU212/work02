<?php

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
