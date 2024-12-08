import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TeamMember({ name, role, attributes, experience, education, awards, imageUrl }) {
  const [activeTab, setActiveTab] = useState("attributes");

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-4xl mx-auto overflow-hidden border rounded-lg shadow-lg">
        <div className="flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-blue-100 to-purple-100 p-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              {imageUrl ? (
                <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
              ) : (
                <div className="flex items-center justify-center h-full w-full bg-gray-300 text-gray-700">
                  {name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
          </motion.div>
          <motion.div
            className="text-center sm:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{name}</h2>
            <p className="text-lg sm:text-xl text-gray-600">{role}</p>
          </motion.div>
        </div>
        <div className="p-6">
          <div className="w-full">
            <div className="grid w-full grid-cols-4 mb-6 border-b">
              {["attributes", "experience", "education", "awards"].map((tab) => (
                <button
                  key={tab}
                  className={`capitalize py-2 ${activeTab === tab ? "border-b-2 border-blue-500" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={tabVariants}
              >
                <ul className="list-disc pl-5 space-y-2">
                  {(activeTab === "attributes" ? attributes :
                    activeTab === "experience" ? experience :
                    activeTab === "education" ? education : awards).map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
