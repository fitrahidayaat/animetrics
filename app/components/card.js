import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Card({ id,src, title, synopsis }) {
    return (
            <Link href={
                {pathname: "/anime", query : {id : id}}
            } >
        <div className="flex  w-full px-10 py-5 gap-5 border rounded-md border-slate-600">
                <Image
                    className="object-fill"
                    src={src}
                    alt="card"
                    width="150"
                    height="150"
                ></Image>
            <div className="flex flex-col justify-start h-full ">
                <h1 className="font-bold">{title}</h1>
                <p className="text-sm">{synopsis}</p>
            </div>
        </div>
            </Link>
    );
}
