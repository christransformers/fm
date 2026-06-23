import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account | FUSEMUSIC",
  description: "Join FUSEMUSIC — Australia's home for music discovery. Create your free account.",
};

export default function SignUpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
