<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReservationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|min:3|max:255',
            'telephone' => 'required|min:3|max:255',
            'email' => 'required|min:3|max:255',
            'reservation_date' => 'required'
        ];
    }
}
