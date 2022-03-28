import styles from "@styles/Selection.module.css";
import Image from "next/image";
import Selection from "@components/Selection";
import { motion } from "framer-motion";

export default function Rating({
  onSubmit,
}: {
  onSubmit: (x: number) => void;
}) {
  return (
    <motion.div className={styles.main} exit={{ x: "-200%" }}>
      <div className={styles.starContainer}>
        <div className={styles.star} aria-hidden>
          <Image src="/icon-star.svg" layout="fill" objectFit="cover" alt="" />
        </div>
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Selection onSubmit={onSubmit} />
    </motion.div>
  );
}
