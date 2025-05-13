<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\CategoryArticle;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomepageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $query = Article::query();

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
    public function show(string $id)
    {
        $article = Article::with('category_article')->find($id);
        return Inertia::render('Article/Show', [
            'article' => $article,
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
