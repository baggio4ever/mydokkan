'use client'
import Link from 'next/link'
import { Roboto, Noto_Sans } from 'next/font/google';
import { useState } from 'react';
//import { useSearchParams } from 'next/navigation';
//import getConfig from 'next/config';

//const { publicRuntimeConfig } = getConfig();

const Roboto900 = Roboto({ weight: '900', preload: false });
const NotoSans = Noto_Sans({ weight: '400', preload: false });

//console.log('publicRuntimeConfig:');
//console.log(publicRuntimeConfig);

//const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || "";
const Gozita = "/images/GFAADCqboAAf2_T.png";
const BlueCombi = '/images/FKVYrTbakAE-gys.png';

const APP_NAME = 'myDokkan';
const APP_VERSION = '0.0.2';

function AppTitleHeaer() {
  return (
    <div className=' font-bold text-3xl'>
      {APP_NAME} {APP_VERSION}
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
function RensuTable() {
  const [ryuseki, setRyuseki] = useState(0);

  function getNormalRensu(ryu: number): number {
    return Math.floor(ryu / 50) * 10;
  }
  function getSpRensu(ryu: number): number {
    const mod = ryu % 150;
    return Math.floor(ryu / 150) * 40 + Math.floor(mod / 50) * 10;
  }

  return (
    <div>
      <ModeTitle title='龍石数から可能な連数を求める' />
      <div>
        龍石:
        <input type='number' value={ryuseki} placeholder='龍石数' onChange={(e) => { console.log(e.target.value); setRyuseki(parseInt(e.target.value)) }} className=' bg-gray-700 text-right w-32'></input>
        個
      </div>
      <div>
        通常ガシャ:{getNormalRensu(ryuseki)}
      </div>
      <div>
        記念ガシャ:{getSpRensu(ryuseki)}
      </div>
    </div>
  );
}

function RyusekiTable() {
  return (
    <div>
      <ModeTitle title='連数から必要な龍石数を求める' />
      連数:
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
