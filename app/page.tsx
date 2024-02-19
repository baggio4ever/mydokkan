'use client'
import Link from 'next/link'
import { Roboto, Noto_Sans } from 'next/font/google';
import { useSearchParams } from 'next/navigation';
import getConfig from 'next/config';

//const { publicRuntimeConfig } = getConfig();

const Roboto900 = Roboto({ weight: '900', preload: false });
const NotoSans = Noto_Sans({ weight: '400', preload: false });

//console.log('publicRuntimeConfig:');
//console.log(publicRuntimeConfig);

//const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || "";
const Gozita = "/images/GFAADCqboAAf2_T.png";
const BlueCombi = '/images/FKVYrTbakAE-gys.png';

export default function Home() {
  const searchParams = useSearchParams();
  const val = searchParams.get('val');


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

      <div className='border-2 border-green-400'>
        {val}
      </div>
    </div>
  );
}
