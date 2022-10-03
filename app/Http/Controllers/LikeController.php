<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function index($userId,$productId){
        $data = User::find($userId)->products()->where('product_id',$productId)->exists();
        return response()->json($data);
    }

    public function store($userId,$productId){
        $user = User::find($userId);
        $user->like($productId);
    }

    public function destroy($userId,$productId){
        $user = User::find($userId);
        $user->unlike($productId);
    }
}
