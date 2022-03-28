import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Rating from "../components/Rating";
import ThankYou from "../components/ThankYou";
import { motion, AnimatePresence } from "framer-motion";

const Home: NextPage = () => {
  const [submitted, setSubmitted] = useState<null | number>(null);
  return (
    <div className={styles.main}>
      <AnimatePresence exitBeforeEnter>
        {!submitted ? (
          <Rating
            onSubmit={(x: number) => {
              setSubmitted(x);
            }}
            key="Rating"
          />
        ) : (
          <ThankYou key="ThankYou" selected={submitted} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
