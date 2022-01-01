import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <a style={{ color: router.pathname === "/" ? "red" : "black" }}>
                    Home
                </a>
            </Link>
            <Link href="/hello">
                <a
                    style={{
                        color: router.pathname === "/hello" ? "red" : "black",
                    }}
                >
                    Hello{" "}
                </a>
            </Link>
        </nav>
    );
}
