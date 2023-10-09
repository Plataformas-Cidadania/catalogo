<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cms.posts', function (Blueprint $table) {
            $table->string('video')->nullable();
            $table->integer('image_detail')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cms.posts', function (Blueprint $table) {
            $table->dropColumn('video');
            $table->dropColumn('image_detail');
        });
    }
}
