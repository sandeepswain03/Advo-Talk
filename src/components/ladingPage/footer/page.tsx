import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  // Define navigation links for mobile
  const mobileLinks = [
    { href: "/state-compliance", label: "State compliance" },
    { href: "/solutions", label: "Solutions" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/employee-handbooks", label: "Employee Handbooks" },
    { href: "/newsletter", label: "Newsletter" },
    { href: "/compliance-check", label: "Compliance check" },
    { href: "/finance", label: "For Finance" },
  ];

  // Define resource links for desktop
  const resourceLinks = [
    { href: "/state-compliance", label: "State compliance" },
    { href: "/solutions", label: "Solutions" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/employee-handbooks", label: "Employee Handbooks" },
    { href: "/newsletter", label: "Newsletter" },
    { href: "/compliance-check", label: "Compliance check" },
  ];

  // Define for whom links
  const forWhomLinks = [
    { href: "/finance", label: "Finance" },
    { href: "/head-of-people", label: "Head of People" },
    { href: "/startup", label: "Startup" },
    { href: "/legal", label: "Legal" },
  ];

  // Define company links
  const companyLinks = [
    { href: "/contact-us", label: "Contact Us" },
    { href: "/trusted-by", label: "Trusted by" },
    { href: "/about", label: "About" },
    { href: "/jobs", label: "Jobs" },
  ];

  // Define social media links
  const socialLinks = [
    {
      href: "https://twitter.com",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
      </svg>
    },
    {
      href: "https://linkedin.com",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    }
  ];

  // Arrow icon for mobile links
  const arrowIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );

  return (
    <div className="bg-[#285D60] relative overflow-hidden min-h-screen">
      <Image
        src="/landingPage/Footer/hero_top_left.svg"
        alt="decorative coil"
        width={100}
        height={100}
        className="absolute top-0 left-0 object-contain hidden md:block"
      />

      <Image
        src="/landingPage/Footer/hero_top_right.svg"
        alt="decorative coil"
        width={100}
        height={100}
        className="absolute top-0 right-0 object-contain hidden md:block"
      />

      {/* Mobile Footer - Shown only on small screens */}
      <div className="md:hidden px-6 py-8">
        <div className="mb-8">
          <div className="text-white text-2xl font-semibold mb-2">Advotalk</div>
          <p className="text-gray-400 font-semibold text-sm">
            The easy way to do state compliance.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          {/* Mobile Navigation Links */}
          {mobileLinks.map((link, index) => (
            <div key={index} className="border-b border-white pb-4">
              <Link href={link.href} className="flex items-center justify-between text-white font-medium">
                <span>{link.label}</span>
                {arrowIcon}
              </Link>
            </div>
          ))}

          <div className='flex gap-4'>
            <h3 className="text-white font-medium mb-6">Social & Media</h3>
            {socialLinks.map((social, index) => (
              <Link key={index} href={social.href} className="text-white">
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white mb-6" />

        {/* Footer Bottom - Aligned as in Image 1 */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="text-gray-400 mb-4 md:mb-0">
            © Mosey Works, Inc.
          </div>
          <div className="flex space-x-8">
            <Link href="/privacy-policy" className="text-gray-400 font-semibold hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 font-semibold hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      {/* Desktop Footer - Use original code unchanged */}
      <div className="hidden md:block">
        <div className="container mx-auto px-36 pt-64">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mb-12">
            {/* Logo and Tagline */}
            <div className="col-span-1">
              <div className="text-white text-2xl font-semibold mb-4">Advotalk</div>
              <p className="text-gray-400 font-semibold text-sm">
                The easy way to do state compliance.
              </p>
            </div>

            {/* Resources Column */}
            <div className="col-span-1">
              <h3 className="text-white font-medium mb-6">Resources</h3>
              <ul className="space-y-4">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-400 font-semibold hover:text-white text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Whom Column */}
            <div className="col-span-1">
              <h3 className="text-white font-medium mb-6">For whom</h3>
              <ul className="space-y-4">
                {forWhomLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-400 font-semibold hover:text-white text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="col-span-1">
              <h3 className="text-white font-medium mb-6">Company</h3>
              <ul className="space-y-4">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-400 font-semibold hover:text-white text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-white font-medium mb-6">Social & Media</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Link key={index} href={social.href} className="text-white">
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-white mb-6" />

          {/* Footer Bottom - Aligned as in Image 1 */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="text-gray-400 mb-4 md:mb-0">
              © Mosey Works, Inc.
            </div>
            <div className="flex space-x-8">
              <Link href="/privacy-policy" className="text-gray-400 font-semibold hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 font-semibold hover:text-white">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;