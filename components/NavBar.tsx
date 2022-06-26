import Link from "next/link";
import ActiveLink from "./ActiveLink";
import styles from "./NavBar.module.css";

const menuItems = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
  { text: "Pricing", href: "/pricing" },
];

const NavBar = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map(({ text, href }, index) => (
        <ActiveLink key={index} text={text} href={href} />
      ))}
    </nav>
  );
};

export default NavBar;
