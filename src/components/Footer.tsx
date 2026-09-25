import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Technical Services</h3>
            <p className="text-slate-600 mb-4">
              Professional network cabling and installation services in Al Ain and Abu Dhabi.
            </p>
            <div className="flex items-center text-primary mb-2">
              <Phone className="w-4 h-4 mr-2" />
              <a href="tel:+971564836102" className="hover:underline">+971564836102</a>
            </div>
            <div className="flex items-center text-primary mb-2">
              <Phone className="w-4 h-4 mr-2" />
              <a href="tel:+971569811332" className="hover:underline">+971569811332</a>
            </div>
            <div className="flex items-center text-primary mb-2">
              <Mail className="w-4 h-4 mr-2" />
              <a href="mailto:info@technicalservices.ae" className="hover:underline">info@technicalservices.ae</a>
            </div>
            <div className="flex items-start text-primary">
              <MapPin className="w-4 h-4 mr-2 mt-1" />
              <p>Al Ain & Abu Dhabi, United Arab Emirates</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/network-installation" className="text-slate-600 hover:text-primary">Network Installation</Link></li>
              <li><Link href="/fiber-optic" className="text-slate-600 hover:text-primary">Fiber Optic Solutions</Link></li>
              <li><Link href="/wifi-setup" className="text-slate-600 hover:text-primary">WiFi & Networking Setup</Link></li>
              <li><Link href="/ethernet" className="text-slate-600 hover:text-primary">Ethernet & Home Networking</Link></li>
              <li><Link href="/cctv" className="text-slate-600 hover:text-primary">CCTV Installation</Link></li>
              <li><Link href="/voip" className="text-slate-600 hover:text-primary">VOIP Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Areas We Serve</h3>
            <ul className="space-y-2">
              <li className="text-slate-600">Al Ain</li>
              <li className="text-slate-600">Abu Dhabi</li>
              <li className="text-slate-600">Dubai</li>
              <li className="text-slate-600">Sharjah</li>
              <li className="text-slate-600">Ajman</li>
              <li className="text-slate-600">Ras Al Khaimah</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Working Hours</h3>
            <ul className="space-y-2">
              <li className="text-slate-600">Monday: 8:00 AM - 5:00 PM</li>
              <li className="text-slate-600">Tuesday: 8:00 AM - 5:00 PM</li>
              <li className="text-slate-600">Wednesday: 8:00 AM - 5:00 PM</li>
              <li className="text-slate-600">Thursday: 8:00 AM - 5:00 PM</li>
              <li className="text-slate-600">Friday: 8:00 AM - 5:00 PM</li>
              <li className="text-slate-600">Saturday: 8:00 AM - 5:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-slate-600 hover:text-primary">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-slate-600 hover:text-primary">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-slate-600 hover:text-primary">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        <div className="text-center text-slate-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Technical Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
