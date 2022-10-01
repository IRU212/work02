<?php

namespace App\Http\Controllers;

use App\Models\Orderdetail;
use Illuminate\Http\Request;

class OrderdetailController extends Controller
{
    public function store(Request $request){
        $orderDetail = new Orderdetail();
        $orderDetail->quantity = $request->quantity;
        $orderDetail->product_id = $request->product_id;
        $orderDetail->order_id = 1;
        $orderDetail->save();
        return response()->json($orderDetail);
    }
}
