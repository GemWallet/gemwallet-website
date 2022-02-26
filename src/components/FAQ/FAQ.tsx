import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import styles from "./style.module.scss";

export function FAQ({
  title,
  faqs,
}: {
  title: string;
  faqs: Array<{ question: string; answer: string }>;
}) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>
        <dl className={styles.containerQuestion}>
          {faqs.map((faq) => (
            <Disclosure
              as="div"
              key={faq.question}
              className={styles.discolsure}
            >
              {({ open }) => (
                <>
                  <dt className={styles.containerButtonQuestion}>
                    <Disclosure.Button className={styles.button}>
                      <span className={styles.question}>{faq.question}</span>
                      <span className={styles.chevronContainer}>
                        <ChevronDownIcon
                          className={classNames(
                            open ? styles.rotate180 : styles.rotate0,
                            styles.chevron
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className={styles.discolsurePanel}>
                    <p className={styles.answer}>{faq.answer}</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
}
