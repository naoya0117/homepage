<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\Mailgun;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function send(Request $request)
    {
        $email = $request->input('email');
        $name = $request->input('name');
        $content = $request->input('content');

        Mail::to(env('MAIL_TO'))->send(new Mailgun($name, $content, $email));
    }
}
