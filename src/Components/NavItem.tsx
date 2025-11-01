import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

interface NavtItemProps{
    itemName:string,
    itemPath:string
}
export default function NavItem({itemName,itemPath}:NavtItemProps){
    const customNavigator=useNavigate();
    return(
        <Button onClick={()=>{customNavigator(itemPath)}}>{itemName}</Button>
    )

}