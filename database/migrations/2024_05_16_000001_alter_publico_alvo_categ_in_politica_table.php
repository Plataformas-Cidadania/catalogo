<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class AlterPublicoAlvoCategInPoliticaTable extends Migration
{
    private function hasColumn(string $schema, string $table, string $column): bool
    {
        return DB::table('information_schema.columns')
            ->where('table_schema', $schema)
            ->where('table_name', $table)
            ->where('column_name', $column)
            ->exists();
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if ($this->hasColumn('catalogo', 'politica', 'publico_alvo_categ')) {
            DB::statement('ALTER TABLE catalogo.politica ALTER COLUMN publico_alvo_categ TYPE text USING publico_alvo_categ::text');
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if ($this->hasColumn('catalogo', 'politica', 'publico_alvo_categ')) {
            DB::statement('ALTER TABLE catalogo.politica ALTER COLUMN publico_alvo_categ TYPE varchar(255) USING publico_alvo_categ::varchar');
        }
    }
}
