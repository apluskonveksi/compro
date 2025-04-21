"use client"


import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

type AnimatedPresenceWrapperProps = {
  children: ReactNode;
  mode?: "sync" | "wait" | "popLayout";
  initial?: boolean;
};

const AnimatedPresenceWrapper = ({
  children,
  mode = "wait",

}: AnimatedPresenceWrapperProps) => {
  return (
    <AnimatePresence mode={mode}>
      {children}
    </AnimatePresence>
  );
};

export default AnimatedPresenceWrapper;
