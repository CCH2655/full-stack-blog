const Navbar = () => {
  return (
    <div className="w-full h-15 md:h-20 flex items-center">
      {/* LOGO */}
      <div className="">
        <img src="/logo.png" className="w-8 h-8" alt="" />
        <span>CCHlog</span>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">M</div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex">D</div>
    </div>
  )
}

export default Navbar