
import { Diamond, ChevronRight, Facebook, Twitter, Instagram, Youtube, ChevronDown } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-background relative pt-48 pb-12 mt-32 text-secondary text-sm">

            {/* Overlapping CTA Card */}
            {/* Negative top margin to pull it up into the previous section */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] px-8 z-10">
                <div className="bg-[#F5F5F5] rounded-[32px] p-16 md:p-20">
                    {/* Logo Stack */}
                    <div className="mb-8">
                           <img src="./DoubleLogo.svg" alt="" height={'120px'} />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-semibold text-[#26262B] mb-4  leading-tight">
                        Superpowers starting $9.99/month. Free for 7 days.
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full">
                        <button className="bg-[#1F2125] text-white px-8 py-4 rounded-lg font-medium hover:bg-black transition-colors min-w-[200px]">
                            Get started now
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-white hover:border-gray-400 transition-colors min-w-[200px]">
                            More about Setapp
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-8">

                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between pt-16 gap-12 md:gap-4 mb-20 border-b border-white/10 pb-12">

                    {/* Left Column: Brand & Newsletter */}
                    <div className="flex-1 max-w-sm">
                        <div className="flex items-center gap-2 text-white mb-8">
                            <img src="./DoubleLogo.svg" alt="" width={'20px'} />
                            <span className="font-bold text-lg tracking-widest">SETAPP</span>
                        </div>

                        <p className="mb-4 text-white">Updates from our team, written with love ❤️</p>

                        <div className="flex h-12">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/10 border border-white/10 rounded-l-lg px-4 text-white placeholder-white/40 flex-1 focus:outline-none focus:border-white/30"
                            />
                            <button className="bg-white text-background px-4 rounded-r-lg hover:bg-gray-200 transition-colors">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="flex gap-16 flex-wrap md:flex-nowrap">
                        <div className="space-y-4">
                            <a href="#" className="block hover:text-white text-white">Home</a>
                            <a href="#" className="block hover:text-white text-white">How It Works</a>
                            <a href="#" className="block hover:text-white text-white">All Apps</a>
                            <a href="#" className="block hover:text-white text-white">Pricing</a>
                            <a href="#" className="block hover:text-white text-white">Setapp for Teams</a>
                            <a href="#" className="block hover:text-white text-white">Blog</a>
                            <a href="#" className="block hover:text-white text-white">Podcast</a>
                            <a href="#" className="block hover:text-white text-white">Download</a>
                        </div>

                        <div className="space-y-4">
                            <a href="#" className="block hover:text-white text-white">About</a>
                            <a href="#" className="block hover:text-white text-white">Support</a>
                            <a href="#" className="block hover:text-white text-white">Education Discount</a>
                            <a href="#" className="block hover:text-white text-white">Family Plan</a>
                            <a href="#" className="block hover:text-white text-white">For Developers</a>
                            <a href="#" className="block hover:text-white text-white">Gift Cards</a>
                            <a href="#" className="block hover:text-white text-white">Redeem Card or Code</a>
                            <a href="#" className="block hover:text-white text-white">Setapp Reviews</a>
                            <a href="#" className="block hover:text-white text-white">Affiliate Program</a>
                            <a href="#" className="block hover:text-white text-white">Mac Developer Survey 2023</a>
                        </div>

                        <div className="space-y-4">
                            <a href="#" className="block hover:text-white text-white">Getting started with Setapp</a>
                            <a href="#" className="block hover:text-white text-white">Remote access to other Mac</a>
                            <a href="#" className="block hover:text-white text-white">Fix macOS Ventura problems</a>
                            <a href="#" className="block hover:text-white text-white">Best productivity apps</a>
                            <a href="#" className="block hover:text-white text-white">Best YouTube downloaders</a>
                            <a href="#" className="block hover:text-white text-white">Uninstall apps</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
                    <div className="text-xs opacity-60 max-w-lg">
                        <div className="flex gap-4 mb-4">
                            <span className="border border-white/20 px-1 py-0.5 rounded text-[10px] uppercase">DMCA</span>
                            <span className="border border-white/20 px-1 py-0.5 rounded text-[10px] uppercase">PROTECTED</span>
                        </div>
                        <p className="mb-2">© 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH</p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white">Terms of Use</a>
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-6">
                        <div className="flex items-center gap-2 text-white cursor-pointer hover:opacity-80">
                            <img src="https://flagcdn.com/w20/us.png" alt="US" className="w-5" />
                            <span>English</span>
                            <ChevronDown className="w-4 h-4" />
                        </div>

                        <div className="flex gap-4 opacity-60">
                            <a href="#" className="hover:text-white hover:opacity-100 transition-all"><Facebook className="w-5 h-5 fill-current" /></a>
                            <a href="#" className="hover:text-white hover:opacity-100 transition-all"><Twitter className="w-5 h-5 fill-current" /></a>
                            <a href="#" className="hover:text-white hover:opacity-100 transition-all"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white hover:opacity-100 transition-all"><Youtube className="w-5 h-5 fill-current" /></a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
