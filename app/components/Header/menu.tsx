"use client"

export default function Menu(props: any){
    return (
        <div>
            {props.name}
            {props.age}
            {props.isMan ? "is a man" : "is not a man"}
            {props.children}

        </div>
    )
}