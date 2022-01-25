<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CmsUsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cms.cms_users')->insert([
            'name' => 'Admin',
            'email' => 'admin@cms',
            'password' => bcrypt('123456'),
        ]);
    }
}
