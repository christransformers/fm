import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upload Your Music | FUSEMUSIC",
  description: "Upload your tracks and get discovered. FUSEMUSIC showcases Australian artists to the world.",
};

import { Footer } from "@/components/Footer";

export default function UploadPage() {
  return (
    <div className="pt-[50px] min-h-screen">
      <div className="max-w-[600px] mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="w-20 h-20 rounded-full bg-sc-gradient-hero flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-2">Upload your tracks</h1>
          <p className="text-sm text-sc-text-secondary">
            Share your sound with the world. Just upload and go.
          </p>
        </div>

        {/* Upload zone */}
        <div className="border-2 border-dashed border-sc-border rounded-lg p-12 text-center mb-8 hover:border-sc-accent transition-colors cursor-pointer">
          <svg className="w-12 h-12 text-sc-text-tertiary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="text-sm text-sc-text-secondary mb-2">
            Drag & drop your files here
          </p>
          <p className="text-xs text-sc-text-tertiary">
            MP3, WAV, FLAC, AIFF, OGG — Up to 4GB
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm text-sc-text-secondary mb-6">
            Sign in to upload tracks and manage your artist profile
          </p>
          <div className="flex items-center justify-center gap-3">
            <button className="sc-btn sc-btn-primary text-sm">
              Sign in to upload
            </button>
            <button className="sc-btn sc-btn-outline text-sm">
              Create account
            </button>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold mb-4">Upload tips</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Quality matters", desc: "Use high-quality audio files for the best listening experience. WAV or FLAC recommended." },
              { title: "Metadata is key", desc: "Add accurate track titles, genres, and descriptions to help fans discover your music." },
              { title: "Artwork sells", desc: "Upload eye-catching artwork that represents your track. 800x800px minimum." },
            ].map((tip) => (
              <div key={tip.title} className="bg-sc-bg-secondary rounded-lg p-4 border border-sc-border">
                <h4 className="text-sm font-semibold mb-1">{tip.title}</h4>
                <p className="text-xs text-sc-text-secondary">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
