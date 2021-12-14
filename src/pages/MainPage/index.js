import React, { useState, Suspense } from "react";
import SocialContact from "../../components/SocialContactComponent/index";
import ProductsNavigation from "../../components/ProductsNavigation";
import ProductIntro from "../../components/ProductIntro";
import { Spinner } from "react-bootstrap";
import AppBackground from "./components/app-background";
import "./style.scss";

const MainStage = React.lazy(() => import("./components/main-stage"));

/**
 * @params {Object} tabs
 * */
function MainPage({ tabs, ...props }) {
	const [currentTabIndex, setCurrentTabIndex] = useState(null);

	const toggleTab = (index) => {
		setCurrentTabIndex(index);
	}

	const tab = tabs[currentTabIndex || 0]

	return (
		<div className="MainPage w-full h-full position-absolute overflow-hidden">
			<Suspense fallback={<Spinner className="spinner position-absolute" animation="border" variant="success" size="md" />}>
				<MainStage tabs={tabs} currentTabIndex={currentTabIndex} />
			</Suspense>

			<div className="position-absolute bottom-0 w-full z-index-10 ">
				<div className="z-index-2 MainPage-middle-section lg-mb-2rem d-flex justify-between items-end mx-6 lg:mx-12 lg:flex-row z-index-10">
					{/* product title */}
					<div className="mt-28 lg:mt-auto w-full lg:w-auto select-none pointer-events-auto w-full">
						<ProductIntro title={tab.title} descrition={tab.descrition} buttons={tab.buttons} show={!(tab?.showDescriptionPanel === false)} />
					</div>
					{/* social contract */}
					<div className="lg:max-w-sm w-full social-wrapper">
						<SocialContact />
					</div>
				</div>
				<ProductsNavigation tabs={tabs} onTabClick={(e, index) => toggleTab(index)} />
			</div>
			<AppBackground black={tab?.background?.black} videoPlay={!!tab?.background?.videoPlay} />
		</div>
	)
}

export default MainPage;
