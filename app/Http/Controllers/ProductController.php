<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with(['User', 'Picture'])->get();
        return Inertia::render('Products/Index', [
            'status' => 'success',
            'products' => $products,
        ], 203);
    }
    public function welcome()
    {
        $products = Product::with(['User', 'Picture'])->get();
        return Inertia::render('Welcome', [
            'status' => 'success',
            'products' => $products,
        ], 203);
    }

    public function store(StoreProductRequest $request)
    {
        //
    }

    public function show(Product $product)
    {
        return Inertia::render('Products/Show', [
            'status' => 'success',
            'product' => $product,
        ]);
    }
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
    }
    public function destroy(Product $product)
    {
        //
    }
}
