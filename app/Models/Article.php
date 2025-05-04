<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'content',
        'photo',
        'user_id',
        'category_article_id',
    ];

    public function category_article()
    {
        return $this->belongsTo(CategoryArticle::class, 'category_article_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
