import React, { useState } from "react";
// import classNames from "classnames";

import "./style.scss";

function ControllerItem({label, onClick, index, active = false, ...props}) {
	return (
		<div className={`group-item text-align-center w-full ${active && 'active'}`} onClick={(e) => onClick(e, index)}>
			<div className="group-item-circle z-index-2">
				<div  className="bg-white rotate-45 w-1_5 h-1_5"></div>
			</div>
			<div className={`group-item-section border-t border-wilder-purple  transition-all duration-200 ${active && 'active'} w-full`} >
				<button className="group-item-button uppercase" variant="light">
					{ label }
				</button>{' '}
			</div>
		</div>
	)
}


/**
 * @params tabs @type Array
 * @params tabs @type onTabClick
 * */
function ProductsNavigation({tabs, onTabClick, ...props}) {
	const [active, setActive] = useState(null);

	const toggle = (e, index) => {
		setActive(index)
		onTabClick(e, index)
	}

	return (
		<div className="overflow-x-scroll ">
			<div className="products-controller cursor-pointer">
				<div className="products-controller-group">
				{
					tabs?.length && tabs.map((tab, index) => (
						!tab.hideTab &&  <ControllerItem key={index} index={index} active={active === index} onClick={(e, i) => toggle(e, i)} label={tab.tabName} />
					))
				}
				</div>
			</div>
		</div>
	)
}

export default ProductsNavigation;
