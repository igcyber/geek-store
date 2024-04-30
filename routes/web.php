<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;

// Route::get('/', function () {
//     return view('welcome');
// });

// Route Register Page
Route::get('/register', [RegisterController::class, 'index'])
    ->name('register')
    ->middleware('guest');

// Route Store Registered User
Route::post('/register', [RegisterController::class, 'store'])
    ->name('register.store')
    ->middleware('guest');

// Route login page
Route::get('/login', [LoginController::class, 'index'])
    ->name('login')
    ->middleware('guest');

// Route login process
Route::post('/login', [LoginController::class, 'store'])
    ->name('login.store')
    ->middleware('guest');

// Route logout process
Route::post('/logout', LogoutController::class)->name('logout')->middleware('auth');
