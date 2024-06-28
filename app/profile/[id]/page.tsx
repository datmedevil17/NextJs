"use client";
import { useParams, useRouter} from 'next/navigation';



export default function ProfileID(){
    const router = useRouter()
    const params = useParams();
    console.log(params.id)
    return (<div>Profile Id page: {params.id}
    <div onClick={()=> router.push('/profile')}>Back to Main Page</div>


    </div>)
}