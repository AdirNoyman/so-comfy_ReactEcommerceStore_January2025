import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
    <>
    <nav className="text-4xl text-primary">SoComfy</nav>
    {/* Outlet = the pages */}
    <Outlet />
    </>
  )
}

export default HomeLayout