'use client'
import { useState } from "react"
import SharedButton from "./sharedButton"

export default function Page() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

    return <div>
        <div>Two</div>
        <SharedButton count={count} onClick={handleClick} caption={'TMN'} />
        <SharedButton count={count} onClick={handleClick} caption={'TM Network'} />
    </div>
}