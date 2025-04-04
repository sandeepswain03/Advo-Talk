
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const CompliancePage = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Check if viewport is mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Feature data
    const features = [
        {
            icon: "/landingPage/Tags/tags_1.svg",
            title: "50 states",
            description: "Coverage across all US states and 100+ cities for payroll, HR, and tax."
        },
        {
            icon: "/landingPage/Tags/tags_2.svg",
            title: "90% saved",
            description: "Eliminate manual work, expensive billable hours, and costly fines of non-compliance compared to alternatives."
        },
        {
            icon: "/landingPage/Tags/tags_3.svg",
            title: "1000+ rules",
            description: "Identify and resolve over 1,000 state and local compliance requirements."
        }
    ];

    // Handle carousel navigation
    const goToSlide = (index: number) => {
        setActiveSlide(index);
    };

    return (
        <div className='bg-[#FCFBFA] py-20 md:py-32 px-4 lg:px-20'>
            {/* Header Section */}
            <div className="max-w-6xl mx-auto mb-16 sm:flex justify-between">
                <h2 className="text-3xl md:text-4xl font-semibold  mb-4">Get <span className='text-[#285D60]'>compliant</span> faster</h2>
                <p className="text-gray-600 max-w-lg text-justify">
                    Mosey makes state compliance easy for your team no matter where your business operates. Offload the work of figuring out compliance and save thousands of dollars per year.
                </p>
            </div>

            {/* Features Section */}
            {isMobile ? (
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                        >
                            {features.map((feature, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-4">
                                    <div className="bg-[#F7F6F3] rounded-lg p-8 h-full">
                                        <div className='mb-6'>
                                            <Image
                                                src={feature.icon}
                                                alt={feature.title}
                                                width={200}
                                                height={200}
                                                className="object-contain"
                                            />
                                        </div>
                                        <h3 className="text-3xl font-semibold text-[#285D60] mb-2">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Carousel Indicators */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {features.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all ${activeSlide === index ? 'w-6 bg-[#285D60]' : 'w-2 bg-gray-300'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                // Desktop Grid
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-[#F7F6F3] rounded-xl p-8">
                            <div className="mb-6">
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    width={400}
                                    height={400}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-4xl font-semibold text-[#285D60] mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CompliancePage;
