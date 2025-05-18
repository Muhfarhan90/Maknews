<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\CategoryArticle;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomepageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $query = Article::query();
        $new_articles = Article::with('category_article')->orderBy('created_at', 'desc')->take(4)->get();

        if ($request->has('search')) {
            $query->where('title', 'like', "%{$request->search}%");
        }
        if ($request->has('category')) {
            $query->whereHas('category_article', function ($query) use ($request) {
                $query->where('name', $request->category);
            });
        }

        $articles = $query->with('category_article')->get();
        $categories = CategoryArticle::all();
        return Inertia::render('Homepage/Homepage', [
            'articles' => $articles,
            'categories' => $categories,
            'new_articles' => $new_articles,
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
        return Inertia::render('Homepage/ShowArticle', [
            'article' => $article,
            'new_articles' => $new_articles,
            'author' => $author,
            'comments' => $comments,
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
