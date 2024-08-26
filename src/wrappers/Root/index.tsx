import { Outlet } from "react-router-dom"
import NavBar from "../../components/navbar"

const Root = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  )
}

export default Root