<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CategoryArticleController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\HomepageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect('/homepage');
})->name('homepage');
Route::get('/homepage/articles', [HomepageController::class, 'listAllArticles'])->name('homepage.articles');
Route::post('homepage/articles/{article}/like', [HomepageController::class, 'toggleLike'])->name('article.like')->middleware('auth');
Route::post('homepage/article/{article}/bookmark', [HomepageController::class, 'toggleBookmark'])->name('article.bookmark')->middleware('auth');
Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/homepage/liked-articles', [HomepageController::class, 'likedArticles'])->name('articles.liked');
Route::get('/homepage/bookmarked-articles', [HomepageController::class, 'bookmarkedArticles'])->name('articles.bookmarked');
Route::resource('/homepage', HomepageController::class);
Route::resource('/comment', CommentController::class);

Route::resource('users', UserController::class);
Route::resource('roles', RoleController::class);
Route::resource('category_articles', CategoryArticleController::class);
Route::resource('articles', ArticleController::class);

Route::get('/guests', function () {
    return Inertia::render('Guest');
})->name('guest');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
