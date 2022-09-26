<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name'); //商品名
            $table->string('introduce'); //商品紹介
            $table->string('image'); // 画像path
            $table->integer('genre'); // ジャンル 1,ゲーム 2,PC 3, 電化製品 4,グッズ 5,食料 6, 服 7, 漫画 8,グッズ　9, その他
            $table->integer('price'); // 値段
            $table->integer('review'); // レビュー
            $table->foreignId('user_id'); // ユーザID
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
