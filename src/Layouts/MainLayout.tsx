import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import { Container, VStack } from "@chakra-ui/react";

interface MainLayoutProps {
    children: React.ReactNode | null;
}
export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <Container
            w="100vw"
            h="100vh"
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
        </Container>
    )
}