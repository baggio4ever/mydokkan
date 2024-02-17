'use client'
import { useState } from "react";

export default function Buttons() {
    const [countA,setCountA] = useState(0);
    const [countB,setCountB] = useState(0);

    function handleClickA() {
//        alert('Aを押しましたね');
        setCountA(countA+1);
    }
    function handleClickB() {
//        alert('Bだよーん');
        setCountB(countB+1);
    }
    function handleClickC() {
        alert('Cなのよ');
    }

    return <div className=" flex gap-6 border-2 border-white w-fit">
        <button onClick={handleClickA}>A {countA}</button>
        <button onClick={handleClickB}>B {countB}</button>
        <button onClick={handleClickC}>C</button>
    </div>;
}