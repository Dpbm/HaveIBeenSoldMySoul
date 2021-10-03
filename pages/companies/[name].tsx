import { GetServerSideProps } from 'next'
import { supabase } from '../../utils/supabaseClient';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { MainContainer } from '../../styles/index';
import { useRouter } from 'next/dist/client/router';
import { HeaderContainer, TermsContainer } from '../../styles/company';
import Markdown from 'markdown-to-jsx';
import TopBar from '../../components/topBar';

interface EnterpriseProps{
    enterprise: string;
}

export default function Companies({data}:any){
    const ErrorOnGet = () => toast('Failed on get the company data!');

    const router = useRouter();

    useEffect(() => { 
        if(data === 'failed'){ 
            ErrorOnGet(); 
            router.replace('/');
        } 
    }, [])

    if(data === 'failed'){ return null; }

    return(
        <MainContainer>
            <TopBar />
            <HeaderContainer>
                <img 
                    src={process.env.NEXT_PUBLIC_SUPABASE_URL_LOGOS + data.enterprise + ".png"} 
                    alt="logo" />
                <h1>{data.enterprise}</h1>
            </HeaderContainer>
            <TermsContainer>
                <h1 id="termsTitle">Terms</h1>
                <Markdown id="summary">{data.summary}</Markdown>
            </TermsContainer>
        </MainContainer>
    );
}



export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const {name} : any = params;

    const {data, error} = await supabase
        .from('enterprises')
        .select('enterprise, summary, rate')
        .match({'enterprise':name})
        .single();


    if(!data || error){ return {props:{data:'failed'}} }
    
    return {props:{data}}
}

