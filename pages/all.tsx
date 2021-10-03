import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import Card from "../components/card";
import TopBar from "../components/topBar";
import { CardsContainer, MainContainer } from "../styles/index";
import { supabase } from "../utils/supabaseClient";

export default function All({data}:any){
    const noCompanies = () => toast('no companies!');

    const router = useRouter();

    useEffect(() => { 
        if(!data || data.length <= 0){
            noCompanies();
            router.replace('/');
        }
    }, []);

    if(!data || data.length <= 0){ return null; }
    return(
        <MainContainer>
            <TopBar /> 
            <h1>All Companies</h1>
    
            <CardsContainer>
                {
                    data.map((info:any, index:number) => ( 
                        <Card name={info.enterprise} rate={info.rate} key={index}/> 
                    ))
                }
            </CardsContainer>
                
            
        </MainContainer>
    );

}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { data } = await supabase
      .from("enterprises")
      .select('enterprise, rate')
  
    return{
      props: {data: data || []}
    }
  }