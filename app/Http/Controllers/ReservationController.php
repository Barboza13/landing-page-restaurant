<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\ReservationRequest;
use App\Models\Reservation;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Reservation::all(), 200);
    }

    public function store(ReservationRequest $request): JsonResponse
    {
        Reservation::create($request->all());
        return response()->json([
            'success' => true,
        ], 201);
    }

    public function show($id): JsonResponse
    {
        $reservation = Reservation::find($id);
        return response()->json($reservation, 200);       
    }

    public function update(Request $request, $id): JsonResponse
    {
        $reservation = Reservation::find($id);
        $reservation->name = $request->name;
        $reservation->telephone = $request->telephone;
        $reservation->email = $request->email;
        $reservation->reservation_date = $request->reservation_date;
        $reservation->save();

        return response()->Json([
            'success' => true
        ], 200);
    }

    public function destroy($id): JsonResponse
    {
        Reservation::find($id)->delete();
        return response()->json([
            'success' => true
        ], 200);
    }
}
