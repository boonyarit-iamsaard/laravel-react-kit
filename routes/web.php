<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('home'))->name('home');
Route::get('about', fn () => Inertia::render('about'))->name('about');

Route::middleware(['auth', 'verified'])->prefix('admin')->group(function () {
    Route::get('/', fn () => Inertia::render('admin/dashboard'))->name('admin.dashboard');
    Route::get('users', fn () => Inertia::render('admin/users'))->name('admin.users');
    Route::get('settings', fn () => Inertia::render('admin/settings'))->name('admin.settings');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
