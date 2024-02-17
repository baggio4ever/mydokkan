'use client'
import { useState } from "react";
import style from './buttons.module.css';

export default function Buttons() {
    const [countA,setCountA] = useState(0);
    const [countB,setCountB] = useState(0);
    const [countC,setCountC] = useState(0);

    function handleClickA() {
//        alert('Aを押しましたね');
        setCountA(countA+1);
    }
    function handleClickB() {
//        alert('Bだよーん');
        setCountB(countB+1);
    }
    function handleClickC() {
//        alert('Cなのよ');
        setCountC(countC+1);
    }

    return <div className=" flex gap-6 border-2 border-white w-fit">
        <button className={style.bt} onClick={handleClickA}>A {countA}</button>
        <button className={style.bt} onClick={handleClickB}>B {countB}</button>
        <button className={style.bt} onClick={handleClickC}>C {countC}</button>
    </div>;
}