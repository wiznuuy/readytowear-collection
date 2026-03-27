import HamburgerMenu from './HamburgerMenu'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 h-14 flex items-center px-5 bg-[#f5f0e8]">
      <HamburgerMenu />
    </header>
  )
}
