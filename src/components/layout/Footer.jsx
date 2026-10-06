import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
        <footer class="w-full text-center py-5 border-t border-[#DCEBFF] bg-[#EBF5FF] text-xs text-gray-500 flex justify-between px-20 py-4 font-medium">
        <p>&copy; 2026 Omnigo App. All rights reserved.</p>
        <ul class="flex items-center justify-center gap-4">
          <li>
            <Link to="/contact" className="hover:text-[#0365D4]">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="hover:text-[#0365D4]">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/terms" className="hover:text-[#0365D4]">
              Terms of Service
            </Link>
          </li>
        </ul>
      </footer>
  )
}

export default Footer
