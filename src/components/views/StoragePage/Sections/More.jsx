import React from "react";
import styles from "./More.module.css";

export default function More({ pageHandler }) {
  return (
    <div
      className={styles.moreBox}
      onClick={() => {
        pageHandler();
      }}
    >
      더보기
    </div>
  );
}
