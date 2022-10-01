<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartHistory extends Model
{
    protected $table = 'cart_histories';

    protected $filable = [
        'id',
        'user_id',
        'product_id'    
    ];
}
