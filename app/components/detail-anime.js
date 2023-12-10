import React from "react";
import Image from "next/image";

export default function DetailAnime({anime}) {
    console.log(anime);
    return (
        <>
        <img src={anime.images.jpg.image_url} height="100" width="100" alt="tes"></img>
        <h1>{anime.title}</h1>
        </>
    )
}