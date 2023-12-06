import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import SharedLayout from "./layouts/SharedLayout"
import ApartmentsPage from "./pages/ApartmentsPage/ApartmentsPage"
import RestaurantPage from "./pages/Restaurant/RestaurantPage"
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage"
import ContactsPage from "./pages/ContactsPage/ContactsPage"

function App() {
  return (
    <div>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/apartments" element={<ApartmentsPage />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
          <Route path="/aboutus" element={<AboutUsPage />}/>
          <Route path="/contacts" element={<ContactsPage />}/>
        </Route>
      </Routes>
    </div>
  )
}
export default App