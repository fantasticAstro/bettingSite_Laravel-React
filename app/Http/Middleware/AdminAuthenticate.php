<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Auth;
class AdminAuthenticate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    
    public function handle(Request $request, Closure $next)
    {
        if(Auth::guard("web")->check()) {
            if(!Auth::guard("web")->user()->is_admin) {
                abort(response()->json([
                    'admin_unlogged' => 'false',], 200));
            } else {
                return $next($request);
            }
        }
        
    }
}
