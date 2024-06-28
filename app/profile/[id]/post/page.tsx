"use-client";
import { useParams } from "next/navigation"

export default function ProfileIDPosts(){
    const params = useParams();
    return <div>Profile page Id is : {params.id}</div>
}