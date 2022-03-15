<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TiposSeeder extends Seeder
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
            'titulo' => 'Sobre',
            'status' => 1,
        ]);

        DB::table('cms.tipos')->insert([
            'imagem' => '',
            'arquivo' => '',
            'titulo' => 'Ajuda',
            'status' => 1,
        ]);

    }
}
