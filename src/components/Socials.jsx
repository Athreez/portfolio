import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

export default function Socials() {
  return (
    <div className="flex gap-4 mt-6 justify-center md:justify-start">
      <SocialIcon href="https://github.com/Athreez">
        <FaGithub />
      </SocialIcon>

      <SocialIcon href="https://linkedin.com/in/subham-kaushik-b7b471390">
        <FaLinkedinIn />
      </SocialIcon>

      <SocialIcon href="https://twitter.com/Subham_Kaushik_">
        <FaTwitter />
      </SocialIcon>

      <SocialIcon href="https://leetcode.com/u/Athreez">
        <SiLeetcode />
      </SocialIcon>

    </div>
  )
}

function SocialIcon({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="p-2 border border-gray-700 rounded-full text-gray-300
                 hover:text-blue-500 hover:border-blue-500
                 transition transform hover:-translate-y-1"
    >
      <span className="text-lg">{children}</span>
    </a>
  )
}
