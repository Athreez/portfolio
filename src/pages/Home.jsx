import heroImg from "../assets/programming.svg"
import Socials from "../components/Socials.jsx"
import Projects from "../components/Projects.jsx"
import Skills from "../components/Skills.jsx"
import Contact from "../components/Contact.jsx"

export default function Home() {
  return (
    <>
    <section id="home" className="max-w-6xl mx-auto px-6 pt-28 min-h-[78vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* LEFT: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-500">Subham</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-lg mx-auto md:mx-0">
            A Computer Science student passionate about building
            <span className="text-gray-200"> web applications</span>
            .
          </p>
          <Socials />
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition duration-200 transform px-6 py-2.5 rounded-lg font-medium"
            >
              View Projects
            </a>

            <a
              href="https://drive.google.com/file/d/1mwnXJBr_OLFopLZ6iuF6mTwdbEmdfXmY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 hover:border-gray-400 active:scale-95 transition duration-200 transform px-6 py-2.5 rounded-lg font-medium"
            >
              Resume
            </a>
          </div>
        </div>
        {/* RIGHT: Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={heroImg}
            alt="Programming Illustration"
            className="w-[320px] md:w-[520px] opacity-90"
          />
        </div>

      </div>
    </section>

    {/* Projects Section */}
    <Projects />

    {/* Skills Section */}
    <Skills />

    {/* Contact Section */}
    <Contact />
    </>
  )
}
