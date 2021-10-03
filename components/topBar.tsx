import { TopBarContainer } from '../styles/topBar';
import { FaHome, FaGithub, FaInfo } from 'react-icons/fa';
import Link from 'next/link';
export default function TopBar(){
    return(
        <TopBarContainer>
            <Link href="/">
                <FaHome size={30} />
            </Link>

            <Link href="https://github.com/Dpbm/HaveIBeenSoldMySoul">
                <FaGithub size={30} />
            </Link>
            
            <Link href="/about">
                <FaInfo size={30} />
            </Link>
        </TopBarContainer>
    );
}