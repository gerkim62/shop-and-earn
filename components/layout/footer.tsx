import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import app from "@/constants/app";
import Link from "../small/link-with-loader";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-800">
              {app.name}
            </h3>
            <p className="text-gray-600">{app.desription}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-800">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-purple-600">
                  About Us
                </Link>
              </li>
              <li>
                <a href="/products" className="hover:text-purple-600">
                  Products
                </a>
              </li>
              <li>
                <a href="/referrals" className="hover:text-purple-600">
                  Referral Program
                </a>
              </li>
              <li>
                <Link href="/faq" className="hover:text-purple-600">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-800">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="hover:text-purple-600">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-purple-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/returns" className="hover:text-purple-600">
                  Return Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-800">
              Stay Updated
            </h4>
            <p className="mb-2 text-gray-600">
              Subscribe to our newsletter for exclusive deals!
            </p>
            <form className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white border-gray-300"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-600 hover:text-purple-600">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600">
              <Linkedin size={24} />
            </a>
          </div>
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} {app.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
