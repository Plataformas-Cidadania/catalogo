<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateSchemas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::connection($this->getConnection())->unprepared("
            SET search_path to public;
            CREATE SCHEMA cms;
        ");
        // extensão para implementar busca fuzzy
        //DB::statement('CREATE EXTENSION IF NOT EXISTS pg_trgm');

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::connection($this->getConnection())->unprepared("
            SET search_path to public;
            DROP SCHEMA cms;
        ");

        //DB::statement('DROP EXTENSION IF EXISTS pg_trgm');

    }
}
