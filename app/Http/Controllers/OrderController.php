<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function store(Request $request){
        $order = new Order();
        $order->money = $request->money;
        $order->orderdetail_id = 1; // 仮
        $order->situation_id = 3; // 3は未配達
        $order->user_id = $request->user_id;
        $order->save();
        return response()->json($order);
    }
}
