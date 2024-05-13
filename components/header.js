import useServerDarkMode from "@/hooks/use-server-dark-mode";
import DarkMode from "./dark-mode";
import Nav from "./nav";
import Link from "next/link";

export default function Header() {
  const theme = useServerDarkMode()
    return (
        <header className="flex justify-between md:items-center mt-3">
          <div className="flex items-center md:space-x-12">
            <div className="hidden md:block">
              <Link href="/" className="text-xl font-mono">Mark Conklin</Link>
            </div>
            <Nav />
          </div>
          <div>
            <DarkMode defaultTheme={theme}/>
          </div>
          
        </header>
    )
}