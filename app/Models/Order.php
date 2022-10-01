<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = "orders";

    protected $filable = [
        'id',
        'money',
        'orderdetail_id',
        'situation_id',
        'user_id'
    ];
}
