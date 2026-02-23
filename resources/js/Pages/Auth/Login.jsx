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
        post(route('login'));
    };

    return (
        <>
            <div className="min-h-screen bg-nova-dark flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                    <Head title="Accès NovaVerse" />

                    <div className="w-full sm:max-w-md mt-6 px-8 py-10 bg-nova-surface/50 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden sm:rounded-3xl">

                        {/* LOGO Placeholder - NovaCore */}
                        <div className="flex justify-center mb-8">
                            <div className="h-16 w-16 bg-gradient-to-tr from-nova-primary to-nova-secondary rounded-2xl rotate-12 flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.5)]">
                                <span className="text-white text-3xl font-bold -rotate-12">N</span>
                            </div>
                        </div>

                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-extrabold text-white tracking-tight">NovaVerse</h2>
                            <p className="text-gray-400 mt-2">L'intelligence au cœur de vos connexions.</p>
                        </div>

                        {/* --- BOUTON PROPRIÉTAIRE : L'ACCÈS NOVA --- */}
                        <button className="group relative w-full flex items-center justify-center gap-3 bg-white text-nova-dark font-bold py-4 px-4 rounded-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] active:scale-95">
                            <span className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-nova-primary/50 transition-all"></span>
                            <span className="text-xl">✨</span>
                            Se connecter avec NovaVerse
                        </button>

                        <div className="relative my-8 text-center">
                            <span className="px-4 bg-transparent text-gray-500 text-xs uppercase tracking-widest">ou via le noyau classique</span>
                            <div className="absolute top-1/2 w-full h-[1px] bg-white/10 -z-10"></div>
                        </div>

                    <form action="" onSubmit={submit} className="space-y-5">
                        <div>
                            <input type="email"
                            placeholder="Email du portail"
                            className="w-full bg-nova-dark/50 border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:border-nova-primary focus:ring-nova-primary transition-all"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Clé de sécurité"
                                className="w-full bg-nova-dark/50 border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:border-nova-primary focus:ring-nova-primary transition-all"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
                        </div>
                        <div className='flex items-center justify-between text-sm'>
                            <label htmlFor="" className='flex items-center text-gray-400 cursor-pointer'>
                                <input type="text" className='rounded border-white/10 bg-nova-dark text-nova-primary focus:ring-nova-primary'/>
                                <span className='ml-2'>Rester actif</span>
                            </label>
                            <Link href={route('password.request')} className=' text-nova-secondary hover:text-nova-primary transition'>Oublié ?</Link>
                        </div>
                        <button
                            disabled={processing}
                            className="w-full py-4 bg-gradient-to-r from-nova-primary to-nova-secondary text-white font-bold rounded-2xl shadow-lg hover:opacity-90 transition-opacity"
                        >
                            Initialiser la Connexion
                        </button>
                    </form>

                    <p className="mt-8 text-center text-sm text-gray-500">
                        Pas encore de signal ?{' '}
                        <Link href={route('register')} className="text-white font-bold hover:text-nova-primary transition">
                            Créer une Connexion
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
