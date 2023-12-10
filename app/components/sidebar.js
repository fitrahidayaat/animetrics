import React from 'react';
import Link from 'next/link';

export default function Sidebar(){
    return (
        <>
            <nav className="fixed h-screen bg-[#1F2937] w-56 px-3 py-5 flex flex-col gap-2">
               <Link href="/find-anime">
                  <div className="w-full  px-10 py-2 text-center text-white hover:bg-[#374151] rounded-lg">Find Anime</div>
               </Link>
               <Link href="/my-list">
                  <div className="w-full  px-10 py-2 text-center text-white hover:bg-[#374151] rounded-lg" >My List</div>
               </Link>
            </nav>
        </>
    )
}