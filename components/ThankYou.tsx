import Image from "next/image";
import styles from "../styles/ThankYou.module.css";
import { motion } from "framer-motion";

export default function ThankYou({ selected }: { selected: number }) {
  return (
    <motion.div
      className={styles.main}
      initial={{ x: "100%" }}
      animate={{ x: "0" }}
    >
      <div className={styles.imageContainer}>
        <Image src="/illustration-thank-you.svg" alt="" layout="fill"></Image>
      </div>
      <p>You selected {selected} out of 5</p>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </motion.div>
  );
}
