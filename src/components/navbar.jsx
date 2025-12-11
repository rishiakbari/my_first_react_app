const Navbar = () => {
  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Services", link: "#services" },
    { label: "Skills", link: "#skills" },
    { label: "Work", link: "#work" },
    { label: "Contact", link: "#contact" },
  ];

  const handleHomeClick = () => {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#030014] backdrop-blur-md px-10 mt-0 pt-5 flex items-center justify-between">
      {/* LOGO */}
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-18 h-18 object-contain rounded-full"
          onClick={handleHomeClick}
        />
        <h2 className="text-white font-semibold text-lg"></h2>
      </div>
      {/* <h2
        className="text-white font-semibold text-lg cursor-pointer"
        onClick={handleHomeClick}
      >
        <span className="text-gradient text-3xl">RA.</span>
      </h2> */}

      {/* NAV LINKS */}
      <nav>
        <ul className="flex gap-8 text-white font-medium">
          {navItems.map((item, index) => (
            <li
              key={item.label}
              className={`relative cursor-pointer group hover:text-[#D1A14A] nav-animate nav-delay-${
                index + 1
              }`}
            >
              <a href={item.link}>{item.label}</a>

              {/* Underline effect */}
              <span
                className="
                  absolute left-0 -bottom-1 
                  h-[3px] w-0 bg-[#D1A14A] rounded-full 
                  transition-all duration-300 
                  group-hover:w-full
                "
              ></span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
