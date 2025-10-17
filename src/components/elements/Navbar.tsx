const navItems = [
  { href: "#home", text: "HOME" },
  { href: "#roomsPC", text: "ROOMS" },
  { href: "#ammenities", text: "AMMENITIES" },
  { href: "#hiltonplusPC", text: "HILTON+" },
  { href: "#explorePC", text: "EXPLORE" },
]

const navItemsPhone = [
  { href: "#rooms", iconSrc: "roomsIcon.svg" },
  { href: "#ammenities", iconSrc: "ammenities.svg" },
  { href: "#home", iconSrc: "home.svg" },
  { href: "#hiltonplus", iconSrc: "membership.svg" },
  { href: "#explore", iconSrc: "explore.svg" },
]

const NavItemPhone = ({ href, iconSrc, className }: { href: string, iconSrc: string, className?: string }) => {
  return (
    <a href={`${href}`}><img src={`/home2-suites-concept/assets/svg/${iconSrc}`} className={`${className} h-10 active:scale-75 transition-transform ease-in-out duration-200`} /></a>
  )
}

export const Navbar = () => {

  return (
    <section id="navbarID" className="hidden md:flex justify-center opacity-0">
      <header className="fixed top-4 z-50 p-4 bg-white rounded-4xl shadow-2xl">
        <nav className="relative flex justify-between items-center">
          <a href="#home"><img className="md:h-7 h-5 mr-10 xl:h-8" src="/home2-suites-concept/assets/Home2.png" alt="" /></a>
          <ul className="flex mx-3 gap-5 text-[12px] md:text-[16px] xl:text-[20px] xl:gap-7">
            {navItems.map((item) => (
              <li className="text-black" key={item.text}>
                <a href={item.href} className="hover:text-borders hover:opacity-45 hover:transition duration-200 ease-in">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </section>
  )
}

export const NavbarPhones = () => {

  return (
    <section className="md:hidden">
      <header className="fixed bottom-0 left-0 right-0 z-50 bg-[#363636] h-20 rounded-t-3xl shadow-2xl px-4">
        <nav className="w-full h-full flex justify-around items-center">
          {navItemsPhone.map((item, index) => (
            <NavItemPhone
              href={item.href}
              iconSrc={item.iconSrc}
              className={`${index === 2 ? "bg-[#747474] p-3 rounded-full -translate-y-2 outline-4 outline-[#797979] shadow-2xl h-20 " : ""}`}
            />
          ))}
        </nav>
      </header>
    </section>
  )
}