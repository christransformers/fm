import Link from "next/link";
import { navLinks, socialLinks } from "@/data/tracks";

export function Footer() {
  return (
    <footer className="bg-sc-bg-secondary border-t border-sc-border mt-20">
      <div className="max-w-[1440px] mx-auto px-4 py-12">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sc-text-primary mb-4">
            NEVER STOP LISTENING
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-32 h-32 bg-sc-bg-tertiary rounded-lg flex items-center justify-center">
              <svg className="w-16 h-16 text-sc-text-tertiary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zm0 11h7v7h-7v-7zM3 14h7v7H3v-7z"/>
              </svg>
            </div>
          </div>
          <p className="text-sm text-sc-text-secondary max-w-md mx-auto">
            FUSEMUSIC is available on Web, iOS, Android, Sonos, Chromecast, and Xbox One.
          </p>
        </div>

        {/* Creator CTA */}
        <div className="bg-sc-bg-tertiary rounded-lg p-8 text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-sc-text-secondary mb-2">
            CALLING ALL AUSTRALIAN ARTISTS
          </p>
          <p className="text-sm text-sc-text-secondary max-w-md mx-auto mb-4">
            Get on FUSEMUSIC to connect with Australian fans, share your sound with other artists, and grow your audience. What are you waiting for?
          </p>
          <Link href="/upload" className="sc-btn sc-btn-primary inline-flex">
            Upload your music
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-sc-text-secondary mb-8">
          {navLinks.map((link, i) => (
            <span key={link.href} className="flex items-center gap-2">
              <Link href={link.href} className="hover:text-sc-text-primary transition-colors">
                {link.label}
              </Link>
              {i < navLinks.length - 1 && <span className="text-sc-text-tertiary">·</span>}
            </span>
          ))}
        </div>

        {/* Language selector placeholder */}
        <div className="flex justify-center mb-8">
          <button className="sc-btn sc-btn-outline text-xs">
            <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Australia (English)
          </button>
        </div>

        {/* Social */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-sc-bg-elevated flex items-center justify-center text-sc-text-secondary hover:text-sc-text-primary hover:bg-sc-border-light transition-colors"
              aria-label={link.label}
            >
              <span className="text-[10px] font-bold">{link.icon[0]}</span>
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-[11px] text-sc-text-tertiary">
          © {new Date().getFullYear()} FUSEMUSIC — Australia's home for music. 
          All audio content streamed via SoundCloud. Not affiliated with SoundCloud Global Limited & Co. KG.
        </p>
      </div>
    </footer>
  );
}
