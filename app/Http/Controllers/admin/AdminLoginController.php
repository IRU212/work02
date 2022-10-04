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

        $user_id = $request->input("user_id");
		$password = $request->input("password");

        //ログイン成功
        if ($user_id == "iru212" && $password == "ryuuya2121b") {
            $request->session()->put("admin_auth", true);
			return redirect("admin");
        }

        //ログイン失敗
		return redirect("admin/login")->withErrors([
			"login" => "ユーザーIDまたはパスワードが違います"
		]);
    }
}
