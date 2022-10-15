import React, { FC } from "react";
import styles from "./styles.module.scss";

export const Title: FC = ({ children }) => {
  return <h1 className={styles.h1}>{children}</h1>;
};
