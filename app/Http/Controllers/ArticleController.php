<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\CategoryArticle;
use Dom\Attr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Article::query();

        if ($request->search) {
            $query->where('title', 'like', "%{$request->search}%");
        }
        $articles = $query->with(['category_article', 'user'])->get();
        return Inertia::render('Article/Index', [
            'articles' => $articles,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $category_articles = CategoryArticle::all();
        return Inertia::render('Article/Create', [
            'category_articles' => $category_articles,
            'user' => Auth::user(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255|unique:articles,title',
            'content' => 'required|string',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'user_id' => 'required',
            'category_article_id' => 'required',
        ]);

        if ($request->hasFile('photo')) {
            $imagePath = $request->file('photo')->store('articles', 'public');
        }

        Article::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'content' => $request->content,
            'photo' => $imagePath ?? null,
            'user_id' => $request->user_id,
            'category_article_id' => $request->category_article_id,
        ]);

        return redirect()->route('articles.index')->with('success', 'Article created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Article $article)
    {
        $category_articles = CategoryArticle::all();
        return Inertia::render('Article/Edit', [
            'article' => $article,

            'category_articles' => $category_articles,
            'user' => Auth::user(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Article $article)
    {
        $request->validate([
            'title' => 'required|string|max:255|unique:articles,title,' . $article->id,
            'content' => 'required|string',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'user_id' => 'required',
            'category_article_id' => 'required',
        ]);

        if ($request->hasFile('photo')) {
            if ($article->photo) {
                Storage::disk('public')->delete($article->photo);
            }
            $imagePath = $request->file('photo')->store('articles', 'public');
        } else {
            $imagePath = $article->photo;
        }

        $article->update([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'content' => $request->content,
            'photo' => $imagePath ?? null,
            'user_id' => $request->user_id,
            'category_article_id' => $request->category_article_id,
        ]);

        return redirect()->route('articles.index')->with('success', 'Article updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        $article->delete();

        Storage::disk('public')->delete($article->photo);

        return redirect()->route('articles.index')->with('success', 'Article deleted successfully.');
    }
}
