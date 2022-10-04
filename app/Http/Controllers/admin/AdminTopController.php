<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminTopController extends Controller
{
	public function index(){
		return Inertia::render('Admin/AdminHome');
	}

    function show(){
		return view("admin.admin_top");
	}
}
