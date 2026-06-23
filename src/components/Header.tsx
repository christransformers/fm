"use client";

import Link from "next/link";
import { useState } from "react";

const LOGO_SMALL = "https://raw.githubusercontent.com/christransformers/fm/main/logo-small.png";
const LOGO_BIG = "https://raw.githubusercontent.com/christransformers/fm/main/logo-big.png";

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [logoSrc, setLogoSrc] = useState(LOGO_SMALL);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sc-bg-primary/95 backdrop-blur-sm border-b border-sc-border">
      <div className="max-w-[1440px] mx-auto px-4 h-[50px] flex items-center gap-4">
        {/* Logo — small default, big on hover */}
        <Link
          href="/"
          className="flex-shrink-0 group"
          onMouseEnter={() => setLogoSrc(LOGO_BIG)}
          onMouseLeave={() => setLogoSrc(LOGO_SMALL)}
        >
          <img
            src={logoSrc}
            alt="FUSEMUSIC"
            className="h-[28px] w-auto transition-all duration-200 group-hover:h-[36px]"
          />
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          <Link href="/" className="px-3 py-1.5 text-sm font-medium text-sc-text-primary hover:text-sc-text-primary rounded hover:bg-sc-bg-hover transition-colors">
            Home
          </Link>
          <Link href="/fm/charts" className="px-3 py-1.5 text-sm font-medium text-sc-text-secondary hover:text-sc-text-primary rounded hover:bg-sc-bg-hover transition-colors">
            Charts
          </Link>
          <Link href="/fm/feed" className="px-3 py-1.5 text-sm font-medium text-sc-text-secondary hover:text-sc-text-primary rounded hover:bg-sc-bg-hover transition-colors">
            Feed
          </Link>
          <Link href="/fm/artists" className="px-3 py-1.5 text-sm font-medium text-sc-text-secondary hover:text-sc-text-primary rounded hover:bg-sc-bg-hover transition-colors">
            Artists
          </Link>
          <Link href="/fm/library" className="px-3 py-1.5 text-sm font-medium text-sc-text-secondary hover:text-sc-text-primary rounded hover:bg-sc-bg-hover transition-colors">
            Library
          </Link>
        </nav>

        {/* Search */}
        <form className="flex-1 max-w-[400px] hidden sm:flex" onSubmit={(e) => e.preventDefault()}>
          <div className="relative w-full">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sc-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tracks, artists, playlists..."
              className="w-full h-[34px] pl-9 pr-3 bg-sc-bg-tertiary text-sm text-sc-text-primary placeholder-sc-text-tertiary rounded border border-sc-border focus:border-sc-accent focus:outline-none transition-colors"
            />
          </div>
        </form>

        {/* Actions */}
        <div className="flex items-center gap-2 ml-auto">
          <Link href="/fm/upload" className="sc-btn sc-btn-ghost hidden sm:inline-flex text-sm">
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Upload
          </Link>
          <Link href="/fm/sign-in" className="sc-btn sc-btn-ghost text-sm">
            Sign in
          </Link>
          <Link href="/fm/sign-up" className="sc-btn sc-btn-light text-sm">
            Create account
          </Link>
        </div>
      </div>
    </header>
  );
}
