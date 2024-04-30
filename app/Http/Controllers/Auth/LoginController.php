<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    //redirect to login
    public function index()
    {
        //return inertia
        return inertia('Auth/Login');
    }

    //store request data
    public function store(Request $request)
    {
        //set validation
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ], [
            'email.required' => 'Alamat E-Mail Tidak Ditemukan',
            'password.required' => 'Password Salah'
        ]);

        //get email and password from request
        $credentials = $request->only('email', 'password');

        //attempt to login
        if (auth()->attempt($credentials)) {
            //regenerate session
            $request->session()->regenerate();

            //redirect route dashboard
            return redirect()->route('account.dashboard');
        }

        //return if attempt failed
        return back()->withErrors([
            'email' => 'Alamat E-mail Tidak Terdaftar'
        ]);
    }
}
