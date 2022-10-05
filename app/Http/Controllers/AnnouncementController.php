<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use App\Models\User;
use Illuminate\Http\Request;

class AnnouncementController extends Controller
{
    public function index(){
        $data = User::find(2)->announcements()->sync(1);
        return response()->json($data);
    }
}
