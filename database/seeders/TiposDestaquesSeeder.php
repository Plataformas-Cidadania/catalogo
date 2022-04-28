<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TiposDestaquesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cms.tipos')->insert([
            'imagem' => '',
            'arquivo' => '',
            'titulo' => 'Destaques',
            'status' => 1,
        ]);

    }
}
