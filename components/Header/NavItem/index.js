import Link from "next/link";
import Image from "next/image";

import styles from "./NavItem.module.scss";

const NavItem = ({ href, label, imgPath }) => {
  return (
    <Link href={href} aria-label={label} className={styles.navIcon}>
      <Image
        src={`/assets/icons/icon-nav-${imgPath}.svg`}
        alt={`Icon ${label}`}
        width={16}
        height={16}
        aria-hidden="true"
      />
    </Link>
  );
};

export default NavItem;
