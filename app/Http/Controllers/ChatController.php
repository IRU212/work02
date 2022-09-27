<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function index(){
        $chat = Chat::latest()->get();
        return response()->json($chat);
    }

    public function store(Request $request){
        $chat = new Chat();
        $chat->text = $request->text;
        $chat->product_id = $request->product_id;
        $chat->user_id = $request->user_id;
        // $chat->text = "test";
        // $chat->product_id = 3;
        // $chat->user_id = 3;
        $chat->save();
        return response()->json($chat);
    }
}
