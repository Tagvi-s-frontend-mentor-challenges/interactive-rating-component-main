import Image from "next/image";
import styles from "../styles/ThankYou.module.css";
export default function ThankYou({ selected }: { selected: number }) {
  return (
    <div className={styles.main}>
      <div className={styles.imageContainer}>
        <Image src="/illustration-thank-you.svg" alt="" layout="fill"></Image>
      </div>
      <p>You selected {selected} out of 5</p>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
