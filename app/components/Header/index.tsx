"use client"

import Logo from "./logo";
import Menu from "./menu";

export default function (props: any){
    return (
        <header>
            {props.name}
            <Logo />
           
            <Menu {...props}/>
        </header>

    );
}