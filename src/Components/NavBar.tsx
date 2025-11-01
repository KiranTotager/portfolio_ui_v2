import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/portfoliologo.png"
import { VscHome, VscFolderLibrary, VscTools, VscAccount } from "react-icons/vsc";
import { MdWorkOutline } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Dock from "./bits/Dock/Dock";

export default function NavBar() {
    const reactNavigator = useNavigate();
    const items = [

        { icon: <VscHome size={18} />, label: 'Home', onClick: () => reactNavigator("/home") },
        { icon: <VscFolderLibrary size={18} />, label: 'Projects', onClick: () => reactNavigator("/projects") },
        { icon: <VscTools size={18} />, label: 'Skills', onClick: () => reactNavigator("/skills") },
        { icon: <VscAccount size={18} />, label: 'About', onClick: () => reactNavigator("/about") },
        { icon: <HiOutlineMail size={18} />, label: 'contact Me', onClick: () => reactNavigator("/contact-me") },
        { icon: <MdWorkOutline size={18} />, label: 'Hire Me', onClick: () => reactNavigator("/hire-me") }

    ];
    return (

        <HStack h='100vh' w='100vw' p='10' justifyContent='space-between' className="bg-app-nav-background-color">
            <Image src={logo} className="w-[5%] rounded-md " />
            <HStack>
                <Dock
                    items={items}
                    panelHeight={68}
                    baseItemSize={50}
                    magnification={70}
                />
            </HStack>
        </HStack>

    )
}