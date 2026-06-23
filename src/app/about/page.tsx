import Link from "next/link";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="pt-[50px]">
      <div className="max-w-[800px] mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">About FUSEMUSIC</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-sc-text-secondary">
          <p className="text-lg text-sc-text-primary">
            FUSEMUSIC is Australia's independent music discovery platform — built for the artists, 
            the fans, and the culture that defines Australian sound.
          </p>

          <div className="bg-sc-bg-secondary rounded-lg p-6 border border-sc-border my-8">
            <h2 className="text-xl font-bold text-sc-text-primary mb-3">Our Mission</h2>
            <p>
              We connect Australian artists directly with listeners. No algorithms deciding what you hear. 
              No corporate gatekeepers filtering what gets played. Just the raw, authentic sound of Australia's 
              most exciting musicians — from bedroom producers in Brisbane to stadium headliners in Sydney.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-sc-text-primary mt-10">How It Works</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            {[
              { step: "01", title: "Discover", desc: "Browse Australian artists across every genre — electronic, hip-hop, indie, house, pop, and more." },
              { step: "02", title: "Stream", desc: "Every track streams directly from SoundCloud's infrastructure. High quality, zero cost to artists." },
              { step: "03", title: "Connect", desc: "Follow your favourite artists, build playlists, and be part of Australia's music community." },
            ].map((item) => (
              <div key={item.step} className="bg-sc-bg-secondary rounded-lg p-5 border border-sc-border">
                <span className="text-sc-accent font-bold text-sm">{item.step}</span>
                <h3 className="text-sm font-semibold text-sc-text-primary mt-2 mb-1">{item.title}</h3>
                <p className="text-xs text-sc-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-sc-text-primary mt-10">For Artists</h2>
          <p>
            FUSEMUSIC doesn't host your music — we showcase it. Upload your tracks to SoundCloud 
            (free, unlimited uploads) and FUSEMUSIC will feature them alongside Australia's biggest names. 
            Keep 100% of your SoundCloud royalties. Keep full control of your rights. We're just the amplifier.
          </p>

          <div className="bg-sc-gradient-hero rounded-lg p-6 my-8">
            <h3 className="text-lg font-bold text-white mb-2">Ready to be heard?</h3>
            <p className="text-white/80 text-sm mb-4">
              Upload your music to SoundCloud and get featured on FUSEMUSIC — Australia's fastest growing music discovery platform.
            </p>
            <Link href="/upload" className="inline-flex bg-white text-sc-bg-primary px-5 py-2 rounded font-semibold text-sm hover:bg-gray-100 transition-colors">
              Upload your music
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-sc-text-primary mt-10">Contact</h2>
          <p>
            For artist features, partnerships, or press inquiries:{" "}
            <a href="mailto:hello@fusemusic.com.au" className="text-sc-accent hover:underline">hello@fusemusic.com.au</a>
          </p>
          <p className="text-xs text-sc-text-tertiary">
            FUSEMUSIC acknowledges the Traditional Owners of the lands on which we operate. 
            We pay respect to Elders past and present. Always was, always will be Aboriginal land.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
