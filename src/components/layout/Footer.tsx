import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/torrent-foundation-logo.png";
 
export default function Footer() {
  return (
<footer className="bg-primary text-primary-foreground">
<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
          <div className="flex items-center space-x-3">
          <img src={logo} alt="UNM Foundation" className="h-12 w-auto brightness-0 invert" />
          <div>
          <h3 className="text-lg font-bold">UNM Foundation</h3>
          <p className="text-sm text-primary-foreground/80">Torrent Group</p>
          </div>
          </div>
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            Think of others also, when you think about yourself
          </p>
</div>
 
          {/* Quick Links */}
<div>
<h4 className="text-lg font-semibold mb-4">Quick Links</h4>
<nav className="space-y-2">
<Link to="/about" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                About Us
</Link>
<Link to="/commitments" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Our Commitments
</Link>
<Link to="/gallery" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Gallery
</Link>
<Link to="/join" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Join Us
</Link>
<Link to="/contact" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Contact Us
</Link>
</nav>
</div>
 
          {/* Initiatives */}
<div>
<h4 className="text-lg font-semibold mb-4">Our Initiatives</h4>
<div className="space-y-2 text-sm text-primary-foreground/80">
<Link to="https://www.unmicrc.org/" className="block hover:text-primary-foreground transition-smooth">
  UNMICRC
</Link>
<Link to="/commitments" className="block hover:text-primary-foreground transition-smooth">
  Shikshasetu
</Link>
<Link to="https://abhivyaktiart.org/" className="block hover:text-primary-foreground transition-smooth">
  Abhivyakti
</Link>
<Link to="/commitements" className="block hover:text-primary-foreground transition-smooth">
  Ujaas
</Link>
<Link to="/commitements" className="block hover:text-primary-foreground transition-smooth">
  Pratiti
</Link>
</div>
</div>
 
          {/* Contact Info */}
<div>
<h4 className="text-lg font-semibold mb-4">Contact Us</h4>
<div className="space-y-3">
<div className="flex items-start space-x-3">
<MapPin className="h-4 w-4 mt-1 text-primary-foreground/80" />
<div className="text-sm text-primary-foreground/80">
{/* <p>"UNM Foundation",</p> */}
<p>104,South Tower, "ONE42",</p>
<p>Ambli-Bopal Road,</p>
<p>Ahmedabad-380058,</p>
<p>India</p>
</div>
</div>
<div className="flex items-center space-x-3">
<Mail className="h-4 w-4 text-primary-foreground/80" />
<span className="text-sm text-primary-foreground/80">Jalasmi.hathi@unmfoundation.com</span>
</div>
</div>
</div>
</div>
 
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
<p className="text-sm text-primary-foreground/60">
            © 2024 UNM Foundation. All rights reserved.
</p>
</div>
</div>
</footer>
  );
}



// import logo from "@/assets/torrent-foundation-logo.png";

// export default function Footer() {
//   return (
//     <footer className="bg-white border-t border-gray-200">
//       <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        
//         {/* Left side: Logo + Text */}
//         <div className="flex items-center space-x-3 text-gray-600 text-sm">
//           <img src={logo} alt="UNM Foundation" className="h-6 w-auto" />
//           <span>
//             <strong className="text-gray-800">UNM Foundation</strong> © Copyright 2019
//           </span>
//         </div>

//         {/* Right side: Links */}
//         <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-gray-600">
//           <a href="#" className="hover:text-gray-800">Privacy Policy</a>
//           <span>|</span>
//           <a href="#" className="hover:text-gray-800">Disclaimer</a>
//           <span>|</span>
//           <a href="#" className="hover:text-gray-800">Site Map</a>
//         </div>
//       </div>
//     </footer>
//   );
// }
