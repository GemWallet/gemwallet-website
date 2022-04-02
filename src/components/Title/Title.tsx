import React, { ReactNode } from "react";
import styles from "./styles.module.css";

export function Title({ children }: { children: ReactNode }) {
  return <h1 className={styles.h1}>{children}</h1>;
}
