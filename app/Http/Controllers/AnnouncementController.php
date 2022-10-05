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

        // 未読メッセージを読んだら既読にする
        // if(User::find($userId)->JudgementRead($announcementId) == true){
        //     Read::where('user_id',$userId)->where('announcement_id',$announcementId)->update(['read' => 1]);
        // }

        return response()->json($data);
    }
}
