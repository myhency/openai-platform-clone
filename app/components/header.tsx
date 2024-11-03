import styles from "./header.module.css";
import NavItem from "./nav-item";

const navValues = [
    {
        href: "/playground",
        title: "Playground",
    },
    {
        href: "/dashboard",
        title: "Dashboard",
    },
    {
        href: "/docs",
        title: "Docs",
    },
    {
        href: "/api-reference",
        title: "API Reference",
    },
];

export default function GlobalHeader({}) {
    return (
        <div className={styles.headerContainer}>
            <div>OpenAI Platform</div>
            <div className={styles.navItemsWrapper}>
                <nav className={styles.navItems}>
                    {navValues.map((navItem, index) => (
                        <NavItem key={index} {...navItem} />
                    ))}
                </nav>
            </div>
        </div>
    );
}
