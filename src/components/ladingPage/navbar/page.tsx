import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prevState => !prevState);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const menuVariants = {
        hidden: { y: '-100%' },
        visible: { y: 0, transition: { type: 'tween', ease: 'easeOut', duration: 0.3 } }
    };

    const navLinks = [
        { href: "/platform", label: "Platform" },
        { href: "/pricing", label: "Pricing" },
        { href: "/resources", label: "Resources" },
        { href: "/about", label: "About" },
        { href: "/blog", label: "Blog" }
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-2 mt-4 transition-all duration-300 ${scrolled ? 'mt-4' : ''}`}>
                <div className={`max-w-[1380px] w-full mx-auto sm:rounded-lg rounded-xl px-6 py-2 flex items-center justify-between ${mobileMenuOpen ? 'bg-[#2A2A2A] md:bg-[#F3F1EC]' : 'bg-[#F3F1EC]'}`}>
                    <div className='hidden md:flex items-center space-x-4'>
                        <Link href="/" className={`text-2xl font-extrabold ${mobileMenuOpen ? 'text-white md:text-[#285D60]' : 'text-[#285D60]'}`}>
                            <Image
                                src="/Logo/Advotalk_main.png"
                                alt="mosey logo"
                                width={50}
                                height={50}
                                className='object-contain'
                            />
                        </Link>
                        {navLinks.map(link => (
                            <Link key={link.href} href={link.href} className="text-md font-semibold text-gray-400 hover:text-gray-900 transition-all duration-300">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/signin" className="text-md p-2 rounded-lg font-semibold hover:border border-gray-900 text-gray-900 transition-all duration-300">Sign In</Link>
                        <Link href="/consultation" className="bg-[#C74E5C] text-white text-md font-bold px-5 py-2 rounded-lg">
                            Schedule a free consultation
                        </Link>
                    </div>

                    <div className="flex md:hidden items-center space-x-4">
                        <Link href="/" className={`text-lg font-bold ${mobileMenuOpen ? 'text-white md:text-[#285D60]' : 'text-[#285D60]'}`}>
                            <Image
                                src="/Logo/Advotalk_main.png"
                                alt="mosey logo"
                                width={50}
                                height={50}
                                className='object-contain'
                            />
                        </Link>
                        <div className='flex'>
                            <Link href="/consultation" className={`bg-[#C74E5C] text-white text-sm p-2 rounded-xl hover:bg-opacity-90 transition-all whitespace-nowrap ${mobileMenuOpen ? 'hidden' : 'block'}`}>
                                Schedule a free consultation
                            </Link>
                            <button
                                onClick={toggleMobileMenu}
                                className={`p-2 rounded-md ${mobileMenuOpen ? 'bg-transparent text-white' : 'text-gray-900'}`}
                                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                            >
                                {mobileMenuOpen ? <X size={20} /> : (
                                    <Menu size={20} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 z-[60] md:hidden"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={overlayVariants}
                    >
                        <motion.div
                            className="fixed left-0 right-0 mx-auto top-3 w-[95%] max-w-md rounded-xl bg-[#2A2A2A] text-white overflow-y-auto h-[calc(100vh-24px)]"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={menuVariants}
                        >
                            <div className="flex justify-between items-center px-4 py-3 bg-[#2A2A2A] rounded-t-3xl">
                                <Link href="/" className="text-xl font-bold text-white">
                                    <Image
                                        src="/Logo/Advotalk_main.png"
                                        alt="mosey logo"
                                        width={50}
                                        height={50}
                                        className='object-contain'
                                    />
                                </Link>
                                <div className="flex items-center space-x-2">
                                    <Link href="/consultation" className="bg-[#C74E5C] text-white text-sm px-4 py-2 rounded-xl hover:bg-opacity-90 transition-all whitespace-nowrap">
                                        Schedule a free consultation
                                    </Link>
                                    <button
                                        onClick={toggleMobileMenu}
                                        className="p-2 rounded-full bg-transparent text-white"
                                        aria-label="Close menu"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col px-5 pt-6">
                                {navLinks.map(link => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="py-3 text-gray-300 border-b font-semibold border-gray-400"
                                        onClick={toggleMobileMenu}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="flex items-center py-3 text-gray-300">
                                    <span className="bg-[#285D60] text-white text-xs px-2 py-1 rounded-full mr-2">New</span>
                                    <Link href="/handbooks" onClick={toggleMobileMenu}>Handbooks</Link>
                                </div>
                            </div>
                            <div className="px-5 mt-auto pt-16 pb-5 w-full bg-[#2A2A2A] rounded-b-3xl mb-10">
                                <p className="text-sm text-gray-400 mb-4">
                                    Mosey has everything you need to get compliant in all 50 states in one, easy to use, platform.
                                </p>
                                <Link
                                    href="/consultation"
                                    className="block w-full bg-white text-center text-black py-3 rounded-xl"
                                    onClick={toggleMobileMenu}
                                >
                                    Schedule a free consultation
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
