import Link from "next/link";
import Image from "next/image";

import "./NavIcon.scss";

const NavIcon = ({ href, label, imgPath }) => {
  return (
    <Link href={href} aria-label={label} className="nav-icon">
      <Image
        src={`/assets/icons/icon-nav-${imgPath}.svg`}
        alt={`Icon ${label}`}
        aria-hidden="true"
        sizes="(min-width: 768px) 20px, 16px"
        fill
      />
    </Link>
  );
};

export default NavIcon;
