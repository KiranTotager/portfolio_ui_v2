import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import { VStack } from "@chakra-ui/react";
interface MainLayoutProps{
    children:React.ReactNode|null;
}
export default function MainLayout({children}:MainLayoutProps){
    return(
        <VStack>
            <NavBar/>
            {children}
            <Footer/>
        </VStack>
    )
}