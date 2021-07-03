import classNames from "classnames";
import styles from "./glow.module.css";

export default function Glow({ opacity }) {
  const className = classNames(`absolute inset-0 ${styles.glow}`, {
    "opacity-5": opacity == null,
    "opacity-10": opacity === "sm",
    "opacity-25": opacity === "lg",
  });

  return <div className={className} />;
}
