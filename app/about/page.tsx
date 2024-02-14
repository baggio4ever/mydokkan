import style from './about.module.css';
import TestMessage from './testMessage';

export default function Page() {
    return <>
        <div className="text-blue-500 p-2 font-extrabold">about myDokkan <span className={style.tt}>Yes, Dokkan</span></div>
        <TestMessage />
        <div className=' text-white'>ほんとに？</div>
        <TestMessage />
    </>
}