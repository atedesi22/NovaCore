import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return() =>{
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Connexion - NovaVerse" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Bienvenue sur NovaVerse</h1>
                <p className="text-sm text-gray-500">Connectez-vous pour partager vos Instants.</p>
            </div>

            {/* --- SECTION PROPRIÉTAIRE NOVA-VERSE --- */}
            <div className="mb-6">
                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:from-purple-700 hover:to-indigo-700 transition duration-300 transform hover:scale-[1.02]"
                >
                    {/* Remplace l'icône ci-dessous par ton logo [LOGO] plus tard */}
                    <span className="text-xl">✨</span>
                    Se connecter avec NovaVerse
                </button>
            </div>

            <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-300"></span></div>
                <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">Ou via email</span></div>
            </div>

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full rounded-lg border-gray-300 focus:ring-indigo-500"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Mot de passe" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full rounded-lg border-gray-300"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4 flex items-center justify-between">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600">Se souvenir de moi</span>
                    </label>
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-sm text-indigo-600 hover:underline"
                        >
                            Oublié ?
                        </Link>
                    )}
                </div>

                <div className="mt-6">
                    <PrimaryButton className="w-full justify-center py-3 rounded-xl bg-gray-900" disabled={processing}>
                        Connexion
                    </PrimaryButton>
                </div>

                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Nouveau ici ?{' '}
                        <Link href={route('register')} className="text-indigo-600 font-bold hover:underline">
                            Créer une Connexion
                        </Link>
                    </p>
                </div>
            </form>
        </GuestLayout>
    );
}
