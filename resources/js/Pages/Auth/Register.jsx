import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { userEffect } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        vibe_initiale: 'Explorateur', // typage de l'utilisateur
    });

        const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <>
            <div className="min-h-screen bg-nova-dark flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                <Head title="Rejoindre NovaVerse" />

                <div className="w-full sm:max-w-md mt-6 px-8 py-10 bg-nova-surface/50 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden sm:rounded-3xl">
                    
                    {/* LOGO Placeholder - NovaCore */}
                        <div className="flex justify-center mb-8">
                            <div className="h-16 w-16 bg-gradient-to-tr from-nova-primary to-nova-secondary rounded-2xl rotate-12 flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.5)]">
                                <span className="text-white text-3xl font-bold -rotate-12">N</span>
                            </div>
                        </div>

                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-extrabold text-white tracking-tight">Nouvelle Connexion</h2>
                        <p className="text-gray-400 mt-2">Initialisez votre présence dans l'écosystème.</p>
                    </div>

                    <form onSubmit={submit} className="space-y-4">
                        {/* Nom Complet */}
                        <div>
                            <input
                                type="text"
                                placeholder="Nom complet"
                                className="w-full bg-nova-dark/50 border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:border-nova-primary focus:ring-nova-primary transition-all"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <input
                                type="email"
                                placeholder="Email (Identifiant Nova)"
                                className="w-full bg-nova-dark/50 border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:border-nova-primary focus:ring-nova-primary transition-all"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />
                            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                        </div>

                        {/* Sélection de la Vibe (Dating discret) */}
                        <div>
                            <label className="text-xs text-gray-500 ml-2 mb-1 block uppercase tracking-widest">Votre Vibe actuelle</label>
                            <select 
                                className="w-full bg-nova-dark/50 border-white/10 rounded-xl text-white focus:border-nova-primary focus:ring-nova-primary transition-all"
                                value={data.vibe_initiale}
                                onChange={(e) => setData('vibe_initiale', e.target.value)}
                            >
                                <option value="Explorateur">Explorateur (Découverte)</option>
                                <option value="Social">Social (Rencontres)</option>
                                <option value="Chill">Chill (Observation)</option>
                            </select>
                        </div>

                        {/* Mots de passe */}
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="password"
                                placeholder="Clé"
                                className="bg-nova-dark/50 border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:border-nova-primary focus:ring-nova-primary transition-all"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Confirmation"
                                className="bg-nova-dark/50 border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:border-nova-primary focus:ring-nova-primary transition-all"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />
                        </div>
                        {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}

                        <div className="pt-4">
                            <button 
                                disabled={processing}
                                className="w-full py-4 bg-white text-nova-dark font-bold rounded-2xl shadow-lg hover:bg-gray-200 transition-all transform active:scale-95"
                            >
                                Créer ma Connexion
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-center text-sm text-gray-500">
                        Déjà identifié ?{' '}
                        <Link href={route('login')} className="text-nova-primary font-bold hover:underline">
                            Portail de Connexion
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
