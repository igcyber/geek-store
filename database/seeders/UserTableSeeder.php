<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //create users
        $user = User::create([
            'name' => 'Administrator',
            'email' => 'admin@example.com',
            'password' => bcrypt('password'),
        ]);

        //gel all permissions
        $permissions = Permission::all();

        //get role admin
        $role = Role::find(1);

        //assign permissions to role
        $role->syncPermissions($permissions);

        //assign role to user
        $user->assignRole($role);
    }
}
