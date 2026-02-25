import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
// import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { 
    LayoutDashboard, 
    MapPin, 
    ShoppingBag, 
    User, 
    MessageCircle, 
    LogOut, 
    Zap, 
    Menu, 
    X 
} from 'lucide-react';


export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-nova-dark text-gray-100 flex">
                {/* --- SIDEBAR (PC) --- */}
                <aside className="hidden md:flex flex-col w-64 bg-nova-surface/30 backdrop-blur-xl border-r border-white/10">
                    <div className="p-6">
                        <div className="flex items-center gap-3 group">
                            <div className="h-10 w-10 bg-gradient-to-tr from-nova-primary to-nova-secondary rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                                <span className="text-white font-bold">N</span>
                            </div>
                            <span className="text-xl font-extrabold tracking-tighter uppercase">NovaCore</span>
                        </div>
                    </div>

                    <nav className="flex-1 px-4 space-y-2 mt-4">
                        <NavLink href={route('dashboard')} active={route().current('dashboard')} icon={<LayoutDashboard size={20} />}>
                            Portail
                        </NavLink>
                        <NavLink href="#" icon={<MapPin size={20} />}>
                            NovaMap
                        </NavLink>
                        <NavLink href="#" icon={<ShoppingBag size={20} />}>
                            NovaShop
                        </NavLink>
                        <NavLink href="#" icon={<MessageCircle size={20} />}>
                            Vibes
                        </NavLink>
                    </nav>

                    {/* Profil & NovaPoints */}
                    <div className="p-4 border-t border-white/10 bg-black/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-10 w-10 rounded-full bg-gray-700 border border-nova-primary overflow-hidden">
                                {/* Futur Avatar Dynamique */}
                                <div className="w-full h-full bg-gradient-to-b from-gray-600 to-gray-800 flex items-center justify-center text-xs">
                                    {user.name.charAt(0)}
                                </div>
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <p className="text-sm font-bold truncate">{user.name}</p>
                                <p className="text-[10px] text-nova-primary flex items-center gap-1 font-mono">
                                    <Zap size={10} fill="currentColor" /> {user.nova_points || 0} pts
                                </p>
                            </div>
                        </div>
                        <Link href={route('logout')} method="post" as="button" className="w-full flex items-center gap-2 text-xs text-gray-500 hover:text-red-400 transition">
                            <LogOut size={14} /> Déconnexion
                        </Link>
                    </div>
                </aside>

                {/* --- MAIN CONTENT --- */}
                <div className="flex-1 flex flex-col h-screen overflow-hidden">
                    {/* Header / TopNav */}
                    <header className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-nova-dark/50 backdrop-blur-md">
                        <h2 className="font-semibold text-lg leading-tight">{header}</h2>
                        <div className="md:hidden">
                            <button onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}>
                                {showingNavigationDropdown ? <X /> : <Menu />}
                            </button>
                        </div>
                    </header>

                    <main className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                        {children}
                    </main>
                </div>
            </div>
    );
}

// Petit composant utilitaire pour la navigation
function NavLink({ href, active, icon, children }) {
    return (
        <Link
            href={href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                active 
                ? 'bg-nova-primary/20 text-nova-primary border border-nova-primary/30 shadow-[0_0_15px_rgba(124,58,237,0.1)]' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
        >
            <span className={active ? 'text-nova-primary' : 'text-gray-500 group-hover:text-nova-primary transition-colors'}>
                {icon}
            </span>
            <span className="font-medium">{children}</span>
        </Link>
    );
}