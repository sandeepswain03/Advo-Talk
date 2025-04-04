"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState("Finance")
  const isMobile = useMobile()

  const tabs = ["Finance", "Head of People", "Startup", "Legal"]

  const features = {
    Finance: [
      {
        title: "Consolidate and save",
        description:
          "Compliance hits multiple budgets. Mosey's platform covers compliance needs across payroll, HR, Secretary of State, and tax.",
      },
      {
        title: "Eliminate manual work",
        description:
          "Save your team's time and avoid distractions by building your state compliance program using technology and automation, not people.",
      },
      {
        title: "Avoid penalties and fines",
        description:
          "The most expensive thing to do is nothing. Use Mosey to identify compliance requirements and resolve them using our built-in expertise and automation.",
      },
    ],
    "Head of People": [
      {
        title: "Simplify HR compliance",
        description:
          "Manage employee onboarding, benefits, and compliance requirements across all states with one centralized platform.",
      },
      {
        title: "Streamline reporting",
        description:
          "Generate comprehensive compliance reports with a single click, saving hours of manual work each month.",
      },
      {
        title: "Automate HR workflows",
        description:
          "Set up automated workflows for employee onboarding, offboarding, and compliance updates across all states.",
      },
    ],
    Startup: [
      {
        title: "Scale with confidence",
        description: "Focus on growth while Mosey handles your multi-state compliance needs as your company expands.",
      },
      {
        title: "Stay ahead of requirements",
        description:
          "Our platform proactively alerts you to new compliance requirements as you enter new markets or hire in new states.",
      },
      {
        title: "Investor-ready compliance",
        description:
          "Demonstrate to investors that your compliance house is in order with comprehensive reporting and documentation.",
      },
    ],
    Legal: [
      {
        title: "Streamline legal requirements",
        description:
          "Stay on top of changing regulations and maintain compliance across all jurisdictions with automated updates.",
      },
      {
        title: "Centralized documentation",
        description:
          "Store and manage all compliance documents in one secure location, accessible whenever you need them.",
      },
      {
        title: "Audit-ready reporting",
        description:
          "Generate comprehensive compliance reports that satisfy the most stringent audit requirements with just a few clicks.",
      },
    ],
  }

  const tabVariants = {
    inactive: { opacity: 0.6 },
    active: { opacity: 1 },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const dashboardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="bg-[#F3F1EC] relative overflow-hidden min-h-screen w-full">
      <Image
        src="/landingPage/Feature/hero_middle_left.svg"
        alt="decorative coil"
        width={100}
        height={100}
        className="absolute top-0 left-0 object-contain hidden md:block scale-y-[-1]"
      />
      <Image
        src="/landingPage/Feature/hero_middle_right.svg"
        alt="decorative coil"
        width={100}
        height={100}
        className="absolute top-0 right-0 object-contain hidden md:block scale-y-[-1]"
      />

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200 overflow-x-auto">
          <nav className="-mb-px flex space-x-4 md:space-x-8 min-w-max">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                className={`whitespace-nowrap pb-2 px-1 border-b-4 font-medium text-sm md:text-base transition-colors ${activeTab === tab
                  ? "border-[#285D60] text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                onClick={() => setActiveTab(tab)}
                aria-label={`Switch to ${tab} tab`}
                variants={tabVariants}
                initial="inactive"
                animate={activeTab === tab ? "active" : "inactive"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab}
              </motion.button>
            ))}
          </nav>
        </div>

        {/* Content Section */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left side - Features */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="space-y-10 md:space-y-16"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {(features as Record<string, Array<{ title: string, description: string }>>)[activeTab].map((feature, index: number) => (
                <motion.div
                  key={index}
                  className="border-t border-gray-400 pt-4 first:border-none first:pt-0"
                  variants={itemVariants}
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-[#285D60] mb-3">{feature.title}</h3>
                  <p className="text-gray-900 text-sm md:text-base">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Right side - Screenshot/Mockup */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="bg-[#CFD7D4] rounded-lg overflow-hidden p-4 md:p-6"
              variants={dashboardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="text-lg font-bold text-[#285D60]">Advotalk</div>
              {activeTab === "Finance" && (
                <div className="mt-6 space-y-4 md:space-y-6">
                  <motion.div
                    className="border rounded-md p-4 relative transition duration-300 ease-in-out"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white">
                        P
                      </div>
                      <div className="text-base md:text-lg font-semibold">Payroll Setup</div>
                      <div className="ml-auto w-4 h-4 bg-teal-500 rounded-full"></div>
                    </div>
                    <div className="mt-4 md:mt-6 border-l-2 border-teal-500 pl-4 md:pl-6 ml-3 space-y-3">
                      <div className="bg-teal-50 p-3 rounded-md">
                        <div className="text-sm md:text-base">New York Employer Account Setup</div>
                      </div>
                      <div className="p-3">
                        <div className="text-sm md:text-base">New York Workers' Compensation Setup</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="border rounded-md p-4 relativetransition duration-300 ease-in-out"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white">
                        H
                      </div>
                      <div className="text-base md:text-lg font-semibold">Human Resources</div>
                      <div className="ml-auto w-4 h-4 bg-red-500 rounded-full"></div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="border rounded-md p-4 relative transition duration-300 ease-in-out"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white">
                        R
                      </div>
                      <div className="text-base md:text-lg font-semibold">Registration</div>
                      <div className="ml-auto w-4 h-4 bg-teal-500 rounded-full"></div>
                    </div>
                  </motion.div>
                </div>
              )}

              {activeTab === "Head of People" && (
                <div className="mt-6 space-y-4 md:space-y-6">
                  <motion.div
                    className="border rounded-md p-4 relative transition duration-300 ease-in-out"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">
                        O
                      </div>
                      <div className="text-base md:text-lg font-semibold">Onboarding</div>
                      <div className="ml-auto w-4 h-4 bg-purple-500 rounded-full"></div>
                    </div>
                    <div className="mt-4 md:mt-6 border-l-2 border-purple-500 pl-4 md:pl-6 ml-3 space-y-3">
                      <div className="bg-purple-50 p-3 rounded-md">
                        <div className="text-sm md:text-base">Employee Documentation</div>
                      </div>
                      <div className="p-3">
                        <div className="text-sm md:text-base">State-specific Requirements</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="border rounded-md p-4 relative transition duration-300 ease-in-out"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                        C
                      </div>
                      <div className="text-base md:text-lg font-semibold">Compliance Dashboard</div>
                      <div className="ml-auto w-4 h-4 bg-blue-500 rounded-full"></div>
                    </div>
                  </motion.div>
                </div>
              )}

              {activeTab === "Startup" && (
                <div className="mt-6 space-y-4 md:space-y-6">
                  <motion.div
                    className="border rounded-md p-4 relative transition duration-300 ease-in-out"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                        G
                      </div>
                      <div className="text-base md:text-lg font-semibold">Growth Planner</div>
                      <div className="ml-auto w-4 h-4 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="mt-4 md:mt-6 border-l-2 border-green-500 pl-4 md:pl-6 ml-3 space-y-3">
                      <div className="bg-green-50 p-3 rounded-md">
                        <div className="text-sm md:text-base">New State Entry Requirements</div>
                      </div>
                      <div className="p-3">
                        <div className="text-sm md:text-base">Compliance Roadmap</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="border rounded-md p-4 relative transition duration-300 ease-in-out"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white">
                        I
                      </div>
                      <div className="text-base md:text-lg font-semibold">Investor Dashboard</div>
                      <div className="ml-auto w-4 h-4 bg-amber-500 rounded-full"></div>
                    </div>
                  </motion.div>
                </div>
              )}

              {activeTab === "Legal" && (
                <div className="mt-6 space-y-4 md:space-y-6">
                  <motion.div
                    className="border rounded-md p-4 relative shadow hover:shadow-lg transition duration-300 ease-in-out"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                        D
                      </div>
                      <div className="text-base md:text-lg font-semibold">Document Center</div>
                      <div className="ml-auto w-4 h-4 bg-indigo-500 rounded-full"></div>
                    </div>
                    <div className="mt-4 md:mt-6 border-l-2 border-indigo-500 pl-4 md:pl-6 ml-3 space-y-3">
                      <div className="bg-indigo-50 p-3 rounded-md">
                        <div className="text-sm md:text-base">Compliance Documentation</div>
                      </div>
                      <div className="p-3">
                        <div className="text-sm md:text-base">Regulatory Filings</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="border rounded-md p-4 relative shadow hover:shadow-lg transition duration-300 ease-in-out"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center text-white">
                        A
                      </div>
                      <div className="text-base md:text-lg font-semibold">Audit Preparation</div>
                      <div className="ml-auto w-4 h-4 bg-slate-500 rounded-full"></div>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default FeatureTabs
