import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import { FaPaintRoller, FaVectorSquare, FaLightbulb, FaChair, FaCheck } from 'react-icons/fa';

const services = [
    {
        title: "Space Planning",
        description: "Strategic layout optimization for enhanced functionality and flow",
        icon: <FaVectorSquare className="w-6 h-6" />
    },
    {
        title: "Interior Design",
        description: "Bespoke solutions blending aesthetics with practicality",
        icon: <FaPaintRoller className="w-6 h-6" />
    },
    {
        title: "Lighting Design",
        description: "Ambient illumination strategies for every space",
        icon: <FaLightbulb className="w-6 h-6" />
    },
    {
        title: "Furniture Design",
        description: "Custom furniture pieces tailored to your space",
        icon: <FaChair className="w-6 h-6" />
    }
];

const specialties = [
    "Timeless Classic Aesthetics",
    "Contemporary Innovation",
    "Balanced Proportions",
    "Clean Modern Lines",
    "Heritage-Inspired Details",
    "Sustainable Materials",
    "Artisanal Craftsmanship",
    "Minimalist Precision"
];

const Services = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const headerRef = useRef(null);
    const titleRef = useRef(null);

    // Enhanced scroll triggers for titles with improved offsets
    const { scrollYProgress: titleScrollProgress } = useScroll({
        target: titleRef,
        offset: ["start end", "center center"]
    });

    const { scrollYProgress: headerScroll } = useScroll({
        target: headerRef,
        offset: ["start end", "end start"]
    });

    // Smoother spring animations with refined configuration
    const springConfig = { stiffness: 85, damping: 25, restDelta: 0.001 };
    const smoothProgress = useSpring(scrollYProgress, springConfig);
    const smoothHeaderScroll = useSpring(headerScroll, springConfig);
    const smoothTitleProgress = useSpring(titleScrollProgress, springConfig);

    // Enhanced parallax transformations
    const headerY = useTransform(smoothHeaderScroll, [0, 1], [0, -50]);
    const headerOpacity = useTransform(smoothHeaderScroll, [0, 0.2, 0.8, 1], [1, 1, 0.8, 0.5]);

    // Enhanced title animations with more dramatic fade and movement
    const titleOpacity = useTransform(smoothTitleProgress, [0, 0.4], [0, 1]);
    const titleY = useTransform(smoothTitleProgress, [0, 0.4], [80, 0]);
    const titleScale = useTransform(smoothTitleProgress, [0, 0.4], [0.7, 1]);

    // Improved "Services" word animations - with letter staggering effect
    const servicesOpacity = useTransform(smoothTitleProgress, [0.1, 0.5], [0, 1]);
    const servicesY = useTransform(smoothTitleProgress, [0.1, 0.5], [40, 0]);
    const servicesScale = useTransform(smoothTitleProgress, [0.1, 0.5], [0.8, 1]);

    // Split "Services" text for letter-by-letter animation
    const servicesText = "Services";

    // Add parallax for background elements
    const backgroundY = useTransform(smoothProgress, [0, 1], [0, -100]);
    const shapesOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

    return (
        <section
            ref={containerRef}
            className="py-16 md:py-24 px-6 md:px-10 lg:px-16 relative overflow-hidden bg-[#0f0a0a]"
        >
            {/* Enhanced parallax background elements */}
            <motion.div
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                style={{
                    y: backgroundY,
                    opacity: shapesOpacity
                }}
            >
                {/* Animated subtle grid with scroll-based parallax */}
                <motion.div
                    className="absolute inset-0 opacity-10"
                    style={{
                        y: useTransform(smoothProgress, [0, 1], [0, -30])
                    }}
                >
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="smallGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.15" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#smallGrid)" />
                    </svg>
                </motion.div>

                {/* Enhanced animated small shapes with parallax offsets */}
                {[...Array(12)].map((_, i) => {
                    const shapes = [
                        // Small circle
                        <motion.circle
                            key={`shape-${i}-circle`}
                            cx={10}
                            cy={10}
                            r={8}
                            fill="none"
                            stroke="rgba(249, 244, 243, 0.15)"
                            strokeWidth={1}
                        />,
                        // Small square
                        <motion.rect
                            key={`shape-${i}-square`}
                            width={16}
                            height={16}
                            fill="none"
                            stroke="rgba(249, 244, 243, 0.15)"
                            strokeWidth={1}
                        />,
                        // Small triangle
                        <motion.polygon
                            key={`shape-${i}-triangle`}
                            points="10,0 20,20 0,20"
                            fill="none"
                            stroke="rgba(249, 244, 243, 0.15)"
                            strokeWidth={1}
                        />,
                        // Small plus
                        <motion.path
                            key={`shape-${i}-plus`}
                            d="M10,0 V20 M0,10 H20"
                            stroke="rgba(249, 244, 243, 0.15)"
                            strokeWidth={1}
                        />
                    ];

                    // Choose a random shape
                    const shape = shapes[i % shapes.length];

                    // Create unique parallax movements for each shape
                    const shapeParallaxY = useTransform(
                        smoothProgress,
                        [0, 1],
                        [0, -20 - (i % 3) * 10]
                    );

                    return (
                        <motion.div
                            key={`floating-shape-${i}`}
                            className="absolute"
                            style={{
                                left: `${8 + (i * 10)}%`,
                                top: `${12 + ((i % 5) * 18)}%`,
                                width: 20,
                                height: 20,
                                y: shapeParallaxY
                            }}
                            animate={{
                                y: [0, -15, 0],
                                x: [0, 10, 0],
                                rotate: [0, i % 2 === 0 ? 180 : -180, 0]
                            }}
                            transition={{
                                duration: 8 + (i % 4) * 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <svg width="100%" height="100%" viewBox="0 0 20 20">
                                {shape}
                            </svg>
                        </motion.div>
                    );
                })}

                {/* Enhanced gradient elements with parallax */}
                <motion.div
                    className="absolute w-40 h-40 rounded-full bg-blue-500/5 blur-xl"
                    style={{
                        top: '20%',
                        left: '10%',
                        y: useTransform(smoothProgress, [0, 1], [0, -50])
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.03, 0.08, 0.03],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 8,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute w-48 h-48 rounded-full bg-purple-500/5 blur-xl"
                    style={{
                        bottom: '20%',
                        right: '10%',
                        y: useTransform(smoothProgress, [0, 1], [0, -30])
                    }}
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.04, 0.02, 0.04],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 10,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute w-32 h-32 rounded-full bg-pink-500/5 blur-xl"
                    style={{
                        top: '50%',
                        right: '30%',
                        y: useTransform(smoothProgress, [0, 1], [0, -40])
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.02, 0.05, 0.02],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 12,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>

            <div className="max-w-6xl mx-auto relative">
                {/* Services Section Header with enhanced animations */}
                <motion.div
                    ref={headerRef}
                    style={{
                        y: headerY,
                        opacity: headerOpacity
                    }}
                    className="relative z-10 mb-16 md:mb-20"
                >
                    <motion.div
                        ref={titleRef}
                        className="text-center mb-12"
                    >
                        {/* Enhanced title animations with fade and parallax */}
                        <motion.div
                            className="overflow-hidden relative"
                            style={{
                                opacity: titleOpacity,
                                scale: titleScale
                            }}
                        >
                            <motion.h2
                                className="text-3xl md:text-4xl lg:text-5xl title-text font-medium text-white tracking-tight inline-block"
                                style={{
                                    y: titleY
                                }}
                            >
                                Our{" "}
                                <span className="relative inline-block">
                                    {servicesText.split('').map((letter, index) => (
                                        <motion.span
                                            key={`letter-${index}`}
                                            className="text-[#f9f4f3] relative inline-block"
                                            style={{
                                                opacity: useTransform(
                                                    smoothTitleProgress,
                                                    [0.2 + index * 0.03, 0.5 + index * 0.03],
                                                    [0, 1]
                                                ),
                                                y: useTransform(
                                                    smoothTitleProgress,
                                                    [0.2 + index * 0.03, 0.5 + index * 0.03],
                                                    [20, 0]
                                                )
                                            }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </span>
                            </motion.h2>
                        </motion.div>

                        <motion.p
                            className="text-gray-400 mt-4 title-text max-w-2xl font-[300] mx-auto text-base"
                            style={{
                                opacity: useTransform(smoothTitleProgress, [0.3, 0.7], [0, 1]),
                                y: useTransform(smoothTitleProgress, [0.3, 0.7], [20, 0])
                            }}
                        >
                            Blending classic elegance with modern simplicity for timeless interiors
                        </motion.p>

                        {/* Animated line with enhanced scroll effect */}
                        <motion.div
                            className="h-px w-0 bg-[#f9f4f3]/20 mx-auto mt-5 origin-center"
                            style={{
                                width: useTransform(smoothTitleProgress, [0.4, 0.8], ["0%", "40px"]),
                                opacity: useTransform(smoothTitleProgress, [0.4, 0.8], [0, 1])
                            }}
                        />
                    </motion.div>

                    {/* Enhanced service cards with staggered animations */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {services.map((service, index) => {
                            const cardRef = useRef(null);
                            const isInView = useInView(cardRef, { once: true, amount: 0.2 });

                            // Create individual parallax effect for each card
                            const { scrollYProgress: cardScrollProgress } = useScroll({
                                target: cardRef,
                                offset: ["start end", "end start"]
                            });

                            const cardY = useTransform(
                                useSpring(cardScrollProgress, springConfig),
                                [0, 1],
                                [0, -15 - (index % 2) * 5]
                            );

                            return (
                                <motion.div
                                    key={index}
                                    ref={cardRef}
                                    style={{ y: cardY }}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                        ease: "easeOut"
                                    }}
                                    whileHover={{
                                        y: -8,
                                        transition: { duration: 0.2 }
                                    }}
                                    className="group relative p-5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition-all shadow-md overflow-hidden"
                                >
                                    {/* Enhanced hover effect with multiple lines */}
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-0.5 bg-[#f9f4f3]/30 w-0 group-hover:w-full transition-all duration-300"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: "100%" }}
                                    />
                                    <motion.div
                                        className="absolute top-0 right-0 h-0.5 bg-[#f9f4f3]/20 w-0 group-hover:w-full transition-all duration-400 delay-100"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: "100%" }}
                                    />

                                    <div className="relative z-10">
                                        <motion.div
                                            whileHover={{ rotate: 5, scale: 1.05 }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                            className="w-10 h-10 rounded-md bg-[#f9f4f3]/5 flex items-center justify-center mb-4 border border-white/5"
                                        >
                                            <div className="text-[#f9f4f3]">{service.icon}</div>
                                        </motion.div>
                                        <h3 className="text-base title-text md:text-lg font-medium text-white mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-400 title-text text-sm">
                                            {service.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Enhanced divider with scroll animation */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-px bg-white/5 my-14 md:my-16 origin-left"
                />

                {/* Enhanced content sections with improved parallax */}
                <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row gap-10 md:gap-12">
                        {/* Left content with enhanced animations */}
                        <motion.div
                            className="lg:w-1/2 space-y-5"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h2 className="text-2xl md:text-3xl title-text font-medium text-white tracking-tight">
                                Why{" "}
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.4 }}
                                    viewport={{ once: true }}
                                    className="text-[#f9f4f3] inline-block"
                                >
                                    Choose us?
                                </motion.span>
                            </h2>

                            <motion.div
                                className="h-px w-12 bg-[#f9f4f3]/20"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                            />

                            <motion.p
                                className="text-gray-400 text-base title-text leading-relaxed pr-0 md:pr-6"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                We seamlessly combine classic design elements with modern aesthetics, creating spaces that respect tradition while embracing contemporary living.
                            </motion.p>
                            <motion.p
                                className="text-gray-400 text-base title-text leading-relaxed pr-0 md:pr-6"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                Our approach blends timeless craftsmanship with innovative techniques, resulting in interiors that are both sophisticated and effortlessly stylish.
                            </motion.p>
                        </motion.div>

                        {/* Right content with enhanced staggered animations */}
                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {specialties.map((specialty, index) => {
                                    // Create parallax effect for specialty items
                                    const specialtyRef = useRef(null);
                                    const { scrollYProgress: specialtyScroll } = useScroll({
                                        target: specialtyRef,
                                        offset: ["start end", "end start"]
                                    });

                                    const specialtyY = useTransform(
                                        useSpring(specialtyScroll, { stiffness: 100, damping: 30 }),
                                        [0, 1],
                                        [0, -10 - (index % 4) * 3]
                                    );

                                    return (
                                        <motion.div
                                            key={index}
                                            ref={specialtyRef}
                                            style={{ y: specialtyY }}
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.2 + index * 0.07,
                                                ease: "easeOut"
                                            }}
                                            whileHover={{
                                                x: 3,
                                                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                                transition: { duration: 0.2 }
                                            }}
                                            className="flex items-center gap-2 p-3 rounded-md border border-white/5 transition-all"
                                        >
                                            <div className="flex-shrink-0 w-4 h-4 rounded-sm bg-[#f9f4f3]/5 flex items-center justify-center">
                                                <FaCheck className="text-[#f9f4f3] text-xs" />
                                            </div>
                                            <span className="text-gray-300 title-text text-sm">{specialty}</span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Enhanced CTA with improved animations */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-16 text-center relative"
                >
                    <motion.div
                        className="inline-block p-6 rounded-lg border border-white/5 relative overflow-hidden bg-gradient-to-b from-white/[0.02] to-transparent"
                        whileHover={{
                            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                            borderColor: "rgba(255, 255, 255, 0.1)"
                        }}
                    >
                        {/* Add subtle gradient animation on hover */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        />

                        <p className="text-[#f9f4f3] text-base title-text md:text-lg font-[300] mb-5 relative z-10">
                            Merging tradition with innovation
                        </p>

                        <motion.button
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="px-6 py-2 rounded-md bg-[#f9f4f3] text-[#0f0a0a] font-medium text-sm transition-all relative z-10"
                        >
                            Schedule a Consultation
                        </motion.button>
                    </motion.div>

                    {/* Animated line under CTA with fading effect */}
                    <motion.div
                        className="w-16 h-px bg-[#f9f4f3]/10 mx-auto mt-4"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Services;