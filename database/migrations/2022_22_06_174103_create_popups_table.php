<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePopupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cms.popups', function (Blueprint $table) {
            $table->id();
            $table->string('imagem');
            $table->string('titulo')->nullable();
            $table->text('descricao')->nullable();
            $table->string('url')->nullable();
            $table->integer('posicao')->default(0);
            $table->integer('status')->default(1);
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
        Schema::drop('cms.popups');
    }
}
