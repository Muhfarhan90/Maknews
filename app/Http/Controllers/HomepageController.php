<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\CategoryArticle;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomepageController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function listAllArticles(Request $request)
    {
        $query = Article::query();

        if ($request->has('search')) {
            $query->where('title', 'like', "%{$request->search}%");
        }
        $selectedCategory = null;
        if ($request->has('category')) {
            $query->whereHas('category_article', function ($query) use ($request) {
                $query->where('name', $request->category);
            });
            $selectedCategory = CategoryArticle::where('name', $request->category)->first();
        }

        $articles = $query->with('category_article')->paginate(8)->withQueryString();
        $categories = CategoryArticle::all();
        return Inertia::render('Homepage/ListArticle', [
            'articles' => $articles,
            'categories' => $categories,
            'selectedCategory' => $selectedCategory,
        ]);
    }
    public function index(Request $request)
    {

        $new_articles = Article::with('category_article')->orderBy('created_at', 'desc')->take(4)->get();

        $articles = Article::with('category_article')->paginate(8);
        $categories = CategoryArticle::all();
        return Inertia::render('Homepage/Homepage', [
            'articles' => $articles,
            'categories' => $categories,
            'new_articles' => $new_articles,
        ]);
    }


    public function toggleLike(Article $article)
    {
        $user = auth()->user();

        if ($article->likedByUsers()->where('user_id', $user->id)->exists()) {
            // Jika sudah like → un-like
            $article->likedByUsers()->detach($user->id);
        } else {
            // Belum like → like
            $article->likedByUsers()->attach($user->id);
        }

        return redirect()->back();
    }

    public function toggleBookmark(Article $article)
    {
        $user = auth()->user();

        if ($article->bookmarks()->where('user_id', $user->id)->exists()) {
            // Jika sudah bookmark → un-bookmark
            $article->bookmarks()->detach($user->id);
        } else {
            // Belum bookmark → bookmark
            $article->bookmarks()->attach($user->id);
        }

        return redirect()->back();
    }

    public function bookmarkedArticles()
    {
        $user = Auth::user();
        $bookmarkedArticles = $user->bookmarkedArticles()->with('category_article')->paginate(8);

        return Inertia::render('Homepage/BookmarkedArticles', [
            'bookmarkedArticles' => $bookmarkedArticles,
        ]);
    }

    public function likedArticles()
    {
        $user = User::find(Auth::id()); // paksa jadi instance App\Models\User
        $likedArticles = $user->likedArticles()->with('category_article')->paginate(8);
        return Inertia::render('Homepage/LikedArticles', [
            'likedArticles' => $likedArticles,
        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($homepage)
    {
        $article = Article::where('slug', $homepage)->firstOrFail();
        $comments = Comment::where('article_id', $article->id)->with('user')->get();
        $new_articles = Article::where('id', '!=', $article->id)->orderBy('created_at', 'desc')->with('category_article')->take(4)->get();
        $author = $article->user;
        $user = Auth::user();
        return Inertia::render('Homepage/ShowArticle', [
            'article' => $article,
            'new_articles' => $new_articles,
            'author' => $author,
            'comments' => $comments,
            'totalLikes' => $article->likedByUsers()->count(),
            'isLiked' => $user ? $article->likedByUsers()->where('user_id', $user->id)->exists() : false,
            'isBookmarked' => $user ? $article->bookmarks()->where('user_id', $user->id)->exists() : false,
            // 'auth' => Auth::user(),
        ]);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
