import range from "lodash.range";
import { useState } from "react";
import styles from "../styles/Selection.module.css";
import Image from "next/image";
import Selection from "./Selection";

export default function Rating({
  onSubmit,
}: {
  onSubmit: (x: number) => void;
}) {
  return (
    <div className={styles.main}>
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
    </div>
  );
}
