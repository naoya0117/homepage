<?php

namespace App\Http\Controllers;

class GreetingController extends Controller
{
    public function index()
    {
    return response()->json(['greeting' => 'Hello World']);
    }
}
