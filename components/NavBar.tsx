import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            <img src="/vercel.svg" />
            <div>
                <Link href="/">
                    <a className={router.pathname === "/" ? "active" : ""}>
                        Home
                    </a>
                </Link>
                <Link href="/hello">
                    <a className={router.pathname === "/hello" ? "active" : ""}>
                        Hello
                    </a>
                </Link>
            </div>
            <style jsx>{`
                nav {
                    display: flex;
                    gap: 10px;
                    align-items: center;
                    flex-direction: column;

                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                    padding-top: 20px;
                    padding-bottom: 10px;
                }
                img {
                    max-width: 100px;
                    margin-bottom: 5px;
                }
                nav a {
                    font-weight: 600;
                    font-size: 18px;
                }
                .active {
                    color: tomato;
                }
                nav div {
                    display: flex;
                    gap: 10px;
                }
            `}</style>
        </nav>
    );
}
