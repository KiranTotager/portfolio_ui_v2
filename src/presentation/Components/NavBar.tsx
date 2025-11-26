import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/portfoliologo.png"
import { VscHome, VscFolderLibrary, VscTools, VscAccount } from "react-icons/vsc";
import { MdWorkOutline } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Dock from "./bits/Dock";
import NavDrawer from "./NavDrawer";

export default function NavBar() {
    const reactNavigator = useNavigate();
    const items = [

        { icon: <VscHome size={24} />, label: 'Home', onClick: () => reactNavigator("/") ,icon2:"🏡"},
        { icon: <VscAccount size={24} />, label: 'About', onClick: () => reactNavigator("/about") ,icon2:"👨‍💻"},
        { icon: <VscFolderLibrary size={24} />, label: 'Projects', onClick: () => reactNavigator("/projects") ,icon2:"✨"},
        { icon: <VscTools size={24} />, label: 'Skills', onClick: () => reactNavigator("/skills") ,icon2:"🧠"},
        { icon: <HiOutlineMail size={24} />, label: 'contact Me', onClick: () => reactNavigator("/contact-me") ,icon2:"📨"},
        { icon: <MdWorkOutline size={24} />, label: 'Hire Me', onClick: () => reactNavigator("/hire-me") ,icon2:"💼"}

    ];
    return (

        <HStack
            w='100%'
            pt={{ base: 6, md: 10 }}
            px={{ base: 6, md: 10 }}
            pb={2}
            className="bg-app-nav-background-color"
            position='sticky'
            right={0}
            // inset={0}
            alignItems='center'
            shadow="sm"
            zIndex={1}

        >
            {/* Logo on the left */}
            <Image
                src={logo}
                w={{ base: 16, md: 20 }}
                className="object-contain rounded-md relative bottom-4 hover:outline-2 outline-blue-600 duration-200"
                cursor='pointer'
                p='0.5'
                role='button'
                onClick={() => { reactNavigator("/") }}
                zIndex={10}

            />

            {/* Dock centered absolutely */}
            <Box
                position='absolute'
                className="justify-between md:justify-normal lg:left-[80%] md:left-[70%] xmd:left-[75%] xl:left-[84%]"
                transform='translateX(-50%)'
                h='48px'
                display='flex'
                alignItems='center'
                w={{base:"100%",md:"0%"}}
                
            >
                <Dock
                    items={items}
                    panelHeight={68}
                    baseItemSize={50}
                    magnification={70}
                    className="hidden md:flex"
                />
            </Box>
                <div className="md:hidden w-full min-h-full flex justify-end bottom-2 absolute right-2">
                    <NavDrawer items={items} />
                </div>

            {/* Spacer for right side (optional - for future items) */}
            <Box w='4%' /> {/* Matches logo width for visual balance */}
        </HStack>

    )
}