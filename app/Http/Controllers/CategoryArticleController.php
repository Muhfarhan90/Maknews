<?php

namespace App\Http\Controllers;

use App\Models\CategoryArticle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CategoryArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = CategoryArticle::query();

        if ($request->search) {
            $query->where('name', 'like', "%{$request->search}%");
        }
        $category_articles = $query->get();
        return Inertia::render('CategoryArticle/Index', [
            'category_articles' => $category_articles
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('CategoryArticle/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:category_articles,name',
            'photo_category' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        if ($request->hasFile('photo_category')) {
            $imagePath = $request->file('photo_category')->store('category_articles', 'public');
        }

        CategoryArticle::create([
            'name' => $request->name,
            'photo_category' => $imagePath ?? null,
        ]);

        return redirect()->route('category_articles.index')->with('success', 'Category Article created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(CategoryArticle $categoryArticle)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CategoryArticle $categoryArticle)
    {
        $categoryArticle = CategoryArticle::find($categoryArticle->id);
        return Inertia::render('CategoryArticle/Edit', [
            'category_article' => $categoryArticle
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CategoryArticle $categoryArticle)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:category_articles,name,' . $categoryArticle->id,
            'photo_category' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        if ($request->hasFile('photo_category')) {
            if ($categoryArticle -> photo_category) {
                Storage::disk('public')->delete($categoryArticle->photo_category);
            }
            $imagePath = $request->file('photo_category')->store('category_articles', 'public');
        } else {
            $imagePath = $categoryArticle->photo_category;
        }

        $categoryArticle->update([
            'name' => $request->name,
            'photo_category' => $imagePath ?? null,
        ]);

        return redirect()->route('category_articles.index')->with('success', 'Category Article updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CategoryArticle $categoryArticle)
    {
        $categoryArticle->delete();
        return redirect()->route('category_articles.index')->with('success', 'Category Article deleted successfully.');
    }
}
