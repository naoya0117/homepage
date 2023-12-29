<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GreetingController;
use App\Http\Controllers\LoginController;

Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout']);

Route::get('/greeting', [GreetingController::class, 'greeting']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
