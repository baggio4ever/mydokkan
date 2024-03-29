'use client'
import Link from 'next/link'
import { Roboto, Noto_Sans } from 'next/font/google';
import { ReactNode, useState } from 'react';
//import { useSearchParams } from 'next/navigation';
//import getConfig from 'next/config';
import React from 'react';
import mySetting from '../myConfig.mjs';

//const { publicRuntimeConfig } = getConfig();

//const Roboto900 = Roboto({ weight: '900', preload: false });
const NotoSans = Noto_Sans({ weight: '700', preload: false });

//const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || "";
//const Gozita = "/images/GFAADCqboAAf2_T.png";
//const BlueCombi = '/images/FKVYrTbakAE-gys.png';

const APP_NAME = 'myDokkan';
const APP_VERSION = '0.1.15';
const REACT_VERSION = React.version;

const NORMAL_GASYA = '通常ガシャ';
const SP_GASYA = '記念ガシャ';
const NORMAL_TITLE = '5個で1連';
const SP_TITLE = '5個で1連。30連で10連無料';

interface LibInfo {
  name: string;
  version: string;
  url: string;
};

/**
 * 共通フレーム
 * @param 
 * @returns 
 */
function CommonFrame({ children }: { children: ReactNode }) {
  return (
    <div className='border-4 hover:border-blue-400 border-gray-900 p-2 bg-gray-950 rounded-md'>
      {children}
    </div>
  );
}

interface NumberInputProps {
  value: number;
  onChangeValue: (v: number) => void;
};

function NumberInput({ value, onChangeValue }: NumberInputProps) {
  return (
    <input type='number' value={value} onChange={(ev) => {
      const v = ev.target.value || '0';
      const vn = parseInt(v);
      onChangeValue(vn);
    }} className=' bg-gray-700 text-xl text-right w-28 rounded-md'></input>
  );
}

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
      <div key={v.name} className='flex items-center gap-1'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
        <a href={v.url} title={v.version} target='_blank'>{v.name}</a>
      </div>
    );
  });

  return (
    <div className='p-2 bg-black'>
      <div className='flex items-end gap-1'>
        <div className={`text-3xl ${NotoSans.className}`}>
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
        <div className='p-2 text-sm'>
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
    <div className='mb-2 font-bold'>
      {title}
    </div>
  );
}

/**
 * 通常ガシャでできる連数
 * @param ryu 龍石の数
 * @returns 連数
 */
function getNormalRensu(ryu: number): number {
  return Math.floor(ryu / 5);
}

function getNormalRensuAmari(ryu: number): number {
  return ryu % 5;
}

/**
 * 記念ガシャでできる連数
 * @param ryu 龍石の数
 * @returns 連数
 */
function getSpRensu(ryu: number): number {
  const mod = ryu % 150;
  return Math.floor(ryu / 150) * 40 + Math.floor(mod / 5);
}

function getSpRensuSet(ryu: number): number {
  return Math.floor(ryu / 150);
}

function getSpRensuAmari(ryu: number): number {
  return ryu % 5;
}

/**
 * 龍石→連数
 * @returns 
 */
function RensuTable() {
  const [ryuseki, setRyuseki] = useState(0);

  function handleOnChange(v: number) {
    //    console.log(ev.target.value);
    if (v < 0) {
      v = 0;
    }
    setRyuseki(v);
  }

  return (
    <CommonFrame>
      <ModeTitle title='龍石数から可能な連数を求める' />
      <div className='py-1 flex gap-1 items-center'>
        <p>龍石:</p>
        <NumberInput value={ryuseki} onChangeValue={handleOnChange} />
        <p>個</p>
      </div>

      <div title={NORMAL_TITLE}>
        {NORMAL_GASYA}:{getNormalRensu(ryuseki).toLocaleString()}連, 余り:{getNormalRensuAmari(ryuseki).toLocaleString()}個
      </div>
      <div title={SP_TITLE}>
        {SP_GASYA}:{getSpRensu(ryuseki).toLocaleString()}連 ({getSpRensuSet(ryuseki)}セット), 余り:{getSpRensuAmari(ryuseki).toLocaleString()}個
      </div>
    </CommonFrame>
  );
}

/**
 * 連数→龍石
 * @returns 
 */
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

  function handleOnChange(v: number) {
    //    console.log(ev.target.value);
    if (v < 0) {
      v = 0;
    }
    setRensu(v);
  }

  return (
    <CommonFrame>
      <ModeTitle title='連数から必要な龍石数を求める' />
      <div className='py-1 flex gap-1 items-center'>
        <p>連数:</p>
        <NumberInput value={rensu} onChangeValue={handleOnChange} />
        <p>連</p>
      </div>

      <div title={NORMAL_TITLE}>
        {NORMAL_GASYA}:{getNormalRyuseki(rensu).toLocaleString()}個
      </div>
      <div title={SP_TITLE}>
        {SP_GASYA}:{getSpRyuseki(rensu).toLocaleString()}個
      </div>
    </CommonFrame>
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
    return <tr key={v} className='hover:bg-gray-600 hover:text-gray-50 hover:text-lg hover:font-semibold'>
      <td>{v.toLocaleString()}</td>
      <td>{getNormalRensu(v).toLocaleString()}</td>
      <td>{getSpRensu(v).toLocaleString()}</td>
    </tr>;
  });

  return (
    <CommonFrame>
      <ModeTitle title='目安' />
      <table className='divide-y divide-gray-500'>
        <thead className='text-right'>
          <tr className='text-gray-300 font-medium text-xs'>
            <th scope='col' className='w-16'>龍石 [個]</th>
            <th scope='col' className='w-32' title={NORMAL_TITLE}>{NORMAL_GASYA} [連]</th>
            <th scope='col' className='w-32' title={SP_TITLE}>{SP_GASYA} [連]</th>
          </tr>
        </thead>
        <tbody className='text-right divide-y divide-gray-500 text-gray-300'>
          {rows}
        </tbody>
      </table>
    </CommonFrame>
  );
}


export default function Home() {
  /*
  buildしたらエラー。Suspenseでラップが必要みたいなのでコメント
  const searchParams = useSearchParams();
  const val = searchParams.get('val');
*/
  const backgroundStyle = {
    backgroundImage: `url('${mySetting.basePath}/images/p_da0580_l_da05800.png')`,
  };

  return (
    <div style={backgroundStyle}>
      <AppTitleHeaer />
      <div className=' bg-black/70'>
        <div className='flex flex-col gap-2 p-3 w-fit'>
          <RensuTable />
          <RyusekiTable />
          <RyusekiTable2 />
          {/*
        画像ファイルの表示方法
        <img src={`${mySetting.basePath}/images/p_da0580_m_da05800.svg`} />
  */}
        </div>
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
