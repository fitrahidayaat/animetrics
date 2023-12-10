"use client";
import ApiProvider from "../utils/api-provider";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Anime(context) {
    const {id} = context.searchParams;
    console.log(id);
    const [anime, setAnime] = useState([]) ;
    useEffect(() => {
        async function fetchData() {
            const myAnime = await ApiProvider.getAnimeFullById(id);
            setAnime(myAnime.data);

        }
        fetchData();
    }, []);
    if (!anime) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Image src={anime.images?.jpg?.image_url} height="100" width="100" alt="test"></Image>
            <h1>{anime.title}</h1>
        </>
    );
}