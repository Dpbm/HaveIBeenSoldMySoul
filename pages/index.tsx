import { MainContainer, HeaderContainer, SearchContainer, CardsContainer, All } from "../styles/index";
import { FaGhost } from 'react-icons/fa';
import { FiArrowRight, FiSearch } from 'react-icons/fi'
import TopBar from "../components/topBar";
import Card from '../components/card';
import { GetServerSideProps } from 'next';
import { supabase } from "../utils/supabaseClient";
import { useEffect, useState } from "react";
import Link from 'next/link';

interface ResultsProps{
  founds: string[] | null;
  search: string | null;
}

function Results({founds, search}:ResultsProps){
  if(founds && founds.length <= 0 && search !== '' && search){ return <h1>No Enterprise Found!</h1> }
  else if(founds && founds.length > 0 && search !== '' && search){
    return(
      <>
        <h1>Found</h1>
        <CardsContainer>
          {
            founds?.map((info:any, index:number) => ( 
              <Card name={info.enterprise} rate={info.rate} key={index}/> 
            ))
          }
        </CardsContainer>
      </>
    );
  }
  else { return null }
}

export default function Home({data}:any){
  const [search, setSearch] = useState<string | null>(null);
  const [enterprisesFound, setEnterprisesFound] = useState<string[] | null>(null);

  async function searchEnterprises(){
    const {data} = await supabase
      .from('enterprises')
      .select()
      .textSearch("enterprise", search || "");
    
    setEnterprisesFound(data || []);
  }

  useEffect(() => { if(search){ searchEnterprises(); }}, [search]);


  return (
    <MainContainer>

      <TopBar />

      <HeaderContainer>
        <FaGhost size={90} style={{ color: "#d1c7c7", marginTop: "20px"}}></FaGhost>
        <h1>Have I Been Sold My Soul?</h1>
        <h3>A summary for all websites, apps and company terms</h3>
      </HeaderContainer>

      <SearchContainer>
        <input 
          ref={input => input && input.focus()} 
          placeholder="company name" 
          onChange={(event:any) => setSearch(event.target.value)} />
        <FiSearch size={30}/>
      </SearchContainer>

      <Results  founds={enterprisesFound} search={search}/>



      {
        data.length > 0 ? (
          <>
            <h1>Recent Added</h1>
            <CardsContainer>
              {
                data.map((info:any, index:number) => ( 
                  <Card name={info.enterprise} rate={info.rate} key={index}/> 
                ))
              }
            </CardsContainer>

            <All>See all <Link href="all"><FiArrowRight size={30}/></Link></All>
          </>
        ) : null
      }
      
    </MainContainer>
  );
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await supabase
    .from("enterprises")
    .select('enterprise, rate')
    .limit(3)
    .order('id',  {ascending: false} );

  return{
    props: {data: data || []},
  }
}