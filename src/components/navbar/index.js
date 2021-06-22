import React from 'react'
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink
} from './NavbarElements'

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavLink to="/">
					<h1>Logo</h1>
				</NavLink>
				<Bars />
				<NavMenu>
					<NavLink to="/" activeStyle>
						Home
					</NavLink>
					<NavLink to="/about" activeStyle>
						About
					</NavLink>

					<NavLink to="/Services" activeStyle>
						Services
					</NavLink>

					<NavLink to="/Products" activeStyle>
						Products
					</NavLink>

					<NavLink to="/Contact-Us" activeStyle>
						Contact Us
					</NavLink>

				</NavMenu>
				<NavBtn>
					<NavBtnLink to="/payment">payment</NavBtnLink> {/*save this for some important shit later to make process for customer smoother*/}
				</NavBtn>
			</Nav>
		</>
	)
}

export default Navbar