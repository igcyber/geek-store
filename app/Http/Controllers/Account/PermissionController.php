<?php

namespace App\Http\Controllers\Account;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        //get permissions
        $permissions = Permission::when(request()->q, function ($permissions) {
            $permissions = $permissions->where('name', 'like', '%' . request()->q . '%');
        })->latest()->paginate(10);

        //append query string to paginate links
        $permissions->appends(['q' => request()->q]);

        //return inertia view with data permissions
        return inertia('Account/Permissions/Index', [
            'permissions' => $permissions
        ]);
    }
}
