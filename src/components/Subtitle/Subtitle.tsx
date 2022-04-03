import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

export function Subtitle({ children }: { children: ReactNode }) {
  return <h2 className={styles.h2}>{children}</h2>;
}
