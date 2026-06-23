import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | FUSEMUSIC",
  description: "Sign in to your FUSEMUSIC account and access Australia's best music.",
};

export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
