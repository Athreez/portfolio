import { useEffect, useState } from "react"

export default function Navbar() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const onScroll = () => {
      let current = "home"

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id")
        }
      })

      setActive(current)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-gray-950/80 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">Subham Kaushik</h1>

        <div className="flex gap-6 text-sm">
          {["home", "projects", "skills", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`transition relative ${
                active === item
                  ? "text-blue-500"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}

              {active === item && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500 rounded"></span>
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
