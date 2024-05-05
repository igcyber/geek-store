<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Account\DashboardController;
use App\Http\Controllers\Account\PermissionController;

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
Route::post('/logout', [LogoutController::class])
    ->name('logout')
    ->middleware('auth');

// Route Account
Route::prefix('account')->group(function () {
    //middleware auth
    Route::group(['middleware' => ['auth']], function () {
        //route dashboard
        Route::get('/dashboard', DashboardController::class)
            ->name('account.dashboard');

        //route permissions
        Route::get('/permissions', PermissionController::class)
            ->name('account.permissions.index')
            ->middleware('permission:permission.index');
    });
});
