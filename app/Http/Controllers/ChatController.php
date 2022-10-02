<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ChatController extends Controller
{
    public function index(){
        // $chat = Chat::latest()->get();
        $chat = DB::table('chats')
        ->select("chats.id","chats.text","chats.product_id","chats.user_id","chats.created_at as chat_created_at",
            "users.name","users.email","users.image","users.created_at as user_created_at"
        )
        ->leftJoin('users','chats.user_id','=','users.id')
        ->latest('chat_created_at')
        ->get();
        return response()->json($chat);
    }

    public function store(Request $request){
        $chat = new Chat();
        $chat->text = $request->text;
        $chat->product_id = $request->product_id;
        $chat->user_id = $request->user_id;
        $chat->save();
        return response()->json($chat);
    }
}
