<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class NovaAuthController extends Controller
{
    //
    /**
     * Gère la tentative de connexion universelle
     */

    public function handleUniversalAccess(Request $request){
        // On vérifie si l'utilisateur est déjà authentifié par cookie/session
        if(Auth::check()){
            return redirect()->intended('/dashboard');
        }

        // Si l'utilisateur n'est pas reconnu, on le redirige vers l'inscription 
        // MAIS avec une petite subtilité : on garde en mémoire d'où il vient.
        return redirect()->route('register')->with('info', 'Créez votre identifiant NovaVerse pour continuer.');
    }
}
