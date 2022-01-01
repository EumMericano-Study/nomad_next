import { useState } from "react";

export default function Home() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h2>Hello {counter}</h2>
            <button
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                click
            </button>
        </div>
    );
}
