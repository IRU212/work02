<?php

namespace App\Http\Controllers;

use App\Models\Follow;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FollowController extends Controller
{
    public function index($userId,$followId){

        //  フォロー
        $folloCount = User::find($userId)->followers()->count();
        $followUser = User::find($userId)->followers()->get();

        //フォロワー
        $followerCount = DB::table('follower_user')->where('user_id','!=',$userId)->get()->count();
        $followerUser = DB::table('follower_user')
            ->where('user_id','!=',$userId)
            ->where('follower_id','=',$userId)
            ->leftJoin('users','users.id','=','follower_user.user_id')
            ->get();

        return response()->json([
            "followUser" => $followUser,
            "folloCount" => $folloCount,
            "followerUser" => $followerUser,
            "followerCount" => $followerCount
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
