
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const Journey = () => {
    return (
        <section className="w-full max-w-[1200px] mx-auto px-8 py-20">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                <h2 className="text-3xl font-bold text-primary">
                    Your Setapp journey.
                </h2>
                <p className="text-secondary max-w-sm text-sm leading-relaxed text-right md:text-left">
                    Type in your task into Setapp search and get instant app recommendations.
                </p>
            </div>

            {/* Main Video Card */}
            <div className="relative w-full rounded-[32px] overflow-hidden bg-journey-card min-h-[500px] flex items-center justify-center group">

                {/* Navigation Arrows (Visual only) */}
                <div className="absolute top-8 right-8 flex gap-4 text-white/50">
                    <ChevronLeft className="w-6 h-6 hover:text-white cursor-pointer" />
                    <ChevronRight className="w-6 h-6 hover:text-white cursor-pointer" />
                </div>

                {/* Content container */}
                <div className="flex flex-col md:flex-row w-full h-full p-12 items-center gap-12">

                    {/* Left Text */}
                    <div className="flex-1 space-y-6 z-10">
                        <h3 className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
                            Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.
                        </h3>
                        <p className="text-white/60 text-sm tracking-wide uppercase">Jason Staczek</p>

                        <button className="mt-8 bg-white text-journey-card w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                            <Play className="fill-current w-6 h-6 ml-1" />
                        </button>
                    </div>

                    {/* Right Image/Person Placeholder */}
                    {/* Using a generated-like placeholder to match the "bearded creative" look */}
                    <div className="flex-1 h-full min-h-[300px] md:min-h-[400px] relative">
                        <img
                            src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=2787&auto=format&fit=crop"
                            alt="Jason Staczek"
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl mix-blend-luminosity opacity-80"
                        />
                        {/* Overlay gradient to blend nicely with purple */}
                        <div className="absolute inset-0 bg-journey-card/20 mix-blend-multiply rounded-2xl"></div>
                    </div>

                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
            </div>

            {/* Separator Line */}
            <div className="w-full h-px bg-white/10 mt-20"></div>

        </section>
    );
};

export default Journey;
