import { motion } from "framer-motion";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageShellProps {
  children: ReactNode;
  showFooter?: boolean;
}

const PageShell = ({ children, showFooter = true }: PageShellProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen flex flex-col"
    >
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      {showFooter && <Footer />}
    </motion.div>
  );
};

export default PageShell;
