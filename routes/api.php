<?php

use App\Http\Controllers\AdminPanelController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ReservationController;
use Illuminate\Support\Facades\Route;

Route::resource('/reservation', ReservationController::class);
Route::resource('/menu', MenuController::class);
Route::middleware('Authentication')->post('/login', [AdminPanelController::class, 'login']);