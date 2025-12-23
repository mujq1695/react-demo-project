import { Diamond } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-6 w-full max-w-[1200px] mx-auto text-sm font-medium">
            {/* Logo */}
            <div className="flex items-center gap-2 text-sticker-orange">
                <Diamond className="w-6 h-6 fill-current" />
            </div>

            {/* Center Links */}
            <div className="hidden md:flex items-center gap-8 text-secondary">
                <a href="#" className="hover:text-primary transition-colors">How it works</a>
                <a href="#" className="hover:text-primary transition-colors">All apps</a>
                <a href="#" className="hover:text-primary transition-colors">Pricing</a>
                <a href="#" className="hover:text-primary transition-colors">For Teams</a>
                <a href="#" className="hover:text-primary transition-colors">Blog</a>
                <a href="#" className="hover:text-primary transition-colors">Podcast</a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6 text-secondary">
                <div className="h-4 w-[1px] bg-secondary/30 hidden md:block"></div>

                {/* US Flag Placeholder - using a simple div for pixel match without asset */}
                <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
                    <img
                        src="https://flagcdn.com/w20/us.png"
                        alt="US"
                        className="w-5 h-auto opacity-80 hover:opacity-100 transition-opacity"
                    />
                </div>

                <a href="#" className="hover:text-primary transition-colors hidden sm:block">Sign In</a>

                <button className="border border-secondary/40 hover:border-primary text-secondary hover:text-primary px-4 py-2 rounded-lg transition-all">
                    Try free
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
