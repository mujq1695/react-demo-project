import { Diamond } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-6 w-full max-w-[1400px] mx-auto text-sm font-medium">
            {/* Logo */}
            {/* <div className="flex items-center gap-2 text-sticker-orange">
                <Diamond className="w-6 h-6 fill-current" />
            </div> */}
            <img src="./Logo.svg" width={'20px'} alt="" />


            {/* Center Links */}
            <div className="hidden md:flex items-center gap-8 text-white">
                <a href="#" className="hover:text-primary transition-colors font-medium">How it works</a>
                <a href="#" className="hover:text-primary transition-colors font-medium">All apps</a>
                <a href="#" className="hover:text-primary transition-colors font-medium">Pricing</a>
                <a href="#" className="hover:text-primary transition-colors font-medium">For Teams</a>
                <a href="#" className="hover:text-primary transition-colors font-medium">Blog</a>
                <a href="#" className="hover:text-primary transition-colors font-medium">Podcast</a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6 text-white">
                <div className="h-4 w-[1px] bg-secondary/30 hidden md:block"></div>

                {/* US Flag Placeholder - using a simple div for pixel match without asset */}
                <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
                    <img
                        src="./AmericanFlag.svg"
                        alt="US"
                        className="w-5 h-auto opacity-80 hover:opacity-100 transition-opacity"
                    />
                </div>

                <a href="#" className="hover:text-primary transition-colors hidden sm:block">Sign In</a>

                <button className="border border-white hover:border-primary text-white hover:text-primary px-4 py-2 rounded-lg transition-all">
                    Try free
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
