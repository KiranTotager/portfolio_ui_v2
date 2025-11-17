export default function ShortDetail(){
    return (
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

            {/* LEFT SIDE - Portfolio Content */}
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center text-2xl font-bold">KT</div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-wide">Kiran Totager</h1>
                        <p className="text-sm text-gray-400 mt-1">Software Engineer • AI enthusiast • Building fast, reliable web apps</p>
                    </div>
                </div>

                <p className="text-gray-400 leading-relaxed text-lg">
                    Thanks for visiting my portfolio. I build production-ready applications using modern
                    technologies like FastAPI, React, Docker and more. If you have a project or an idea,
                    I’d love to hear about it — drop me a note using the form on the right.
                </p>

                <div className="grid grid-cols-1 gap-4 text-gray-300">
                    <div className="flex items-start gap-3">
                        <div className="text-cyan-400 text-2xl">💼</div>
                        <div>
                            <div className="font-semibold">Role</div>
                            <div className="text-sm text-gray-500">Software Developer / ML Beginner</div>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="text-cyan-400 text-2xl">⚡</div>
                        <div>
                            <div className="font-semibold">Tech Stack</div>
                            <div className="text-sm text-gray-500">React • FastAPI • Python • Docker • MySQL</div>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="text-cyan-400 text-2xl">⭐</div>
                        <div>
                            <div className="font-semibold">Highlights</div>
                            <div className="text-sm text-gray-500">Portfolio site, AI experiments, Attendance system, Internship projects</div>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                    <div className="flex gap-3">
                        <a href="#" aria-label="GitHub" className="p-2 rounded-md hover:bg-white/3 transition">GitHub</a>
                        <a href="#" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-white/3 transition">LinkedIn</a>
                        <a href="#" aria-label="Twitter" className="p-2 rounded-md hover:bg-white/3 transition">Twitter</a>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE - Form (design only) */}
            <div className="bg-[#0b0d13] border border-[rgba(0,255,255,0.12)] p-8 rounded-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Contact Me</h2>
                    <span className="text-sm text-gray-500">I read every message</span>
                </div>


            </div>
        </div>
    )
}