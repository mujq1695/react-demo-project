
import { ArrowRight, Play, Trash2, Video, Phone } from 'lucide-react';

const FeaturesGrid = () => {
    return (
        <section className="w-full max-w-[1200px] mx-auto px-8 py-20">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                <h2 className="text-4xl font-bold text-primary">
                    What you get on Setapp.
                </h2>
                <p className="text-white text-lg max-w-xl leading-relaxed text-right md:text-left">
                    With a single monthly subscription at $9.99, you get 240+ apps for your Mac.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

                {/* Card 1: Keep your Mac clean (Pink) - Full Width */}
                <div className="md:col-span-2">
                    <img src="./MacClean.png" alt="" height={'605px'} width={'100%'} />
                </div>

                {/* Card 2: Write code (Cream) */}
                <div className="bg-features-cream rounded-[32px] p-10 min-h-[500px] flex flex-col justify-between relative overflow-hidden">
                    <img src="./CodePng.png" alt="" height={'633px'} width={'100%'} />
                </div>

                {/* Card 3: Join meetings (Blue) */}
                <div className="bg-features-blue rounded-[32px] p-10 min-h-[500px] flex flex-col relative overflow-hidden">
                    <img src="./Meetingpng.png" alt="" height={'633px'} width={'100%'} />
                </div>

            </div>

            {/* Footer Link */}
            <div className="w-full text-center">
                <a href="#" className="inline-flex items-center gap-2 text-white hover:text-primary font-medium transition-colors">
                    View all superpowers
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </section>
    );
};

export default FeaturesGrid;
