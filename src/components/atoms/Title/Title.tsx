import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";

interface TitleProps {
  children: ReactNode;
}

export const Title: FC<TitleProps> = ({ children }) => {
  return <h1 className={styles.h1}>{children}</h1>;
};
