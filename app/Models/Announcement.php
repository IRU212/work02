<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
    protected $table = "announcements";

    protected $fillable = [
        "id",
        "title",
        "description"
    ];

    public function users(){
        return $this->belongsToMany(User::class,'announcement_user','announcement_id','user_id')->withPivot('read')->withTimestamps();
    }
}
