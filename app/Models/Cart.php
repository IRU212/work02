<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $table = "carts";

    protected $fiable = [
        'id',
        'quantity',
        'product_id',
        'user_id',
    ];
}
