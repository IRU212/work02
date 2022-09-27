<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function index(){
        $chat = Chat::all();
        return response()->json($chat);
    }
}
