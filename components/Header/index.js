import NavItem from "./NavItem";
import Image from "next/image";
import { NAV_ITEMS } from "./data";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/assets/icons/logo.svg"
          alt="Streaming App Logo"
          sizes="(min-width: 768px) 32px, 25px"
          fill
        />
      </div>

      <nav>
        {NAV_ITEMS.map((data, index) => (
          <NavItem key={index} {...data} />
        ))}
      </nav>

      <div className={styles.avatar}>
        <Image
          src="/assets/image-avatar.png"
          alt="User picture"
          sizes="(min-width: 768px) 32px, (min-width: 1200px) 40px, 24px"
          fill
        />
      </div>
    </header>
  );
};

export default Header;
