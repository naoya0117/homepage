<?php

namespace App\Http\Middleware;

use Closure;

class WhitelistIPs
{
    public function handle($request, Closure $next)
    {
        // 許可されたIPアドレスのリスト
        $allowedIPs = explode(',', config('app.whitelist_ips'));

        // リクエストのIPアドレスを取得
        $requestIP = $request->ip();

        // リクエストのIPアドレスが許可されたリストに含まれているかを確認
        if (!in_array($requestIP, $allowedIPs)) {
            // 許可されたIPアドレスでない場合は、403 Forbiddenのレスポンスを返す
            return response()->json(['error' => 'Access Denied'], 403);
        }

        // 許可されたIPアドレスの場合は、次のミドルウェアに処理を渡す
        return $next($request);
    }
}
