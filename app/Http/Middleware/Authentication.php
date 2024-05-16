<?php

namespace App\Http\Middleware;

use App\Http\Requests\AuthRequest;
use Closure;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class Authentication
{
    public function handle(AuthRequest $request, Closure $next): Response
    {
        if (!Auth::attempt($request->only(['email', 'password']))) {
            return response()->json([
                'status' => false,
                'message' => 'Credenciales no validas!'
            ], 401);
        }

        return $next($request);
    }
}
