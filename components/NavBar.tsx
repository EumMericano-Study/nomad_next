import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
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
