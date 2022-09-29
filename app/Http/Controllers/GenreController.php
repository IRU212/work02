<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class GenreController extends Controller
{
    public function find($id)
    {
        $data_get = new Product();
        $data = $data_get::where('genre','=',$id)->get();
        return response()->json($data);
    }
}
