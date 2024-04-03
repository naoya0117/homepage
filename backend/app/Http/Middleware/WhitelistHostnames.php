<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class WhitelistHostnames
{
    public function handle(Request $request, Closure $next)
    {
        // 許可されたホスト名のリストを.envファイルから取得
        $allowedHostnames = explode(',', config('app.whitelist_hostnames'));

        // リクエストのホスト名を取得
        $requestHostname = $request->getHost();

        // リクエストのホスト名が許可されたリストに含まれているかを確認
        if (!in_array($requestHostname, $allowedHostnames)) {
            // 許可されたホスト名でない場合は、403 Forbiddenのレスポンスを返す
            return response()->json(['error' => 'Access Denied'], 403);
        }

        // 許可されたホスト名の場合は、次のミドルウェアに処理を渡す
        return $next($request);
    }
}
