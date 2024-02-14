export default function Layout({ children, }: { children: React.ReactNode }) {
    return <>
        <div className="text-white">group1 !</div>
        <div className="p-2 text-green-400">{children}</div>
    </>
}