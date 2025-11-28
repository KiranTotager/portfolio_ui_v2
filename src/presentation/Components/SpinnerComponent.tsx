import { Center, Spinner } from "@chakra-ui/react";

export default function SpinnerComponent() {
    return (
        <>
            <Center h='100vh' w='100vw' minH='none' maxW='none' bg='app-background-color'>
                <Spinner color="blue.500" borderWidth="4px" className="w-full h-full"/>
            </Center>
        </>
    )
}