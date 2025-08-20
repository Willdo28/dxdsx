
import './globals.css';
import '../styles/glass.css';
import '../styles/animations.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
export const metadata = { title: 'RBXGlass', description: 'Create Roblox games and tools with a glassmorphism UI' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
