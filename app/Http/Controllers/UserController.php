<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(){
        $data = User::all();
        return response()->json($data);
    }

    public function show($id){
        $data = User::find($id);
        return response()->json($data);
    }
}
