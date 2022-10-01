<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orderdetail extends Model
{
    protected $table = "orderdetails";

    protected $filable = [
        "id",
        "quantity",
        "product_id",
        "order_id"
    ];
}
