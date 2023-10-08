<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriasPosts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cms.categorias_posts', function (Blueprint $table) {
            $table->id();
            $table->integer('categoria_id')->unsigned()->default(0);
            $table->foreign('categoria_id')->references('id')->on('cms.categorias')->onDelete('cascade');
            $table->integer('post_id')->unsigned()->default(0);
            $table->foreign('post_id')->references('id')->on('cms.posts')->onDelete('cascade');
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
        Schema::dropIfExists('cms.categorias_posts');
    }
}
