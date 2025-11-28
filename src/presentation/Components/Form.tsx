import { useCreateContactUsMutation } from "@/Services/ContactService";
import { ContactFormShcema, type ContactFormData } from "@/types/ContactFormType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { Spinner } from "@chakra-ui/react"
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function Form() {
    const { register, handleSubmit, formState: { errors, isValid, isDirty }, reset } = useForm<ContactFormData>({ mode: "all", resolver: zodResolver(ContactFormShcema) });
    const [createContact, { isLoading, isSuccess, error }] = useCreateContactUsMutation();
    const onSubmit = async (data: ContactFormData) => {
        try {
            await createContact(data).unwrap();

        } catch (err) {
            toast.error("something went wrong please try again after some time..." + error);
        }
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success("contact request submitted successfully..");
            reset();
        }
    }, [isSuccess])
    return (
        <div className="bg-gray-900! p-10! lg:p-16!">
            <h2 className="text-2xl! md:text-3xl! font-bold! text-white! mb-8!">Send a Message</h2>
            <form className="space-y-6!" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="block! text-sm! font-medium! text-gray-300! mb-2!">Your Name</label>
                    <input type="text" placeholder="ram"
                        className="w-full! px-4! py-3! bg-gray-800! border! border-gray-700!
              rounded-lg! text-white! placeholder-gray-500!
              focus:ring-2! focus:ring-indigo-500! focus:border-transparent!
              transition! duration-200!"
                        {...register("name")}
                        required />
                    {errors.name && (<span className="text-red-500">please enter name</span>)}
                </div>
                <div>
                    <label className="block! text-sm! font-medium! text-gray-300! mb-2!">Email Address</label>
                    <input type="email" placeholder="ram@gmail.com"
                        className="w-full! px-4! py-3! bg-gray-800! border! border-gray-700!
              rounded-lg! text-white! placeholder-gray-500!
              focus:ring-2! focus:ring-indigo-500! focus:border-transparent!
              transition! duration-200!"
                        {...register("email")}
                        required />
                    {errors.email && (<span className="text-red-500">{errors.email.message}</span>)}

                </div>
                <div>
                    <label className="block! text-sm! font-medium! text-gray-300! mb-2!">Phone</label>
                    <input type="text" placeholder="90199 83058"
                        className="w-full! px-4! py-3! bg-gray-800! border! border-gray-700!
              rounded-lg! text-white! placeholder-gray-500!
              focus:ring-2! focus:ring-indigo-500! focus:border-transparent!
              transition! duration-200!"
                        {...register("phoneNumber")}
                        required />
                    {errors.phoneNumber && (<span className="text-red-500">{errors.phoneNumber.message}</span>)}
                </div>

                <div>
                    <label className="block! text-sm! font-medium! text-gray-300! mb-2!">Message</label>
                    <textarea rows={5} placeholder="Tell me about your project..."
                        className="w-full! px-4! py-3! bg-gray-800! border! border-gray-700!
              rounded-lg! text-white! placeholder-gray-500! resize-none!
              focus:ring-2! focus:ring-indigo-500! focus:border-transparent!
              transition! duration-200!"
                        {...register("message")}
                        required></textarea>
                    {errors.message && (<span className="text-red-500">{errors.message.message}</span>)}
                </div>

                <button type="submit"
                    disabled={!isDirty || !isValid}
                    className={`w-full! bg-linear-to-r! from-indigo-600! to-purple-600!
                    hover:from-indigo-700! hover:to-purple-700!
                    text-white! font-semibold! py-4! rounded-lg!
                    transition! duration-200! transform! hover:scale-[1.02]!
                    focus:ring-2! focus:ring-offset-2! focus:ring-indigo-500!
                    focus:ring-offset-gray-900! ${(!isDirty || !isValid) || isLoading ? "cursor-not-allowed opacity-10" : ""}`}>
                    {isLoading ? <Spinner size="sm" /> : "send contact message"}
                </button>

            </form>

            <p className="text-center! text-sm! text-gray-500! mt-6!">
                Your information will remain confidential.
            </p>

        </div>


    )
}