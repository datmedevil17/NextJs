"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Profile(){
    const router = useRouter();
    return (
        <div>
            <h1>List of Profiles</h1>
            <div>
                <ul>
                    <li onClick={()=> router.push("/profile/1")}>Profile 1</li>
                    <li onClick={()=> router.push("/profile/2")}>Profile 2</li>
                    <li onClick={()=> router.push("/profile/3")}>Profile 3</li>
                </ul>
                <Link href="/profile/4">Profile 4</Link>
                <br />
                <Link scroll={false}
                
                href={{
                    pathname: "/profile/5",
                    query: {
                        userName: "Raj"
                    }
                }}>Profile 5</Link>
            </div>
        </div>
    )
}