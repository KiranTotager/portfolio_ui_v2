import { z } from "zod"


var regExp=/^(\+91)[6-9]\d{9}$/;
export const ContactFormShcema=z.object({
    Name:z.string().min(1,"name is required"),
    Email:z.email("please enter valid email"),
    // Phone:z.string().regex(regExp),
    Phone:z.string().regex(regExp,"please enter valide phone number"),
    Message:z.string().min(1," message is required")
})
export type ContactFormData=z.infer<typeof ContactFormShcema>;