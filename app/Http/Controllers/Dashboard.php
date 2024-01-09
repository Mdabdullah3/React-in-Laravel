<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Dashboard extends Controller
{
    public function index()
    {
        return inertia('Dashboard');
    }
    public function product()
    {
        return inertia('Dashboard/Products');
    }
}
