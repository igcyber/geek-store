<?php

use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Route Register Page
Route::get('/register', [RegisterController::class, 'index'])
    ->name('register')
    ->middleware('guest');

// Route Store Registered User
Route::post('/register', [RegisterController::class, 'store'])
    ->name('register.store')
    ->middleware('guest');
