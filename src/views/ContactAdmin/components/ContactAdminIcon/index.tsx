"use client";

// libs
import { motion } from "framer-motion";
import { Headset } from "lucide-react";

const ContactAdminIcon = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
    className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600"
  >
    <Headset className="h-8 w-8 text-white" />
  </motion.div>
);

export default ContactAdminIcon;
