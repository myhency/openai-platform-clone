"use client";

import Link from "next/link";
import { FC } from "react";
import styles from "./nav-item.module.css";
import { usePathname } from "next/navigation";

interface NavItemProps {
    href: string;
    title: string;
}

const NavItem: FC<NavItemProps> = ({ href, title }) => {
    const pathName = usePathname();
    const isActive = pathName === href;

    return (
        <Link
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={styles.navLink}
            data-primary-item={""}
        >
            <span data-title={title}>{title}</span>
        </Link>
    );
};

export default NavItem;
