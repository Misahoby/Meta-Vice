import React  from "react";
import BackgroundTab from "./background";


/**
 * @param { Array } tabs
 * @param { Number } currentTabIndex
 * */
 function MainStage({ tabs, currentTabIndex }) {
	return (
        <div className="position-relative">
            {
                tabs?.length > 0 && tabs.map((tab, index) => (
                    <BackgroundTab key={'background-' + index} tab={tab} index={index} currentTabIndex={currentTabIndex} />
                ))
            }
        </div>
	)
}

export default MainStage;
