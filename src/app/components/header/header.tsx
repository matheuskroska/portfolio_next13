import Image from 'next/image'
import React from 'react'

export const Header = () => {
  return (
    <aside>
      <nav className="absolute left-0 h-screen w-40 bg-slate-200">
        <div className="flex flex-col justify-center items-center h-screen gap-5">
          <Image src={'next.svg'} width={150} height={150} alt="NextSVG" />
          <ul>
            <li>Rede 01</li>
            <li>Rede 01</li>
            <li>Rede 01</li>
            <li>Rede 01</li>
            <li>Rede 01</li>
          </ul>
        </div>
      </nav>
    </aside>
  )
}
