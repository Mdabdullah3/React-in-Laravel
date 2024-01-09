<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\Dashboard;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::resource('categories', CategoryController::class);

Route::get('/products', [ProductController::class, 'index'])->name('Products.index');
Route::get('/', [ProductController::class, 'welcome'])->name('Welcome');
Route::get('/products/{product}', [ProductController::class, 'show'])->name('Products.show');

Route::group(['middleware' => ['auth', 'verified']], function () {
    // Your other authenticated routes

    Route::get('/dashboard', [Dashboard::class, 'index'])->name('dashboard.index');

    // // Product routes
    Route::get('/dashboard/product', [Dashboard::class, 'product'])->name('dashboard.product');

    // // Orders routes
    // Route::get('/dashboard/orders', [Dashboard::class, 'index'])->name('dashboard.orders');
});
require __DIR__ . '/auth.php';
