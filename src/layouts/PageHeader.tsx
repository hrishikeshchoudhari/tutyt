import { Bell, Menu, Mic, Search, Upload, User } from "lucide-react"
import logo from "../assets/YouTube_Premium_logo.png"
import { Button } from "../components/Button"
import { useState } from "react"

export function PageHeader() {

  const [showFullWidthSearch, setFullWidthSearch] = useState(false)

  return <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
    <div className={`gap-4 items-center flex-shrink-0 ${showFullWidthSearch ? "hidden" : "flex"}`}>
      <Button variant="ghost" size="icon">
        <Menu />
      </Button>
      <a href="/">
        <img src={logo} className="h-6" />
      </a>
    </div>
    
    <form className="md:flex hidden gap-4 flex-grow justify-center">
      <div className="flex flex-grow max-w-2xl">
        <input type="search" placeholder="Search" className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full" />
        <Button className="py-2 px-4 rounded-r-full border border-secondary-border border-l-0 flex-shrink-0">
          <Search />
        </Button>
      </div>
      <Button type="button" size="icon" variant="default" className="flex-shrink-0">
        <Mic />
      </Button>
    </form>
    
    <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
      <Button onClick={() => setFullWidthSearch(true)} size="icon" variant="ghost" className="md:hidden">
        <Search />
      </Button>
      <Button size="icon" variant="ghost" className="md:hidden">
        <Mic />
      </Button>
      <Button size="icon" variant="ghost">
        <Upload />
      </Button>
      <Button size="icon" variant="ghost">
        <Bell />
      </Button>
      <Button size="icon" variant="ghost">
        <User />
      </Button>
    </div>
  </div>
}