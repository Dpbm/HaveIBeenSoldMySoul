import { MainContainer, HeaderContainer, SearchContainer, CardsContainer, All } from "../styles/index";
import { FaGhost } from 'react-icons/fa';
import { FiArrowRight, FiSearch } from 'react-icons/fi'
import TopBar from "../components/topBar";
import Card from '../components/card';

const data = [{name: "Microsoft"}, {name:"Google"}, {name:"PayPal"}]


export default function Home(){
  return (
    <MainContainer>

      <TopBar />

      <HeaderContainer>
        <FaGhost size={90} style={{ color: "#d1c7c7", marginTop: "20px"}}></FaGhost>
        <h1>Have I Been Sold My Soul?</h1>
        <h3>A summary for all websites, apps and enterprise terms</h3>
      </HeaderContainer>

      <SearchContainer>
        
        <input ref={input => input && input.focus()} placeholder="name" />
        <FiSearch size={30}/>
      </SearchContainer>

      <h1>Recent Added</h1>
      <CardsContainer>
        {data.map((info:any, index:number) => ( <Card name={info.name} content={info.content} key={index}/> ))}
      </CardsContainer>

      <All>See all <FiArrowRight size={30}/></All>
    </MainContainer>
  );
}