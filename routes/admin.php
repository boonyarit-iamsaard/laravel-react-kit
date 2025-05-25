<?php

declare(strict_types=1);

use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])
    ->prefix('admin')
    ->group(function () {
        Route::get('/', fn () => Inertia::render('admin/dashboard'))->name('admin.dashboard');
        Route::get('settings', fn () => Inertia::render('admin/settings'))->name('admin.settings');
        Route::resource('users', UserController::class);
    });
