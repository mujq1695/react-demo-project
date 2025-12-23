
import { Facebook, Twitter, Instagram, Youtube, ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials = () => {
    return (
        <section className="w-full bg-white py-20 text-background">
            <div className="max-w-[1200px] mx-auto px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Setapp in your words.
                    </h2>

                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <p className="text-gray-500 text-sm">
                            What you say about how Setapp powers you up.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-[#4267B2] text-white flex items-center justify-center hover:opacity-90"><Facebook size={20} className="fill-current" /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-90"><Twitter size={20} className="fill-current" /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#C13584] text-white flex items-center justify-center hover:opacity-90"><Instagram size={20} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:opacity-90"><Youtube size={20} className="fill-current" /></a>
                        </div>
                    </div>
                </div>

                {/* Carousel Navigation */}
                <div className="flex justify-end gap-6 mb-8 text-gray-400">
                    <ArrowLeft className="w-6 h-6 hover:text-gray-900 cursor-pointer" />
                    <ArrowRight className="w-6 h-6 hover:text-gray-900 cursor-pointer" />
                </div>

                {/* Grid of Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

                    {/* Card 1: Slate */}
                    <div className="bg-testimonial-slate rounded-lg p-8 h-[320px] flex flex-col justify-between text-white relative shadow-lg">
                        <p className="font-medium text-lg leading-relaxed">
                            Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.
                        </p>

                        <div className="flex justify-between items-end">
                            <div>
                                <p className="font-bold text-sm">Arash Pourhabibi</p>
                                <p className="text-xs opacity-70">@ArashPourhabibi</p>
                            </div>
                            <Twitter className="w-5 h-5 fill-current opacity-80" />
                        </div>
                    </div>

                    {/* Card 2: Tan */}
                    <div className="bg-testimonial-tan rounded-lg p-8 h-[320px] flex flex-col justify-between text-white relative shadow-lg">
                        <p className="font-medium text-lg leading-relaxed">
                            My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.
                        </p>

                        <div className="flex justify-between items-end">
                            <div>
                                <p className="font-bold text-sm">Mauricio Sanchez</p>
                                <p className="text-xs opacity-70">@m741s</p>
                            </div>
                            <Instagram className="w-5 h-5 opacity-80" />
                        </div>
                    </div>

                    {/* Card 3: Plum */}
                    <div className="bg-testimonial-plum rounded-lg p-8 h-[320px] flex flex-col justify-between text-white relative shadow-lg">
                        <p className="font-medium text-lg leading-relaxed">
                            For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!
                        </p>

                        <div className="flex justify-between items-end">
                            <div>
                                <p className="font-bold text-sm">Meredith Sweet</p>
                                <p className="text-xs opacity-70">@meredith.sweet.silberstein</p>
                            </div>
                            <Facebook className="w-5 h-5 fill-current opacity-80" />
                        </div>
                    </div>

                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-900/40"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-900/10"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-900/10"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-900/10"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-900/10"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-900/10"></div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
