<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class FollowController extends Controller
{
    public function index(){
        $user = User::find(3)->followers()->get();
        return response()->json($user);
    }
}
