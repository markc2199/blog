import Nav from "./nav";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between md:items-center mt-3">
          <div className="flex items-center md:space-x-12">
            <div className="hidden md:block">
              <Link href="/" className="text-xl">Mark Conklin</Link>
            </div>
            <Nav />
          </div>
          <div>
            Dark toggle
          </div>
          
        </header>
    )
}