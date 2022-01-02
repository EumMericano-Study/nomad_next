import NavBar from "./NavBar";

interface LayoutIState {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutIState) {
    return (
        <>
            <NavBar />
            <div>{children}</div>
        </>
    );
}
