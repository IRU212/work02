<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use App\Models\Read;
use App\Models\User;
use Illuminate\Http\Request;

class AnnouncementController extends Controller
{
    public function index($userId){
        // ログイン中のユーザの通知取得
        $data = User::find($userId)->announcements()->get();
        return response()->json($data);
    }

    public function show($userId,$announcementId){
        // 未読メッセージを読んだら既読にする
        if(User::find($userId)->JudgementRead($announcementId) == true){
            Read::where('user_id',$userId)->where('announcement_id',$announcementId)->update(['read' => 1]);
        }
    }

    public function follow($userId,$followId){

        // フォローしたユーザ名取得
        $fllow_name = User::where("id",$userId)->pluck("name")->first();

        // 最新のannouncementsのテーブルid取得
        $last_id = Announcement::latest('id')->pluck("id")->first();
        $Announcement_latest_id = $last_id + 1;

        Announcement::create([
            "title" => "フォロー通知",
            "description" => $fllow_name."さんにフォローされました"
        ]);

        User::find($followId)->announcements()->attach($Announcement_latest_id);

        return response()->json($Announcement_latest_id);
    }
}