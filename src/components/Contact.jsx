import { useState, useEffect } from "react"
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [errors, setErrors] = useState({})

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setLoading(true)
    setError("")
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        }
      )
      
      // Success
      setSuccess(true)
      setFormData({ name: "", email: "", message: "" })
      
      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    } catch (err) {
      setError("Failed to send message. Please try again or contact via email.")
      console.error("EmailJS Error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Get in <span className="text-blue-500">Touch</span>
      </h2>
      <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
        Have a project in mind or want to collaborate? I'd love to hear from you. Feel free to reach out!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-white">Send me a Message</h3>
          
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-900/30 border border-red-700/50 rounded-lg text-red-300 text-sm">
              {error}
            </div>
          )}
          
          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-green-900/30 border border-green-700/50 rounded-lg text-green-300 text-sm">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
                className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition disabled:opacity-50 disabled:cursor-not-allowed ${
                  errors.name 
                    ? "border-red-500 focus:border-red-500" 
                    : "border-gray-700 focus:border-blue-500"
                }`}
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition disabled:opacity-50 disabled:cursor-not-allowed ${
                  errors.email 
                    ? "border-red-500 focus:border-red-500" 
                    : "border-gray-700 focus:border-blue-500"
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
                rows="5"
                className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
                  errors.message 
                    ? "border-red-500 focus:border-red-500" 
                    : "border-gray-700 focus:border-blue-500"
                }`}
                placeholder="Your message..."
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 transition duration-200 transform px-6 py-3 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-between">
          <div className="space-y-8">
            {/* Email */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-900/30 border border-blue-700/50 rounded-lg flex items-center justify-center flex-shrink-0">
                <FiMail className="text-blue-400 text-xl" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Email</h4>
                <a href="mailto:subhamkaushikofficial@gmail.com" className="text-gray-400 hover:text-blue-400 transition">
                  subhamkaushikofficial@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-900/30 border border-purple-700/50 rounded-lg flex items-center justify-center flex-shrink-0">
                <FiPhone className="text-purple-400 text-xl" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Phone</h4>
                <a href="tel:+916360915370" className="text-gray-400 hover:text-purple-400 transition">
                  +91 6360915370
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-green-900/30 border border-green-700/50 rounded-lg flex items-center justify-center flex-shrink-0">
                <FiMapPin className="text-green-400 text-xl" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Location</h4>
                <p className="text-gray-400">
                  India
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <h4 className="text-white font-semibold mb-4">Connect with me</h4>
            <div className="flex gap-4">
              <a href="https://github.com/Athreez" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-700 rounded-full text-gray-300 hover:text-blue-500 hover:border-blue-500 transition transform hover:-translate-y-1">
                <FaGithub className="text-lg" />
              </a>
              <a href="https://linkedin.com/in/subham-kaushik-b7b471390" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-700 rounded-full text-gray-300 hover:text-blue-500 hover:border-blue-500 transition transform hover:-translate-y-1">
                <FaLinkedinIn className="text-lg" />
              </a>
              <a href="https://twitter.com/Subham_Kaushik_" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-700 rounded-full text-gray-300 hover:text-blue-500 hover:border-blue-500 transition transform hover:-translate-y-1">
                <FaTwitter className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
