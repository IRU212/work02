<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = "products";

    protected $filable = [
        'id',
        'name',
        'introduce',
        'image',
        'genre',
        'price',
        'review',
        'user_id'
    ];

    public function users(){
        return $this->belongsToMany(User::class,'product_user','user_id','product_id')->withTimestamps();
    }
}
