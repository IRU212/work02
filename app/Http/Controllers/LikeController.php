<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function store(){
        $user = User::find(2);
        // $data = $a->products()->get();
        // $data = foreach ($user->ranks as $rank) {
        //     $rank->id;//会員ランクのID表示
        //     $rank->name;//会員ランクの名前表示
        // };
        $data = $user->products()->sync(3);
        echo $data;
    }

    public function destory(){
        
    }
}
