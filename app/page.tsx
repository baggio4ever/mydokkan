'use client'
import Link from 'next/link'
//import { Roboto, Noto_Sans } from 'next/font/google';
import { useState } from 'react';
//import { useSearchParams } from 'next/navigation';
//import getConfig from 'next/config';
import React from 'react';

//const { publicRuntimeConfig } = getConfig();

//const Roboto900 = Roboto({ weight: '900', preload: false });
//const NotoSans = Noto_Sans({ weight: '400', preload: false });

//console.log('publicRuntimeConfig:');
//console.log(publicRuntimeConfig);

//const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || "";
//const Gozita = "/images/GFAADCqboAAf2_T.png";
//const BlueCombi = '/images/FKVYrTbakAE-gys.png';

const APP_NAME = 'myDokkan';
const APP_VERSION = '0.0.9';
const REACT_VERSION = React.version;

interface LibInfo {
  name: string;
  version: string;
  url: string;
};

function AppTitleHeaer() {
  const [infoOpened, setInfoOpened] = useState(false);
  const libs: LibInfo[] = [
    {
      name: 'React',
      version: REACT_VERSION,
      url: 'https://ja.react.dev/',
    },
    {
      name: 'Next.js',
      version: '',
      url: 'https://nextjs.org/',
    },
    {
      name: 'Tailwind CSS',
      version: '',
      url: 'https://tailwindcss.com/',
    },
    {
      name: 'heroicon',
      version: '',
      url: 'https://heroicons.com/',
    }
  ];
  const lib_divs = libs.map((v) => {
    return (
      <div className='flex items-center gap-1'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>

        <a key={v.name} href={v.url} title={v.version} target='_blank'>{v.name}</a>
      </div>
    );
  });

  return (
    <div>
      <div className='flex items-end gap-1'>
        <div className=' font-bold text-3xl'>
          {APP_NAME}
        </div>
        <div>
          {APP_VERSION}
        </div>
        <div onClick={(ev) => { setInfoOpened(!infoOpened) }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
        </div>
      </div>

      {infoOpened &&
        <div className='p-2'>
          {lib_divs}
        </div>
      }
    </div>
  );
}

interface ModeTitleProps {
  title: string;
}
function ModeTitle({ title }: ModeTitleProps) {
  return (
    <div>{title}</div>
  );
}

function getNormalRensu(ryu: number): number {
  return Math.floor(ryu / 50) * 10;
}

function getSpRensu(ryu: number): number {
  const mod = ryu % 150;
  return Math.floor(ryu / 150) * 40 + Math.floor(mod / 50) * 10;
}

function RensuTable() {
  const [ryuseki, setRyuseki] = useState(0);

  function handleOnChange(ev: React.ChangeEvent<HTMLInputElement>) {
    //    console.log(ev.target.value);
    setRyuseki(parseInt(ev.target.value));
  }

  return (
    <div>
      <ModeTitle title='龍石数から可能な連数を求める' />
      <div>
        龍石:
        <input type='number' value={ryuseki} placeholder='龍石数' onChange={handleOnChange} className=' bg-gray-700 text-xl text-right w-28 rounded-md'></input>
        個
      </div>
      <div>
        通常ガシャ:{getNormalRensu(ryuseki)}連
      </div>
      <div>
        記念ガシャ:{getSpRensu(ryuseki)}連
      </div>
    </div>
  );
}

function RyusekiTable() {
  const [rensu, setRensu] = useState(0);

  function getNormalRyuseki(ren: number): number {
    return ren * 5;
  }
  function getSpRyuseki(ren: number): number {
    const mod = ren % 40;
    const ret = Math.floor(ren / 40) * 3 * 50 + mod * 5;
    return ret;
  }
  function handleOnChange(ev: React.ChangeEvent<HTMLInputElement>) {
    //    console.log(ev.target.value);
    setRensu(parseInt(ev.target.value));
  }

  return (
    <div>
      <ModeTitle title='連数から必要な龍石数を求める' />
      <div>
        連数:
        <input type='number' value={rensu} onChange={handleOnChange} className='bg-gray-700 text-right w-32'></input>
        連
      </div>
      <div>
        通常ガシャ:{getNormalRyuseki(rensu)}個
      </div>
      <div>
        記念ガシャ:{getSpRyuseki(rensu)}個
      </div>
    </div>
  );
}

function RyusekiTable2() {
  const ryusekis = [
    100,
    500,
    1000,
    1500,
    2000,
    2500,
    3000,
    3500,
    4000,
    4500,
    5000
  ];

  const rows = ryusekis.map((v) => {
    return <tr key={v}>
      <th>{v.toLocaleString()}</th>
      <td>{getNormalRensu(v).toLocaleString()}</td>
      <td>{getSpRensu(v).toLocaleString()}</td>
    </tr>;
  });

  return (
    <div>
      <ModeTitle title='目安' />
      <table className=' text-center'>
        <thead>
          <tr>
            <th>龍石</th>
            <th>通常ガシャ</th>
            <th>記念ガシャ</th>
          </tr>
        </thead>
        <tbody className='text-right'>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default function Home() {
  /*
  buildしたらエラー。Suspenseでラップが必要みたいなのでコメント
  const searchParams = useSearchParams();
  const val = searchParams.get('val');
*/

  return (
    <div className=' p-2'>
      <AppTitleHeaer />
      <div className='flex flex-col gap-3 p-3'>
        <RensuTable />
        <RyusekiTable />
        <RyusekiTable2 />
      </div>
      {/*
      <div>
        <ul>
          <li>
            <a href="about">about (by a)</a>
          </li>
          <li>
            <Link href="about">about (by Link)</Link>
          </li>
        </ul>
        <div className={` text-4xl ${Roboto900.className}`}>
          Google Roboto 900
        </div>
        <div className={`text-4xl ${NotoSans.className}`}>
          Google Noto Sans 400
        </div>

        <div className=' flex items-center border-red-500 border-2'>
          <img src={Gozita} className=' w-48 m-5' title='ゴジータ！'></img>
          <img src={BlueCombi} className=' w-64 m-5'></img>
        </div>
      </div>
  */}
    </div>
  );
}
