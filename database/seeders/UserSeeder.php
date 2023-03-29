<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'email' => 'admin@gmail.com',
            'name' => 'admin',
            'username' => 'admin',
            'point' => 1,
            'is_admin' => 'Y',
            'is_block' => 'N',
            'password' => Hash::make('1234'),
        ]);
    }
}
