import { FaHeadphonesAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
export default function ShortDetail() {
    return (
        <div className="bg-linear-to-br! from-indigo-700! to-purple-800! p-8! lg:p-16! flex! flex-col! justify-center! text-white! relative!">

            <div className="space-y-2! relative! z-10!">

                {/* Title */}
                <h1 className="text-2xl! md:text-5xl! font-bold! tracking-tight!">
                    Let’s Connect
                </h1>

                {/* Intro Text */}
                <p className=" sm:text-xl! text-indigo-100! leading-relaxed!">
                    I’d love to hear from you — whether it’s about a project, an idea, or even a quick question.
                </p>

                <p className="text-base! sm:text-lg! text-indigo-200! leading-relaxed!">
                    Send me a message anytime. I usually respond within a day.
                </p>

                {/* Info Cards */}
                <div className="space-y-5! mt-6!">

                    {/* Card 1 */}
                    <div className="flex! items-center! gap-4! p-4! rounded-xl! bg-white/10! backdrop-blur-md! border! border-white/20!">
                        <div className="w-8! md:w-12! h-8! md:h-12! rounded-full! bg-white/20! flex! items-center! justify-center!">
                            <FaHeadphonesAlt />
                        </div>
                        <div>
                            <p className="text-sm! text-indigo-200!">contact Number</p>
                            <a href="tel:+91 90199 83058">+91 90199 83058</a>
                            {/* <p className="text-lg! font-semibold!">Under 24 Hours</p> */}
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="flex! items-center! gap-4! p-4! rounded-xl! bg-white/10! backdrop-blur-md! border! border-white/20!">
                        <div className="w-8! md:w-12! h-8! md:h-12! rounded-full! bg-white/20! flex! items-center! justify-center!">
                            <MdAlternateEmail />
                        </div>
                        <div>
                            <p className="text-sm! text-indigo-200!">contact email</p>
                            <a href="mailto:tskiran5114@gmail.com">tskiran5114@gmail.com</a>
                            {/* <p className="text-lg! font-semibold!">Under 24 Hours</p> */}
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex! items-center! gap-4! p-4! rounded-xl! bg-white/10! backdrop-blur-md! border! border-white/20!">
                        <div className="w-8! md:w-12! h-8! md:h-12!  rounded-full! bg-white/20! flex! items-center! justify-center!">
                          <FaMapLocationDot/>
                        </div>
                        <div>
                            <p className="text-sm! text-indigo-200!">Location</p>
                            <p className="text-lg! font-semibold!">Banglore</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex! items-center! gap-4! p-4! rounded-xl! bg-white/10! backdrop-blur-md! border! border-white/20!">
                        <div className="w-8! md:w-12! h-8! md:h-12! rounded-full! bg-white/20! flex! items-center! justify-center!">
                            <FaClockRotateLeft/>
                        </div>
                        <div>
                            <p className="text-sm! text-indigo-200!">Response Time</p>
                            <p className="text-lg! font-semibold!">Under 24 Hours</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Glow Effect Background */}
            <div className="absolute! inset-0!">
                <div className="absolute! -top-10! -left-10! w-40! h-40! bg-purple-500! opacity-20! blur-[90px]!" />
                <div className="absolute! bottom-0! right-0! w-40! h-40! bg-indigo-500! opacity-20! blur-[90px]!" />
            </div>

        </div>

    )
}