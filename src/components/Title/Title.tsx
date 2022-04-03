import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

export function Title({ children }: { children: ReactNode }) {
  return <h1 className={styles.h1}>{children}</h1>;
}
