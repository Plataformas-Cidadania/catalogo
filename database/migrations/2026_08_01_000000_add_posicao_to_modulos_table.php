<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class AddPosicaoToModulosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cms.modulos', function (Blueprint $table) {
            $table->integer('posicao')->default(0);
        });

        DB::statement('
            WITH ordered AS (
                SELECT id, ROW_NUMBER() OVER (ORDER BY id) AS posicao
                FROM cms.modulos
            )
            UPDATE cms.modulos
            SET posicao = ordered.posicao
            FROM ordered
            WHERE cms.modulos.id = ordered.id
        ');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cms.modulos', function (Blueprint $table) {
            $table->dropColumn('posicao');
        });
    }
}
