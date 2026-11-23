<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::view('dashboard', 'dashboard')->name('dashboard');
});

Route::get('bagusimutsekali', function () {
    return view('bagusimutsekali');
});

Route::get('/api/status', function () {
    return response()->json([
        'status' => 'success',
        'message' => 'Backend API Web Service UTS Latihan aktif dan berjalan normal!',
        'developer' => 'Zalwa Nadia',
        'nim' => '24010110168',
        'kelas' => 'C2',
        'kampus' => 'Universitas Bumigora',
        'service' => 'Laravel Web Service',
        'timestamp' => now()->toIso8601String(),
    ]);
});

require __DIR__.'/settings.php';
