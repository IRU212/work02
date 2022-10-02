<?php

namespace Database\Seeders;

use App\Models\Situation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SituationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Situation::create([
            'delivery' => '配達済み'
        ]);
        Situation::create([
            'delivery' => '配達中'
        ]);
        Situation::create([
            'delivery' => '未配達'
        ]);
    }
}
