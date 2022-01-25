<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateModulosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cms.modulos', function (Blueprint $table) {
            $table->id();
            $table->string('imagem')->nullable();
            $table->string('titulo')->nullable();
            $table->text('descricao')->nullable();
            $table->text('arquivo')->nullable();
            $table->text('slug')->nullable();
            $table->integer('status')->default(0);
            $table->integer('show')->default(0);
            $table->integer('tipo_id')->unsigned();
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
        Schema::dropIfExists('cms.modulos');
    }
}
