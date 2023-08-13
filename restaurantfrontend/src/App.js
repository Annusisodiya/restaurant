import RestaurantInterface from "./screens/restaurant/RestaurantInterface";
import DisplayAllRestaurant from "./screens/restaurant/DisplayAllRestaurant";
import CategoryInterface from "./screens/category/CategoryInterface";
import DisplayAllCategory from "./screens/category/DisplayAllCategory";
import LoginPage from "./screens/superadmin/LoginPage";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";


function App() {
  return(<div>
   <Router>
    <Routes>
      <Route element={<RestaurantInterface/>} path='/restaurantinterface'/>
      <Route element={<DisplayAllRestaurant/>} path='/displayallrestaurant'/>
      <Route element={<CategoryInterface/>} path='/categoryinterface'/>
      <Route element={<DisplayAllCategory/>} path='/displayallcategory'/>
      <Route element={<LoginPage/>} path='/loginpage' />
      
     
    </Routes>
  </Router>
  <DisplayAllCategory/>
  </div>) 
}  

export default App;