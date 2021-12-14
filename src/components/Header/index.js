import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Logo from "../../assets/imgs/LOGO-final-2.0.png";
import { ReactComponent as Triangle } from "../../assets/imgs/triangle.svg";
import "./style.scss";


function Header() {
	return (
		<header className="position-absolute w-full z-index-10">
			<Navbar className="header">
			  <Container>
			    <Navbar.Brand href="/">
					<img src={Logo} className="logo" alt="logo"></img>
			    </Navbar.Brand>
			    <Navbar.Toggle />
			    <Navbar.Collapse className="justify-content-end">
			    	<a href="/#"  target="_blank" className="text-decoration-none text-glow-blue hover-zoom-1_1 cursor-pointer"> 
				    	<div className="border-2 border-solid border-wilder-blue rounded-xl p-1 border-opacity-25 inline-block group m-1 cursor-pointer transition-all duration-200">
				    		<div className="border-2 border-solid border-wilder-blue rounded-lg p-1 border-opacity-50 transition-all duration-200">
				    			<div className="border-2 border-solid border-wilder-blue rounded-md px-2 py-1 border-opacity-90 bg-wilder-blue-dark bg-opacity-20 backdrop-blur-md backdrop-filter transition-all duration-200 text-sm text-glow-blue-only d-flex">
									<span className="pr-20 pl-20 uppercase text-decoration-none text-white text-sm"
										style={{textShadow: "0 0 6px #006fff,0 0 20px #1877f2"}}
									>Buy</span>
									<Triangle className="w-20 h-20"/>
				    			</div>
				    		</div>
				    	</div>
			    	</a>
			    </Navbar.Collapse>
			  </Container>
			</Navbar>
		</header>
	)
}

export default Header;
