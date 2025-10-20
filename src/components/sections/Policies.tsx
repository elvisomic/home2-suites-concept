import { useState } from "react"
import { AnimatePresence, motion } from 'framer-motion'
import { PoliciesContent, type PolicyKey, PolicySVG } from "../content/PoliciesContent";

export const Policies = () => {

  const [selectedPolicy, setSelectedPolicy] = useState<PolicyKey | "">("Parking");

  return (
    <section id="policies" className="overflow-hidden h-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-28 2xl:px-32 3xl:px-72 py-16">
      <div className="flex justify-center">
        <h1 className="text-[28px] sm:text-[40px] font-semibold">HOTEL POLICIES</h1>
      </div>
      <div className="bg-gray-300 h-auto rounded-xl">
        <div className=" w-full mt-12 flex flex-row items-start">

          {["Parking", "Pets", "Smoking", "WiFi"].map((policy, index) => (
            <motion.button
              key={policy}
              onClick={() => setSelectedPolicy(policy as PolicyKey)}
              className={`group 
                ${index === 0 ? "rounded-tl-xl" : ""} 
                ${index === 3 ? "rounded-tr-xl" : ""}
                ${selectedPolicy === policy ? `` : "bg-gray-200"}
                w-[345px] h-[145px] flex items-center justify-center `}
            >
              <motion.div
                className="group w-full h-full flex items-center justify-center"
                whileHover={{ scale: 1.15 }}
              >
                {PolicySVG[policy as keyof typeof PolicySVG]}
              </motion.div>

            </motion.button>
          ))}
        </div>

        <div className="p-12">
          <AnimatePresence mode="wait">

            <motion.div
              key={selectedPolicy}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {selectedPolicy && PoliciesContent[selectedPolicy]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section >
  )
}


