<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

//nome do arquivo da migration foi renomeado para ficar na sequencia das migrations que foram criadas anteriormente.
//a data correta de criação da migration foi 2022_11_18
class AlterArquivoTableImagemNull extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('catalogo.arquivo', function (Blueprint $table) {
            $table->string('imagem')->nullable()->change();
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
            $table->string('imagem')->change();
        });
    }
}
