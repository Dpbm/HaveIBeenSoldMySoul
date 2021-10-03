import { FiAlertTriangle, FiMeh, FiSmile } from "react-icons/fi";
import { CardContainer, CardHeader, RateIconContainer } from "../styles/card";
import { useRouter } from "next/dist/client/router";

interface GetRateProps{
    rate: number;
}

function GetRate({rate}:GetRateProps){
    if(rate === 1){ 

        return (
            <RateIconContainer title="this enterprise have good terms!">
                <div><FiSmile size={30} /></div>
            </RateIconContainer>
        ); 
    }

    else if(rate === 2){ 
        return (
            <RateIconContainer title="this enterprise have some suspicious terms!">
                <div><FiMeh size={30} /></div> 
            </RateIconContainer>
        );
    }

    else{ 
        return (
            <RateIconContainer title="this enterprise have a lot of bad terms, be careful!">
                <div><FiAlertTriangle size={30} /></div>
            </RateIconContainer>
        );
    }
}

export default function Card({name, rate}:any){
    const router = useRouter();
    return (
        <CardContainer onClick={() => router.push(`/companies/${name}`)}>
            <img src={process.env.NEXT_PUBLIC_SUPABASE_URL_LOGOS + name + ".png"} alt="logo" />
            <CardHeader>
                <h1>{name}</h1>
            </CardHeader>
            <GetRate rate={rate} />
        </CardContainer>

    );
}