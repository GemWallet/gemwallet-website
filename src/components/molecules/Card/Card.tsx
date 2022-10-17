import React, { FC } from "react";
import styles from "./styles.module.scss";

export interface CardProps {
  name: string;
  description: string;
  // Should be imported from: @heroicons/react/24/outline
  icon?: (
    props: React.SVGProps<SVGSVGElement> & {
      title?: string;
      titleId?: string;
    }
  ) => JSX.Element;
}

export const Card: FC<CardProps> = ({ name, description, icon: Icon }) => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.body}>
          {Icon ? (
            <div>
              <span className={styles.iconContainer}>
                <Icon className={styles.icon} aria-hidden="true" />
              </span>
            </div>
          ) : null}
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};
