import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/container";
import { MainRoutes } from "@/lib/helpers";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, hoverColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-colors duration-300 hover:${hoverColor}`}
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="hover:underline transition-colors duration-300 text-gray-400 hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-300 py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {MainRoutes.map((route) => (
                <FooterLink key={route.href} to={route.href}>
                  {route.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">About Us</h3>
            <p className="text-gray-400 leading-relaxed">
              We are committed to helping you unlock your full potential with
              AI-powered tools. From mock interviews to personalized insights,
              our platform is designed to make your preparation smarter and more
              effective.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink to="/services/interview-prep">
                Interview Preparation
              </FooterLink>
              <FooterLink to="/services/career-coaching">
                Career Coaching
              </FooterLink>
              <FooterLink to="/services/resume-building">
                Resume Building
              </FooterLink>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">
              Contact Us
            </h3>
            <p className="mb-4 text-gray-400">
              123 AI Street, Tech City, 12345
            </p>
            <div className="flex gap-4">
              <SocialLink
                href="https://facebook.com"
                icon={<Facebook size={22} />}
                hoverColor="text-blue-500"
              />
              <SocialLink
                href="https://twitter.com"
                icon={<Twitter size={22} />}
                hoverColor="text-sky-400"
              />
              <SocialLink
                href="https://instagram.com"
                icon={<Instagram size={22} />}
                hoverColor="text-pink-500"
              />
              <SocialLink
                href="https://linkedin.com"
                icon={<Linkedin size={22} />}
                hoverColor="text-blue-600"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} AI Interview Prep. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};
