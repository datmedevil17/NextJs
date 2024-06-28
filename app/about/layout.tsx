import "../about.css"
export default function AboutLayout ({
    children,
}:{
    children: React.ReactNode;
}){

    return (
        <div>
            <header>this is about my header</header>
            {children}
        </div>
    )

}