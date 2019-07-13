<?php

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        foreach (range(1,100) as $index) {
            $name = $faker->name;

            DB::table('users')->insert([
                'name' => $name,
                'email' => $faker->unique()->safeEmail,
                'profile' => $faker->randomElement(
                    ['reseller','store']
                ),
                'status' => $faker->randomElement(
                    ['active','inactive']
                ),
                'password' => bcrypt('password'),
    
            ]);
        }
    }
}
