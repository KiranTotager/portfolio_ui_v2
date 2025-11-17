import { Center, Image } from "@chakra-ui/react";
import comingSoon from "../assets/comingSoon.png"
import { ShineBorder } from "../../src/Components/ui/shine-border"
import { lazy } from "react";
const ShortDetails=lazy(()=>import("../Components/ShortDetail"));
const Form=lazy(()=>import("../Components/Form"));
export default function ContactMe() {
    return (
        <Center w="100vw" h="100vh" bg="black">
            <Image
                src={comingSoon}
                alt="Coming Soon"
                objectFit='contain'
                w="100%"
                h="100%"
                display="none"
            />
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            <section className="min-h-screen bg-[#05060b] text-gray-200 flex items-center justify-center p-6">
                <ShortDetails></ShortDetails>
                <Form></Form>
            </section>

        </Center >
    )
}