<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function store(Request $request){

        $file_name = $request->image->getClientOriginalName();
        $request->image->storeAs('public/image',$file_name);

        $path = 'storage/image/'.$file_name;

        $post = new Product();
        $post->name = $request->name;
        $post->introduce = $request->introduce;
        $post->image = $path;
        $post->genre = $request->genre;
        $post->price = $request->price;
        $post->stock = $request->stock;
        $post->review = $request->review;
        $post->user_id = $request->user_id;
        $post->save();

        return response()->json($post);
    }
}
