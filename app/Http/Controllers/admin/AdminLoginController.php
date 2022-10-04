<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminLoginController extends Controller
{
    public function showLoginForm(){
        return Inertia::render('Admin/Login');
    }

    public function login(Request $request){
        //ログイン成功
		return redirect()->route('admin.home');
    }
}
