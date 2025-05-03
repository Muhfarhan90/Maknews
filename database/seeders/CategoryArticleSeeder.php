<?php

namespace Database\Seeders;

use App\Models\CategoryArticle;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoryArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CategoryArticle::create(['name' => 'kesehatan']);
        CategoryArticle::create(['name' => 'politik']);
        CategoryArticle::create(['name' => 'olahraga']);
        CategoryArticle::create(['name' => 'otomotif']);
    }
}
