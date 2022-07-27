import React, { FC } from "react";
import styles from "./styles.module.scss";

export const Subtitle: FC = ({ children }) => {
  return <h2 className={styles.h2}>{children}</h2>;
};
