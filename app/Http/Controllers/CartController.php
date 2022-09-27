<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    public function index(){
        $data = DB::table('carts')
        ->select('carts.id','carts.user_id as list_user_id',
            "name","introduce","image","genre","price","review","products.user_id as post_user_id")
        ->rightJoin('products','carts.product_id','=','products.id')
        ->get();
        return response()->json($data);
    }

    public function store(Request $request){
        $cart = new Cart();
        $cart->product_id = $request->product_id;
        $cart->user_id = $request->user_id;
        $cart->save();
        return response()->json($cart);
    }

}
