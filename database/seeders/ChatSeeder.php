<?php

namespace Database\Seeders;

use App\Models\Chat;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ChatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Chat::create([
            'text' => Str::random(16),
            'user_id' => mt_rand(1, 3),
            'product_id' => mt_rand(1, 4)
        ]);
        Chat::create([
            'text' => Str::random(16),
            'user_id' => mt_rand(1, 3),
            'product_id' => mt_rand(1, 4)
        ]);
        Chat::create([
            'text' => Str::random(16),
            'user_id' => mt_rand(1, 3),
            'product_id' => mt_rand(1, 4)
        ]);
        Chat::create([
            'text' => Str::random(16),
            'user_id' => mt_rand(1, 3),
            'product_id' => mt_rand(1, 4)
        ]);
        Chat::create([
            'text' => Str::random(16),
            'user_id' => mt_rand(1, 3),
            'product_id' => mt_rand(1, 4)
        ]);
        Chat::create([
            'text' => Str::random(16),
            'user_id' => mt_rand(1, 3),
            'product_id' => mt_rand(1, 4)
        ]);
        Chat::create([
            'text' => Str::random(16),
            'user_id' => mt_rand(1, 3),
            'product_id' => mt_rand(1, 4)
        ]);
        Chat::create([
            'text' => Str::random(16),
            'user_id' => mt_rand(1, 3),
            'product_id' => mt_rand(1, 4)
        ]);
        Chat::create([
            'text' => Str::random(16),
            'user_id' => mt_rand(1, 3),
            'product_id' => mt_rand(1, 4)
        ]);
        Chat::create([
            'text' => Str::random(16),
            'user_id' => mt_rand(1, 3),
            'product_id' => mt_rand(1, 4)
        ]);
    }
}
