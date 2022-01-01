import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <a
                    className={
                        (styles.link,
                        router.pathname === "/" ? styles.selected : "")
                    }
                >
                    Home
                </a>
            </Link>
            <Link href="/hello">
                <a
                    className={
                        (styles.link,
                        router.pathname === "/hello" ? styles.selected : "")
                    }
                >
                    Hello
                </a>
            </Link>
        </nav>
    );
}
