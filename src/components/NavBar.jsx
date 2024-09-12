import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import {Link ,useNavigate} from 'react-router-dom'



export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigate  = useNavigate();

  const menuItems = [
    
    { name: 'Home', route: '/' },
    { name: 'Product', route: '/product' },
    { name: 'Pricing', route: '/pricing' },
    { name: 'Features', route: '/features' },
    { name: 'Contact', route: '/contact' }
   
  ];

  const handleClick =() =>{
    setIsMenuOpen(false)
  }

  const handleSignup = () =>{
    navigate('/sign-up')

  }

  return (
    <div className="p-0  w-full">
      <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={{ wrapper: "px-0" }}
    >
      <NavbarContent className="sm:hidden " justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          
          <Link to ='/'><p className="font-bold  text-danger">KURA</p></Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
         
        <Link to ='/'> <p className="font-bold  text-danger">KURA</p></Link>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" to="features">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="product">
            Product
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/pricing" aria-current="page">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="/integrations">
            Integrations
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" to="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link to="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button  color="danger" onClick={handleSignup} variant="ghost">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
           
              to={item.route}
              size="lg"
              onClick={handleClick}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>

    </div>
  );
}
