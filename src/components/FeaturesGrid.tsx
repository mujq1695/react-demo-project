
import { ArrowRight, Play, Trash2, Video, Phone } from 'lucide-react';

const FeaturesGrid = () => {
    return (
        <section className="w-full max-w-[1200px] mx-auto px-8 py-20">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                <h2 className="text-3xl font-bold text-primary">
                    What you get on Setapp.
                </h2>
                <p className="text-secondary max-w-sm text-sm leading-relaxed text-right md:text-left">
                    With a single monthly subscription at $9.99, you get 240+ apps for your Mac.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

                {/* Card 1: Keep your Mac clean (Pink) - Full Width */}
                <div className="md:col-span-2 bg-features-pink rounded-[32px] p-12 overflow-hidden relative min-h-[500px] flex flex-col">
                    <div className="flex gap-6 mb-8 relative z-10">
                        {/* Icon Placeholder */}
                        <div className="w-16 h-16 bg-gradient-to-b from-white to-pink-100 rounded-2xl shadow-sm flex items-center justify-center border-b-4 border-pink-200">
                            <div className="w-10 h-8 bg-pink-400 rounded-md"></div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Keep your Mac clean</h3>
                            <p className="text-gray-700 font-medium">Remove junk, scan for malware, wipe email attachments</p>
                        </div>
                    </div>

                    {/* Abstract Mac UI - Recreated with CSS */}
                    <div className="absolute bottom-0 right-0 w-[85%] h-[350px] bg-[#BB6B89] rounded-tl-3xl shadow-2xl p-6 flex flex-col transform translate-y-4 translate-x-4">
                        {/* Window Controls */}
                        <div className="flex gap-2 mb-6">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>

                        <div className="flex flex-1 gap-6">
                            {/* Sidebar */}
                            <div className="w-1/4 flex flex-col gap-3">
                                <div className="h-8 bg-white/20 rounded-md w-full"></div>
                                <div className="h-6 bg-white/10 rounded-md w-3/4"></div>
                                <div className="h-6 bg-white/10 rounded-md w-2/3"></div>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 flex items-center justify-center relative">
                                <div className="absolute top-10 left-0 text-white">
                                    <h4 className="font-bold text-xl mb-2">System Junk</h4>
                                    <p className="text-xs opacity-80 max-w-[200px]">Clean your system to achieve maximum performance and reclaim free space.</p>
                                </div>

                                {/* Big Scan Button Visual */}
                                <div className="h-48 w-48 rounded-full border-[6px] border-white/20 flex items-center justify-center relative right-[-20%]">
                                    <div className="h-32 w-20 border-[6px] border-white rounded-[30px] relative">
                                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2: Write code (Cream) */}
                <div className="bg-features-cream rounded-[32px] p-10 min-h-[500px] flex flex-col justify-between relative overflow-hidden">

                    {/* Code Editor Visual */}
                    <div className="w-full bg-[#1E1E1E] rounded-xl shadow-2xl p-4 mb-8 text-[10px] font-mono leading-tight opacity-90 scale-[1.02] transform origin-top">
                        <div className="flex gap-1.5 mb-3 border-b border-white/10 pb-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                        </div>
                        <div className="space-y-1.5 text-gray-400">
                            <div className="flex gap-2"><span className="text-gray-600">1</span> <span><span className="text-purple-400">def</span> <span className="text-blue-400">permute</span>(charset, string):</span></div>
                            <div className="flex gap-2"><span className="text-gray-600">2</span> <span className="pl-4"><span className="text-purple-400">if</span> len(string) == 0:</span></div>
                            <div className="flex gap-2"><span className="text-gray-600">3</span> <span className="pl-8"><span className="text-blue-300">return</span></span></div>
                            <div className="flex gap-2"><span className="text-gray-600">4</span> </div>
                            <div className="flex gap-2"><span className="text-gray-600">5</span> <span className="pl-4"><span className="text-purple-400">for</span> i <span className="text-purple-400">in</span> range(0, len(charset)):</span></div>
                            <div className="flex gap-2"><span className="text-gray-600">6</span> <span className="pl-8">newChar = charset[i]</span></div>
                            <div className="flex gap-2"><span className="text-gray-600">7</span> <span className="pl-8">newString = string + newChar</span></div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="w-14 h-14 bg-blue-400 rounded-2xl flex items-center justify-center shadow-md mb-6 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-300"></div>
                            <Play className="fill-white text-white w-6 h-6 z-10" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Write code</h3>
                        <p className="text-gray-600">Create applications in more than 25 languages</p>
                    </div>
                </div>

                {/* Card 3: Join meetings (Blue) */}
                <div className="bg-features-blue rounded-[32px] p-10 min-h-[500px] flex flex-col relative overflow-hidden">
                    <div className="mb-8">
                        <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg mb-6 border-4 border-blue-400/30">
                            <Video className="text-white w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Join meetings in a click</h3>
                        <p className="text-blue-200">Quickly access links to your meetings from menu bar</p>
                    </div>

                    {/* Meeting List Visual */}
                    <div className="flex-1 w-full bg-[#1A1D21] rounded-t-xl shadow-2xl p-4 mt-4 translate-y-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-4 h-4 rounded-full bg-white/20"></div>
                            <span className="text-white font-medium text-sm">Meeter</span>
                            <div className="ml-auto w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                                <div className="w-3 h-3 bg-white rounded-[1px]"></div>
                            </div>
                        </div>

                        {/* List Items */}
                        <div className="space-y-3">
                            {[
                                { time: '1:45 PM', title: 'Global Design Conference', color: 'bg-blue-600' },
                                { time: '2:45 PM', title: 'ThinkTank: Fix Meetings', color: 'bg-blue-600' },
                                { time: '4:15 PM', title: 'Yacht Club Get-Together', color: 'bg-blue-500' },
                                { time: '5:00 PM', title: '[Client] Treecard Inc | Review', color: 'bg-blue-500' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-2 rounded hover:bg-white/5 bg-white/[0.02]">
                                    <div className="text-[10px] text-gray-400 font-mono">{item.time}</div>
                                    <div className="text-xs text-gray-300 truncate flex-1">{item.title}</div>
                                    <div className={`text-[9px] px-2 py-1 rounded text-white ${item.color}`}>Join Call</div>
                                </div>
                            ))}

                            {/* Bottom bar */}
                            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <div className="p-2 bg-green-900/50 rounded text-green-400"><Phone size={14} /></div>
                                    <div className="p-2 bg-green-900/50 rounded text-green-400"><Video size={14} /></div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span className="text-xs text-white">Sam Newman</span>
                                    <div className="p-1 bg-red-900/50 rounded text-red-400"><Trash2 size={12} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer Link */}
            <div className="w-full text-center">
                <a href="#" className="inline-flex items-center gap-2 text-secondary hover:text-primary font-medium transition-colors">
                    View all superpowers
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </section>
    );
};

export default FeaturesGrid;
