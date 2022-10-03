<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function store($productId){
        $user = User::find(3);
        $user->like($productId);
        return 'ok!';
    }

    public function destroy($productId){
        $user = User::find(3);
        $user->unlike($productId);
        return 'ok!';
    }
}
