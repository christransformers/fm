"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sc-bg-primary/95 backdrop-blur-sm border-b border-sc-border">
      <div className="max-w-[1440px] mx-auto px-4 h-[50px] flex items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
            <path d="M4.8 13.2L2.4 3.6H0L3.6 16.8H6L9.6 3.6H7.2L4.8 13.2Z" fill="#FF5500"/>
            <path d="M12 6L10.8 3.6H8.4L10.8 8.4V16.8H13.2V8.4L15.6 3.6H13.2L12 6Z" fill="#FF5500"/>
            <path d="M16.8 3.6V16.8H19.2V3.6H16.8Z" fill="white"/>
            <path d="M22.8 16.8L26.4 3.6H24L21.6 13.2L19.2 3.6H16.8L21.6 16.8H22.8Z" fill="white"/>
            <circle cx="34" cy="10" r="2" fill="#FF5500"/>
            <circle cx="40" cy="12" r="3" fill="#FF5500"/>
            <circle cx="46" cy="8" r="1.5" fill="#FF5500"/>
          </svg>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          <Link href="/" className="px-3 py-1.5 text-sm font-medium text-sc-text-primary hover:text-sc-text-primary rounded hover:bg-sc-bg-hover transition-colors">
            Home
          </Link>
          <Link href="/feed" className="px-3 py-1.5 text-sm font-medium text-sc-text-secondary hover:text-sc-text-primary rounded hover:bg-sc-bg-hover transition-colors">
            Feed
          </Link>
          <Link href="/library" className="px-3 py-1.5 text-sm font-medium text-sc-text-secondary hover:text-sc-text-primary rounded hover:bg-sc-bg-hover transition-colors">
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
              placeholder="Search for tracks, artists, playlists..."
              className="w-full h-[34px] pl-9 pr-3 bg-sc-bg-tertiary text-sm text-sc-text-primary placeholder-sc-text-tertiary rounded border border-sc-border focus:border-sc-accent focus:outline-none transition-colors"
            />
          </div>
        </form>

        {/* Actions */}
        <div className="flex items-center gap-2 ml-auto">
          <Link href="/upload" className="sc-btn sc-btn-ghost hidden sm:inline-flex text-sm">
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Upload
          </Link>
          <Link href="/sign-in" className="sc-btn sc-btn-ghost text-sm">
            Sign in
          </Link>
          <Link href="/sign-up" className="sc-btn sc-btn-light text-sm">
            Create account
          </Link>
        </div>
      </div>
    </header>
  );
}
