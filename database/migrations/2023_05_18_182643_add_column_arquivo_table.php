<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnArquivoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('catalogo.arquivo', function (Blueprint $table) {
            $table->string('url_externa')->nullable();
            $table->string('caminho_arquivo')->nullable()->change();
            $table->smallInteger('tipo')->default(0)->comment('0 - arquivo | 1 -> url externa');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('catalogo.arquivo', function (Blueprint $table) {
            $table->dropColumn('url_externa');
            $table->dropColumn('tipo');
        });
    }
}
