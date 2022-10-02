<?php

namespace App\Http\Controllers;

use App\Models\Orderdetail;
use Illuminate\Http\Request;

class OrderdetailController extends Controller
{
    public function index(){
        $orderDetail_get = Orderdetail::latest('order_id')->pluck("order_id")->first();
        $orderDetail_total = $orderDetail_get + 1;
        echo $orderDetail_total;
    }

    public function store(Request $request){
        $orderDetail_get = Orderdetail::latest('order_id')->pluck("order_id")->first();
        $orderDetail_total = $orderDetail_get + 1;

        $orderDetail = new Orderdetail();
        $orderDetail->quantity = $request->quantity;
        $orderDetail->product_id = $request->product_id;
        $orderDetail->order_id = $orderDetail_total;
        $orderDetail->save();
        return response()->json($orderDetail);
    }

    public function cancel(Request $request,$id){
        // $user_id = $request->user_id;
        $orderDetail = Orderdetail::find($id)->delete();
        return response()->json($orderDetail);
    }
}
