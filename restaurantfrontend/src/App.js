// import RestaurantInterface from "./screens/restaurant/RestaurantInterface";
// import DisplayAllRestaurant from "./screens/restaurant/DisplayAllRestaurant";
// import CategoryInterface from "./screens/category/CategoryInterface";
// import DisplayAllCategory from "./screens/category/DisplayAllCategory";
import LoginPage from "./screens/superadmin/LoginPage";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Dashboard from "./screens/superadmin/Dashboard";
import FoodItemInterface from "./screens/fooditem/FoodItemInterface";
import DisplayAllFoodItem from "./screens/fooditem/DisplayAllFoodItem";
import TableBookingInterface from "./screens/tablebooking/TableBookingInterface";
import DisplayAllTable from "./screens/tablebooking/DisplayAllTable";
import WaiterInterface from "./screens/waiter/WaiterInterface";



function App() {
  return(<div>
   <Router>
    <Routes>
      {/* <Route element={<RestaurantInterface/>} path='/restaurantinterface'/>
      <Route element={<DisplayAllRestaurant/>} path='/displayallrestaurant'/>
      <Route element={<CategoryInterface/>} path='/categoryinterface'/>
      <Route element={<DisplayAllCategory/>} path='/displayallcategory'/> */}
      <Route element={<FoodItemInterface/>} path='/fooditeminterface'/>
      <Route element={<DisplayAllFoodItem/>} path='/displayallfooditem'/>
      <Route element={<TableBookingInterface/>} path='/tablebookinginterface'/>
      <Route element={<DisplayAllTable/>} path='/displayalltable'/>
      <Route element={<WaiterInterface/>} path='/waiterinterface'/>
      <Route element={<LoginPage/>} path='/loginpage'/>
      <Route element={<Dashboard/>} path='/dashboard/*'/>
      
     
    </Routes>
  </Router>

  </div>) 
}  

export default App;