import range from "lodash.range";
import { useState } from "react";
import styles from "@styles/Selection.module.css";

export default function Selection({
  onSubmit,
}: {
  onSubmit: (x: number) => void;
}) {
  const [selected, setSelected] = useState<null | number>(null);
  return (
    <>
      <div className={styles.ratings}>
        {range(1, 6).map((num) => {
          return (
            <button
              onClick={() => setSelected(num)}
              className={selected === num ? styles.selected : ""}
              key={num}
            >
              {num}
            </button>
          );
        })}
      </div>
      <button
        className={styles.submit}
        onClick={() => {
          selected && onSubmit(selected);
        }}
      >
        Submit
      </button>
    </>
  );
}
