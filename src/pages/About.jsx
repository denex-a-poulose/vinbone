import React from 'react';
import abImage from "/src/assets/images/ab-image.jpg";

const About = () => {
    return (
        <div className="w-full px-5 sm:px-6 md:px-8 lg:px-12 py-16 lg:py-24 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-14">
                {/* Text Section */}
                <div className="w-full md:w-1/2 flex flex-col space-y-6">
                    <div className="relative pb-6">
                        <h1 className="text-3xl md:text-4xl standard-text font-[600] text-gray-900 leading-[1.15]">
                            <span className="block mb-2 text-[#7A5C48]">Crafting Tomorrow's</span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7A5C48] to-[#c0816b]">
                                Interior Legacy.
                            </span>
                        </h1>
                        <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#E1CEC7]" />
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed pr-4 italic border-l-2 border-[#E1CEC7] pl-4">
                        "In every space we touch, we blend fresh perspectives with timeless design principles."
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <button className="px-6 py-3 bg-[#7A5C48] text-white title-text rounded-md font-medium 
                        hover:bg-[#69503f] transition-colors duration-300 shadow-sm hover:shadow-md
                        flex items-center gap-2">
                            <span>Begin Your Journey</span>

                        </button>
                    </div>

                    {/* Feature List */}
                    <div className="mt-8 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#E1CEC7] flex items-center justify-center">
                                <span className="text-[#7A5C48] text-lg">✓</span>
                            </div>
                            <p className="text-gray-600 title-text">Tailored Design Solutions</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#E1CEC7] flex items-center justify-center">
                                <span className="text-[#7A5C48] text-lg">✻</span>
                            </div>
                            <p className="text-gray-600 title-text">Modern Traditional Fusion</p>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 relative group">
                    <div className="aspect-square bg-gray-100 rounded-[12px] overflow-hidden 
                    shadow-lg hover:shadow-xl transition-all duration-500 relative border-4 border-white">
                        <img
                            className="w-full h-full object-cover transform transition-transform duration-700 
                            group-hover:scale-110"
                            src={abImage}
                            alt="Elegant interior design with harmonious color palette and refined furnishings"
                        />

                        {/* Decorative Frame */}
                        <div className="absolute inset-0 border-8 border-white/30 mix-blend-overlay pointer-events-none" />

                        {/* New Company Badge */}
                        <div className="absolute bottom-4 left-4 bg-white/95 px-4 py-2 rounded-md 
                        text-sm text-[#7A5C48] shadow-sm border border-[#E1CEC7]">
                            <span className="block font-medium">Fresh Perspectives</span>
                            <span className="text-xs">Est. 2024</span>
                        </div>
                    </div>

                    {/* Accent Element */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#E1CEC7]/20 rounded-full blur-xl -z-10" />
                </div>
            </div>
        </div>
    );
}

export default About;