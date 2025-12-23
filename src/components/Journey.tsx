
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const Journey = () => {
    return (
        <section className="w-full max-w-[1200px] mx-auto px-8 py-20">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                <h2 className="text-4xl font-bold text-primary">
                    Your Setapp journey.
                </h2>
                <p className="text-white max-w-xl text-lg leading-relaxed text-right md:text-left">
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
                 <img src="./Slider-Section.png" alt="" />
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
