"use client";

// libs
import { motion } from "framer-motion";

const ANIMATION_DELAY = 0.4;

const LoginOptionsInfo = ({ label }: { label: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: ANIMATION_DELAY }}
    className="bg-primary/5 mt-6 rounded-lg p-4"
  >
    <p className="text-muted-foreground text-center text-sm">{label}</p>
  </motion.div>
);

export default LoginOptionsInfo;
