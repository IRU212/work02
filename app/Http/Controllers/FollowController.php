<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class FollowController extends Controller
{
    public function index($userId,$followId){
        $user = User::find($userId)->followers()->get();
        return response()->json($user);
    }

    public function store($userId,$followId){
        $user = User::find($userId);
        $user->follow($followId);
    }

    public function destroy($userId,$followId){
        $user = User::find($userId);
        $user->unfollow($followId);
    }
}
