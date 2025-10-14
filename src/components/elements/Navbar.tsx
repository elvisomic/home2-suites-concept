const navItems = [
  { href: "#home", text: "HOME" },
  { href: "#rooms", text: "ROOMS" },
  { href: "#policies", text: "POLICIES" },
  { href: "#hiltonplus", text: "HILTON+" },
  { href: "#disclaimer", text: "DISCLAIMER"}
]


export const Navbar = () => {

  return (
    <section id="navbarID" className="flex justify-center opacity-0">
      <header className="fixed top-4 z-50 p-4 bg-white rounded-4xl shadow-2xl">
        <nav className="relative flex justify-between items-center">
          <a href="#"><img className="md:h-7 h-5 mr-10 xl:h-8" src="home2-suites-concept/assets/Home2.png" alt="" /></a>
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