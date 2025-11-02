import { Center, Image } from "@chakra-ui/react";
import comingSoon from "../assets/comingSoon.png"
export default function ContactMe() {
    return (
        <Center w="100vw" h="100vh" bg="black">
            <Image
                src={comingSoon}
                alt="Coming Soon"
                objectFit='contain'
                w="100%"
                h="100%"
            />
        </Center>
    )
}