import Footer from "@/presentation/Components/Footer";
import NavBar from "@/presentation/Components/NavBar";
import { Container, VStack } from "@chakra-ui/react";
import {ToastContainer} from "react-toastify"
interface MainLayoutProps {
    children: React.ReactNode | null;
}
export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <Container
            w="100% "
            h="auto"
            maxH='none'
            maxW='none'
            
        >
            <VStack
                maxW='none'
                w='100%'
                h='100%'
                spaceY={-2}
            >
                <NavBar />
                {children}
                <Footer />
            </VStack>
            <ToastContainer/>
        </Container>
    )
}