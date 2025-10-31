import { HStack ,Image} from "@chakra-ui/react";
import logo from "../../assets/portfoliologo.png"
export default function NavBar(){
    return(
        <>
        <HStack>
            <Image src={logo}/>
        </HStack>
        </>
    )
}