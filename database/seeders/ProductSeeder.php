<?php

namespace Database\Seeders;

use App\Models\Products;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Products::create([
            'name' => "ポテチ 塩",
            'introduce' => "うまいよな～",
            'image' => "https://koikeya.co.jp/commodity/all_images/011801221717529931.png",
            'genre' => 5,
            'price' => 100,
            'review' => mt_rand(1, 5),
            'user_id' => mt_rand(1, 4)
        ]);
        Products::create([
            'name' => "ONE PIECE 103巻",
            'introduce' => "ONE PIECE 103巻",
            'image' => "https://images-na.ssl-images-amazon.com/images/I/913EZBMd6-L.jpg",
            'genre' => 5,
            'price' => 432,
            'review' => mt_rand(1, 5),
            'user_id' => mt_rand(1, 4)
        ]);
    }
}
