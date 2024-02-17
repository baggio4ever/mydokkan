export default function Layout({ children, }: { children: React.ReactNode }) {
    const Super3 = '/images/GBV7TPQa4AABls6.png';

    return <>
        <div className="text-white font-bold text-2xl">group1 !</div>
        <div className="p-2 text-green-400">{children}</div>
        <img src={Super3} className=" w-56"></img>
    </>
}