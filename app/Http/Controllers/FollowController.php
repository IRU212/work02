<?php

namespace App\Http\Controllers;

use App\Models\Follow;
use App\Models\User;
use Illuminate\Http\Request;

class FollowController extends Controller
{
    public function index($userId,$followId){
        //  フォロー数カウント
        $userCount = User::find($userId)->followers()->count();
        return response()->json([
            "userCount"=> $userCount
        ]);
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
