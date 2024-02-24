'use client'
import Link from 'next/link'
import { Roboto, Noto_Sans } from 'next/font/google';
import { useState } from 'react';
//import { useSearchParams } from 'next/navigation';
//import getConfig from 'next/config';
import React from 'react';

//const { publicRuntimeConfig } = getConfig();

const Roboto900 = Roboto({ weight: '900', preload: false });
const NotoSans = Noto_Sans({ weight: '400', preload: false });

//console.log('publicRuntimeConfig:');
//console.log(publicRuntimeConfig);

//const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || "";
const Gozita = "/images/GFAADCqboAAf2_T.png";
const BlueCombi = '/images/FKVYrTbakAE-gys.png';

const APP_NAME = 'myDokkan';
const APP_VERSION = '0.0.5';
const REACT_VERSION = React.version;

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

function getNormalRensu(ryu: number): number {
  return Math.floor(ryu / 50) * 10;
}

function getSpRensu(ryu: number): number {
  const mod = ryu % 150;
  return Math.floor(ryu / 150) * 40 + Math.floor(mod / 50) * 10;
}

function RensuTable() {
  const [ryuseki, setRyuseki] = useState(0);

  return (
    <div>
      <ModeTitle title='龍石数から可能な連数を求める' />
      <div>
        龍石:
        <input type='number' value={ryuseki} placeholder='龍石数' onChange={(e) => { console.log(e.target.value); setRyuseki(parseInt(e.target.value)) }} className=' bg-gray-700 text-right w-32'></input>
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

  return (
    <div>
      <ModeTitle title='連数から必要な龍石数を求める' />
      <div>
        連数:
        <input type='number' value={rensu} onChange={(e) => { console.log(e.target.value); setRensu(parseInt(e.target.value)) }} className='bg-gray-700 text-right w-32'></input>
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
