<?php

namespace App\Http\Controllers;

use App\Models\CartHistory;
use Illuminate\Http\Request;

class PurchaseController extends Controller
{
    public function store(Request $request){
        $cart_history = new CartHistory();
        $cart_history->user_id = $request->user_id;
        $cart_history->product_id = $request->product_id;
        $cart_history->save();
        return response()->json($cart_history);
    }
}
