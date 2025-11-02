import {
  Box,
  Button,
  CloseButton,
  Drawer,
  For,
  HStack,
  Kbd,
  Portal,
  Text,
  VStack
} from "@chakra-ui/react"
import type React from "react"
import { RiMenuFoldLine } from "react-icons/ri";
import { LiaCopyrightSolid } from "react-icons/lia";
import { AnimatedGradientText } from "./ui/animated-gradient-text";
import '@fontsource/permanent-marker';
type NavItems = {
  icon: React.ReactNode;
  label: String;
  onClick: () => void;
  icon2:String;
}
type NavProps = {
  items: NavItems[];
}

const NavDrawer: React.FC<NavProps> = ({ items }) => {
  return (
    <HStack wrap="wrap" borderLeft="blue">
      {/* xs, "sm", "md", "lg", "xl", "full" */}
      <For each={["sm"]}>
        {(size) => (
          <Drawer.Root key={size} size={size}>
            <Drawer.Trigger asChild>
              <Button variant="outline" size="sm">
                <RiMenuFoldLine />
              </Button>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.Header bg="#2F3A4E" shadow="lg">
                    <Box>
                      <Drawer.Title><code>root@kiran:~$ explore</code></Drawer.Title>
                    </Box>
                  </Drawer.Header>
                  <Box className="bg-linear-to-b from-sky-400 to-sky-900" h="0.5">
                  </Box>
                  <Drawer.Body className="bg-drawer-background-color">
                    <div className="p-10 h-10">
                      
                    </div>
                    {items.map((value, key) => {
                        console.log(value.onClick);
                        console.log(value.icon2)
                        return (
                          <HStack onClick={value.onClick} key={key} cursor="pointer" mb="6">
                            
                            <Text fontSize={20} style={{fontFamily:'Permanent Marker,cursive'}}>
                            {value.icon2}&nbsp;&nbsp;&nbsp;
                              <AnimatedGradientText >
                              {value.label}
                            </AnimatedGradientText>
                            </Text>
                          </HStack>
                        )
                      })}
                  </Drawer.Body>
                  <Drawer.Footer bg="#2F3A4E">
                    <HStack justifyContent="space-between" w="100%">
                      <HStack>
                        made with ❤️
                      </HStack>
                      <HStack alignItems="center" justifyContent="center">
                        <LiaCopyrightSolid />
                        <Text>2025 Kiran Totager.All rights reserved.</Text>
                      </HStack>
                    </HStack>
                  </Drawer.Footer>
                  <Drawer.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Drawer.CloseTrigger>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
        )}
      </For>
    </HStack>
  )
}
export default NavDrawer;