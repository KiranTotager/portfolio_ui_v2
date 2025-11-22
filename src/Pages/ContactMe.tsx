import {  Center } from "@chakra-ui/react";
import { lazy } from "react";
const ShortDetails = lazy(() => import("../Components/ShortDetail"));
const Form = lazy(() => import("../Components/Form"));
export default function ContactMe() {
    return (
        <Center className="bg-app-nav-background-color h-full! w-full!">
            <section className=" h-1/2! flex! items-center! justify-center! p-4!">
                <div className="w-full! max-w-6xl! bg-gray-900! rounded-2xl! shadow-2xl! overflow-hidden!">
                    <div className="grid! grid-cols-1! lg:grid-cols-2!">
                        {/* Left Section */}
                       <ShortDetails/>
                        {/* Right Section */}
                        <Form/>
                    </div>
                </div>
            </section>
        </Center >
    )
}


