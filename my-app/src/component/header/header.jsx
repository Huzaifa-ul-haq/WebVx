
import { Button, Navbar, NavbarBrand, NavbarCollapse,  NavbarToggle } from "flowbite-react";
import { Toast, ToastToggle } from "flowbite-react";
import { NavLink } from "react-router";
import myImg from '/src/assets/images/myImg.png';



export function HeaderComponent() {
  return (
    <div>
  <Navbar className="">
    <NavbarBrand>
     <img src={myImg} className="h-8 ms-3 " alt="" />
    </NavbarBrand>  
    <NavbarToggle className=" p-2 mx-6"/>

    <NavbarCollapse className="p-2 sm:gap-6 sm:items-center  justify-center py-5 ">
     
      
      <NavLink to="/" className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-400 "}>
        WebVx
      </NavLink>
      <NavLink  to="/AllProjects" className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-400 "}>
        All Projects
      </NavLink>
      <NavLink to="/Community" className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-400 "}>
        Community
      </NavLink>
      <NavLink to="/AboutUS" className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-400 "}>
        About Us  
      </NavLink>   
   
    </NavbarCollapse>      
    <div className="flex me-2">
      <Button className="btn1">Get started</Button>
      
    </div>
  </Navbar>
</div>


  );
}
