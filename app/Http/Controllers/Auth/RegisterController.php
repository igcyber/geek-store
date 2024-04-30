<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;

class RegisterController extends Controller
{
    //return to index page
    public function index()
    {
        //return inertia
        return inertia('Auth/Register');
    }

    //store request
    public function store(Request $request)
    {
        //set validation
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
        ], [
            'name.required' => 'Nama Tidak Boleh Kosong',
            'email.required' => 'E-mail Tidak Boleh Kosong',
            'password.required' => 'Password Tidak Boleh Kosong'
        ]);

        //insert data user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        //find role "customer"
        $role = Role::findByName('customer');

        //assign role "customer" to user
        $user->assignRole($role);

        //redirect to login page
        return redirect()->route('login');
    }
}
