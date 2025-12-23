import { Diamond } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative w-full max-w-[1200px] mx-auto min-h-[600px] flex flex-col items-center justify-center pt-20 pb-32">

            {/* Central Content */}
            <div className="z-10 flex flex-col items-center text-center">
                {/* Logo */}
                <div className="w-20 h-20 bg-black rounded-3xl flex items-center justify-center mb-10 shadow-2xl border border-white/5">
                    <Diamond className="w-10 h-10 text-sticker-orange fill-current" />
                </div>

                {/* Headline */}
                <div className="relative border-4 border-accent-pink p-8 px-12 mb-10">
                    <h1 className="text-6xl font-bold text-primary leading-tight">
                        Dozens of apps.<br />
                        One subscription.<br />
                        $9.99
                    </h1>
                </div>

                {/* CTA Section */}
                <div className="flex gap-4 mb-8">
                    <button className="bg-primary text-background font-medium px-8 py-3 rounded text-lg hover:bg-gray-100 transition-colors">
                        Try free for 7 days
                    </button>

                    {/* Apple Logo Button */}
                    <button className="bg-primary p-3 rounded w-[52px] flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <svg viewBox="0 0 384 512" className="w-6 h-6 fill-black">
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 126.7 98 126.7 32.3 0 52.8-25.8 82.2-25.8 29.5 0 46 25 81.7 25 46.9 0 78-75.9 78-100.9s-5-10.9-10.2-13.8c-30.7-20.9-49.2-51.5-49.4-86.2zM247.9 105c19-23 27-56.7 21.6-88.3-29.2 1.6-60.8 17.1-78.5 39.7s-26.6 57-22.2 89.2c33.3 2.9 61.9-15.6 79.1-40.6z" />
                        </svg>
                    </button>

                    {/* Google Logo Button */}
                    <button className="bg-primary p-3 rounded w-[52px] flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <svg viewBox="0 0 24 24" className="w-6 h-6">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                    </button>
                </div>

                <p className="text-secondary max-w-md text-center leading-relaxed">
                    Power up your workflow with Setapp, a<br />
                    smart way to get apps.
                </p>
            </div>

            {/* Floating Stickers - Left Side */}
            {/* "WORK WITH PICS" - Orange Square */}
            <div className="absolute top-[180px] left-[5%] w-32 h-32 bg-sticker-orange rounded-xl rotate-[-15deg] flex items-center justify-center p-4 shadow-lg text-center font-bold text-background/80 leading-tight">
                WORK WITH PICS
            </div>

            {/* "C" - Pink Circle */}
            <div className="absolute top-[280px] left-[2%] w-10 h-10 bg-sticker-pink rounded-full flex items-center justify-center font-bold text-background/80 text-xl shadow-lg">
                C
            </div>

            {/* "PDF BLOCKER etc" - Teal Circle */}
            <div className="absolute top-[280px] left-[12%] w-28 h-28 bg-sticker-teal rounded-full rotate-[15deg] flex items-center justify-center shadow-lg">
                <div className="text-[10px] font-bold text-background/80 text-center tracking-widest uppercase w-full h-full relative">
                    {/* Simplified circular text representation */}
                    <svg viewBox="0 0 100 100" className="w-full h-full absolute top-0 left-0 animate-spin-slow">
                        <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                        <text fontSize="11" fontWeight="bold" fill="#333">
                            <textPath href="#curve">
                                • PDF • VPN • AD BLOCKER
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>

            {/* "BOOST TEAMWORK" - Blue Pentagon-ish */}
            <div className="absolute top-[420px] left-[8%] bg-sticker-blue px-6 py-3 rounded-lg -rotate-[5deg] shadow-lg font-bold text-background/80 text-center w-40 clip-path-polygon">
                BOOST TEAMWORK
            </div>

            {/* "STAY SECURE" - Teal Square */}
            <div className="absolute top-[520px] left-[10%] w-32 h-32 bg-sticker-teal rounded-xl rotate-[12deg] flex items-center justify-center p-4 shadow-lg text-center font-bold text-background/80 leading-tight z-0">
                STAY SECURE
            </div>

            {/* Floating Stickers - Right Side */}
            {/* "FIX WIFI" - Orange Pill */}
            <div className="absolute top-[180px] right-[8%] bg-sticker-yellow px-6 py-4 rounded-xl rotate-[12deg] shadow-lg font-bold text-background/80 w-36 text-center">
                FIX WIFI
            </div>

            {/* "PLAN YOUR DAY" - Blue Square */}
            <div className="absolute top-[280px] right-[15%] w-32 h-32 bg-sticker-blue rounded-xl -rotate-[8deg] flex items-center justify-center p-4 shadow-lg text-center font-bold text-background/80 leading-tight">
                PLAN YOUR DAY
            </div>

            {/* "CONVERT HEIC TO JPG" - Teal Starburst */}
            <div className="absolute top-[380px] right-[5%] w-28 h-28 bg-sticker-teal rounded-full flex items-center justify-center shadow-lg rotate-12">
                <svg viewBox="0 0 100 100" className="w-full h-full absolute top-0 left-0">
                    <path id="curve2" d="M 50 50 m -35 0 a 35 35 0 1 1 70 0 a 35 35 0 1 1 -70 0" fill="transparent" />
                    <text fontSize="10" fontWeight="bold" fill="#333">
                        <textPath href="#curve2">
                            • CONVERT HEIC TO JPG
                        </textPath>
                    </text>
                </svg>
            </div>

            {/* "MANAGE YOUR MAC" - Pink Rectangle */}
            <div className="absolute top-[460px] right-[10%] bg-sticker-pink w-48 py-5 rounded-2xl rotate-[-6deg] shadow-lg font-bold text-background/80 text-center leading-tight">
                MANAGE YOUR MAC
            </div>

            {/* "CODE EASIER" - Orange Square */}
            <div className="absolute top-[580px] right-[8%] w-32 h-32 bg-sticker-orange rounded-xl rotate-[4deg] flex items-center justify-center p-4 shadow-lg text-center font-bold text-background/80 leading-tight">
                CODE EASIER
            </div>

        </div>
    );
};

export default Hero;
