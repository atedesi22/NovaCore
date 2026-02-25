import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user} header="Tableau de Bord Universel">
            <Head title="Dashboard" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Widget Bienvenue */}
                <div className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-nova-primary/20 to-nova-secondary/10 border border-white/10">
                    <h3 className="text-2xl font-bold mb-2">Bon retour, {auth.user.name.split(' ')[0]} 👋</h3>
                    <p className="text-gray-400">Ton noyau NovaCore est stable. Tes systèmes NovaMap et Shop sont prêts pour la synchronisation.</p>
                </div>

                {/* Statut Vibe */}
                <div className="p-6 rounded-3xl bg-nova-surface/40 border border-white/10 flex flex-col items-center justify-center text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Vibe Actuelle</p>
                    <div className="text-3xl mb-2">✨</div>
                    <p className="text-xl font-bold text-nova-primary">{auth.user.vibe_status || 'Explorateur'}</p>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}