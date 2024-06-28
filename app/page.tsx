"use client"
import Image from "next/image"
import Header from "./components/Header/index"
import { useState } from "react"


export default function Home() {
  const [loading, setLoading] = useState(false);

  const fetchDataFromApi = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/users", {
        headers: {
          Accept: "application/json",
          method: "GET"
        }
      });

      if (response) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Header name="Rakshit" age={35} isMan={true}>
        <p>A message from Home</p>
        <Image src="/me.jpg" alt="Rakshit" width={200} height={200} />
        <button
          className="px-4 py-2 font-bold text-white bg-blue-500 cursor-pointer"
          onClick={() => fetchDataFromApi()}
        >CallMyApi
          
        </button>
      </Header>
    </main>
  );
}
