import React from "react";
import { Button } from "react-bootstrap";
import {ReactComponent as Arrow} from "../../assets/imgs/arrow.svg"

import "./style.scss";

/**
 * @param title @type Sting | jsx
 * @param descrition @type Sting | jsx
 * @param buttons @type Array
 * */
function ProductIntro({ title, descrition, buttons, show, ...props}) {
	return (
		<div className={`ProductIntro font-ddtex w-full transition-all duration-300 ${show ? "" : "d-none"}`}>
			<h1 className="uppercase title bg-clip-text text-3xl md:text-2xl xl:text-4xl 2xl:text-6xl font-ddtex font-bold text-transparent bg-clip-text bg-gradient-to-l from-white via-wilder-blue-light to-white animate-text">
			{title}
			</h1>
			<p className="d-flex md:text-md xl:text-lg 2xl:text-2xl mt-2 lg:mt-4 text-wilder-gray text-white hidden lg:block text-capitalize">{descrition}</p>
			<div className="d-flex w-full">
			{
				buttons?.length > 0 && buttons.map((button, index) => (
					<Button as="a" key={index} variant="link" className="text-decoration-none text-shadow text-white d-flex p-1 uppercase">
					 	{button.label}
					 	<Arrow  className="w-20 h-20 text-shadow text-wilder-blue w-25 h-25" />
					</Button>
				))
			}
			</div>
		</div>
	)
}

export default ProductIntro;
