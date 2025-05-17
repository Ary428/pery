import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { EmailPage } from "../pages/EmailPage";
import { LanguagePage } from "../pages/LanguagePage";
import { TopicPage } from "../pages/TopicPage";
import { ArticlePage } from "../pages/ArticlePage";
import { NotFoundPage } from "../pages/NotFoundPage";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              <EmailPage />
            </motion.div>
          }
        />
        <Route
          path="/language"
          element={
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              <LanguagePage />
            </motion.div>
          }
        />
        <Route
          path="/topic"
          element={
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              <TopicPage />
            </motion.div>
          }
        />
        <Route
          path="/article"
          element={
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              <ArticlePage />
            </motion.div>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}
