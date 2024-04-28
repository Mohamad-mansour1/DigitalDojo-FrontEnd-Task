import NextLink from "next/link";
import { useLink, LinkProps } from "./useLink";
import styles from "./page.module.css";

const Link: React.FC<LinkProps> = (props: LinkProps) => {
  const { href, label } = useLink(props);

  return (
    <NextLink href={href} className={styles.link}>
      {label}
    </NextLink>
  );
};

export default Link;
