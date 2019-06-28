<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function getAll() {
        $userList = User::all();

        return response()->json($userList);
    }
}
