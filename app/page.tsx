import Link from 'next/link'

export default function Home() {
  return (
    <div className=" text-white">
      <div className="font-bold text-5xl p-2">
        myDokkan
      </div>
      <ul>
        <li>
          <a href="about">about (by a)</a>
        </li>
        <li>
          <Link href="about">about (by Link)</Link>
        </li>
      </ul>
    </div>
  );
}
