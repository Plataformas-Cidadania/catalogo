<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIntegrantesPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cms.integrantes_posts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('integrante_id')->unsigned()->default(0);
            $table->foreign('integrante_id')->references('id')->on('cms.integrantes')->onDelete('cascade');
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
        Schema::drop('cms.integrantes_posts');
    }
}
