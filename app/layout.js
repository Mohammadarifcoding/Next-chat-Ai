import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import { dbConnect } from "@/server/services/mongo";
import ChatProvider from "@/provider/Chat";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Ai",
  description: "Talk with your personal assistant",
  openGraph: {
    title: "Next Ai",
    description: "Talk with your personal assistant",
    url: "https://chat-ai-omega-two.vercel.app/",
    siteName: "Next Ai",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/7c9209e8-aec4-4576-a6a1-762e2a8dd500.png?token=rmRcIlMNy4Awngzz23zN4KStn-cmOICb5UcKhU9n5VQ&height=344&width=724&expires=33289868523",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChatProvider>
          <main className="flex flex-row h-screen">
            <Sidebar />
            {children}
          </main>
        </ChatProvider>
      </body>
    </html>
  );
}
