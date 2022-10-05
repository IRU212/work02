<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Read extends Model
{
    protected $table = "announcement_user";

    protected $filable = [
        "id",
        "user_id",
        "announcement_id",
        "read"
    ];
}