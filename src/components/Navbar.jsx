import { useEffect, useState } from "react"

export default function Navbar() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let current = "home"

          sections.forEach((section) => {
            const sectionTop = section.offsetTop - 150
            if (window.scrollY >= sectionTop) {
              current = section.getAttribute("id")
            }
          })

          setActive(current)
          // Update URL hash based on scroll position
          window.history.replaceState(null, "", `#${current}`)
          ticking = false
        })
        ticking = true
      }
    }

    // Call on mount to detect initial section
    onScroll()

    window.addEventListener("scroll", onScroll)
    window.addEventListener("resize", onScroll)
    
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
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
              className={`transition duration-300 relative ${
                active === item
                  ? "text-blue-500"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}

              {active === item && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500 rounded transition duration-300"></span>
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
