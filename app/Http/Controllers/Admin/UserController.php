<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

final class UserController extends Controller
{
    public function index(): Response
    {
        $result = DB::table('users')
            ->select('id', 'name', 'email')
            ->paginate(10);

        return Inertia::render('admin/users/index', [
            'result' => $result,
        ]);
    }
}
