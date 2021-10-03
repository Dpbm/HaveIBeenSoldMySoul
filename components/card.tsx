import { CardContainer, CardHeader } from "../styles/card";

export default function Card({name, content}:any){
    return (
        <CardContainer>
            <img src={process.env.NEXT_PUBLIC_SUPABASE_URL_LOGOS + name + ".png"} alt="logo"/>
            <CardHeader>
                <h1>{name}</h1>
            </CardHeader>
        </CardContainer>

    );
}