import { Link, Outlet } from "react-router-dom"
import { Toaster } from 'sonner'
import Logo from "@/presentation/components/logo"
import NavMenu from "@/presentation/components/nav-menu"
export function RootLayout() {
  return (
    <div className="space-y-4">
      <header className="bg-gray-800 py-5">
        <div className="max-w-(--breakpoint-2xl) mx-auto px-2 lg:px-4 flex flex-col lg:flex-row justify-between items-center">
          <div className="w-64">
            <Link to={"/projects"}>
              <Logo />
            </Link>
          </div>
          <nav className="">
            <NavMenu />
          </nav>
        </div>
      </header>
      <section className="max-w-(--breakpoint-xl) mx-auto p-5">
        <Outlet />
      </section>
      <footer className="bg-gray-800 py-5">
        <p className="max-w-(--breakpoint-2xl) mx-auto text-center text-white">
          <span className="font-semibold">Uptask</span> &copy; {new Date().getFullYear()}
        </p>
      </footer>
      <Toaster position="bottom-right" />
    </div>
  )
}
