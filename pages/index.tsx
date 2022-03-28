import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Rating from "../components/Rating";
import ThankYou from "../components/ThankYou";

const Home: NextPage = () => {
  const [submitted, setSubmitted] = useState<null | number>(null);
  return (
    <div className={styles.main}>
      {!submitted ? (
        <Rating
          onSubmit={(x: number) => {
            setSubmitted(x);
          }}
        />
      ) : (
        <ThankYou selected={submitted} />
      )}
    </div>
  );
};

export default Home;
