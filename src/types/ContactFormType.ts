import { z } from "zod"


var regExp=/^[6-9]\d{9}$/;
export const ContactFormShcema=z.object({
    name:z.string().min(1,"name is required"),
    email:z.email("please enter valid email"),
    // Phone:z.string().regex(regExp),
    phoneNumber:z.string().regex(regExp,"please enter valide phone number"),
    message:z.string().min(1," message is required")
})
export type ContactFormData=z.infer<typeof ContactFormShcema>;