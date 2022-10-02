<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Situation extends Model
{
    protected $table = "situations";

    protected $filable = [
        "id",
        "delivery"
    ];
}
