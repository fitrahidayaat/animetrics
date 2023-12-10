"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import Card from "../components/card";
import ApiProvider from "../utils/api-provider";
import ReactPaginate from "react-paginate";



export default function Page() {
    const [anime, setAnime] = React.useState([]);

    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((item, i) => (
                        <Card src={item.images.jpg.image_url} key={i} id={item.mal_id} title={item.title} synopsis={item.synopsis}>
                        </Card>
                    ))}
            </>
        );
    }
    
    function PaginatedItems({ itemsPerPage }) {
        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0);
    
        // Simulate fetching items from another resources.
        // (This could be items from props; or items loaded in a local state
        // from an API endpoint with useEffect and useState)
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        const currentItems = anime.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(anime.length / itemsPerPage);
    
        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % anime.length;
            console.log(
                `User requested page number ${event.selected}, which is offset ${newOffset}`
            );
            setItemOffset(newOffset);
        };
    
        return (
            <>
                <div className = "flex flex-wrap flex-col gap-4 justify-center">
                    <Items currentItems={currentItems} />
                </div>
                <div className = "flex flex-wrap gap-4 justify-center mt-2">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                        containerClassName="flex gap-2 justify-center"
                        previousLinkClassName="bg-blue-600 text-white rounded-md px-4 py-2 text-center hover:bg-blue-800"
                        pageLinkClassName="bg-blue-600 text-white rounded-md px-4 py-2 text-center hover:bg-blue-800"
                        nextLinkClassName="bg-blue-600 text-white rounded-md px-4 py-2 text-center hover:bg-blue-800"
                    />
                </div>
            </>
        );
    }

    const handleFind = () => {
        const searchBox = document.getElementById("search-box");
        const search = searchBox.value;
        console.log(search);
        async function fetchData() {
            const myAnime = await ApiProvider.getAnimeSearch(search);
            setAnime(myAnime.data);
            console.log(myAnime);
        }
        fetchData();
    }

    useEffect(() => {
        async function fetchData() {
            const myAnime = await ApiProvider.getTopAnime();
            setAnime(myAnime.data);
            console.log(myAnime);
        }
        fetchData();
    }, []);


    return (
        <>
            <Sidebar></Sidebar>
            <div className="ml-56 flex flex-col p-10 gap-7">
                <div className="flex flex-col items-center mt-12 gap-7">
                    <h1 className="text-3xl font-bold">Find Anime</h1>
                    <div className="flex gap-2">
                        <input
                            id="search-box"
                            type="text"
                            className="border-2 border-slate-400 rounded-md p-2 w-[36rem]"
                        ></input>
                        <button className="bg-blue-600 text-white text-lg py-2 px-5 rounded-md hover:bg-blue-800" onClick={handleFind}>
                            find
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <PaginatedItems itemsPerPage={10} />
                </div>
            </div>
        </>
    );
}
