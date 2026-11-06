import type { ReactNode } from "react";

import "./globals.css";
import { AuthProvider } from "./auth-context";
import SiteShell from "./site-shell";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th">
      <body>
        <AuthProvider>
          <SiteShell>{children}</SiteShell>
        </AuthProvider>
      </body>
    </html>
  );
}
