<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class LikeproductController extends Controller
{
    public function show($id){
        $user = User::find($id);
        $data = $user->products()->select('products.id','image')->get();
        return response()->json($data);
    }
}
