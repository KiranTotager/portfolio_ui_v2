import { ShineBorder } from "../../src/Components/ui/shine-border"
export default function Form() {
    return (
        <div>
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            <div className="grid md:grid-cols-2 gap-4">
                <label className="block">
                    <span className="text-sm text-gray-300">Full name</span>
                    <input
                        name="name"
                        placeholder="Your name"
                        className="mt-1 block w-full rounded-lg border border-gray-700 bg-[#11131a] px-3 py-2 placeholder-gray-500 focus:outline-none"
                    />
                </label>

                <label className="block">
                    <span className="text-sm text-gray-300">Email</span>
                    <input
                        name="email"
                        placeholder="you@example.com"
                        className="mt-1 block w-full rounded-lg border border-gray-700 bg-[#11131a] px-3 py-2 placeholder-gray-500 focus:outline-none"
                    />
                </label>
            </div>

            <label className="block">
                <span className="text-sm text-gray-300">Subject</span>
                <input
                    name="subject"
                    placeholder="Project, collaboration or quick hello"
                    className="mt-1 block w-full rounded-lg border border-gray-700 bg-[#11131a] px-3 py-2 placeholder-gray-500 focus:outline-none"
                />
            </label>

            <label className="block">
                <span className="text-sm text-gray-300">Message</span>
                <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project or say hi 👋"
                    className="mt-1 block w-full rounded-lg border border-gray-700 bg-[#11131a] px-3 py-3 placeholder-gray-500 focus:outline-none"
                />
            </label>

            <div className="flex items-center gap-3">
                <input type="checkbox" id="subscribe" className="h-4 w-4 rounded-md bg-white/3" />
                <label htmlFor="subscribe" className="text-sm text-gray-300">Send occasional updates about my work</label>
            </div>

            <button type="button" className="w-full py-3 rounded-lg font-semibold text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-95 transition">
                Send Message
            </button>

            <p className="text-center text-sm text-gray-500">Or email me directly at <a href="mailto:kiran.totager@example.com" className="text-cyan-300">kiran.totager@example.com</a></p>
        </div>
    )
}