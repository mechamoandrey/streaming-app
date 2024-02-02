import NavItem from "./NavItem";
import Image from "next/image";
import { NAV_ITEMS } from "./data";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src="/assets/icons/logo.svg"
        alt="Streaming App Logo"
        width={25}
        height={20}
      />

      <nav>
        {NAV_ITEMS.map((data, index) => (
          <NavItem key={index} {...data} />
        ))}
      </nav>

      <Image
        src="/assets/image-avatar.png"
        alt="User picture"
        width={24}
        height={24}
      />
    </header>
  );
};

export default Header;
