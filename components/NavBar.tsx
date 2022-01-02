import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            <Link href="/">
                <a className={router.pathname === "/" ? "active" : ""}>Home</a>
            </Link>
            <Link href="/hello">
                <a className={router.pathname === "/hello" ? "active" : ""}>
                    Hello
                </a>
            </Link>
            <style jsx>{`
                nav {
                    background-color: tomato;
                }
                a {
                    text-decoration: none;
                }
                .active {
                    color: yellow;
                }
            `}</style>
        </nav>
    );
}
