import { Box,  HStack, VStack } from "@chakra-ui/react";
import bg from "../assets/potfolioBg(1).svg"
import AnimatedContent from "@/Components/bits/SlideUpAnimation";
import SplitText from "../Components/bits/SplitText";
import BlurText from "@/Components/BlurText";
import TextType from "@/Components/TextType";
import { InteractiveHoverButton } from "@/Components/ui/interactive-hover-button";
import { useNavigate } from "react-router-dom";
export default function Home() {
    // console.log("inside the home page");
    let nameText = "Hello, i'm kiran 🤟!";
    let line2Text = "I ❤️ Building,digital products,brands and experiance...!";
    let line3Text = "As a Software Developer Trainee at NextWebi IT Solutions Pvt. Ltd.,and I specialize in building powerful backend solutions,and designing responsive web experiences, and developing mobile and desktop applications that deliver impact.!";
    let reactNavigator=useNavigate();
    return (
        <>
            <Box
                w="100vw"
                h="100vh"
                maxH='none'
                maxW='none'
                style={
                    {
                        backgroundImage: `linear-gradient(to right,rgba(0,0,0,1) 0%,rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0.3) 100%),url('${bg}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "fixed"
                    }
                }
                overflow='scroll'
            >
                {/* <Text>hello</Text> */}
                <HStack p={{ base: 10, md: 0 }} w={{base:"100%",md:"10/12"}} h='10/12' maxW='none'>
                    <VStack w="100%" spaceY={0}>
                        <SplitText
                            text={nameText}
                            className="text-7xl font-semibold text-center"
                            delay={100}
                            duration={0.6}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                        />
                        <AnimatedContent
                            distance={150}
                            // direction="vertical"
                            reverse={false}
                            duration={1.2}
                            // ease="bounce.out"
                            initialOpacity={0.0}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                            delay={0.3}
                        >
                            <Box className="text-center">
                                <BlurText
                                text={line2Text}
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="text-2xl mb-8"
                            />
                            </Box>

                        </AnimatedContent>


                        <AnimatedContent
                            distance={80}
                            // direction="vertical"
                            reverse={false}
                            duration={1.2}
                            // ease="bounce.out"
                            initialOpacity={0.0}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                            delay={0.6}
                        >
                            <Box h='16' className="text-center">
                                <TextType
                                    text={line3Text.split(",")}
                                    typingSpeed={175}
                                    pauseDuration={1500}
                                    showCursor={true}
                                    cursorCharacter="|"
                                />
                            </Box>
                            <div className="h-12"></div>
                        </AnimatedContent>
                        <AnimatedContent
                            distance={80}
                            direction="horizontal"
                            reverse={false}
                            duration={1.2}
                            // ease="bounce.out"
                            initialOpacity={0.0}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                            delay={0.6}
                        >
                            {/* <Text>
                                view more
                            </Text> */}
                            <InteractiveHoverButton onClick={()=>{reactNavigator("/about")}}>
                                view more
                            </InteractiveHoverButton>
                        </AnimatedContent>
                    </VStack>
                </HStack>
                <VStack>
                </VStack>
            </Box>
        </>
    )
}