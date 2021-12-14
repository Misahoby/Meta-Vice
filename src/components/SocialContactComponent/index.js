import React from "react";
import { Card, Button } from "react-bootstrap";
// import {ReactComponent as CoinMarket} from "../../assets/imgs/socials/coin-market.svg"
import {ReactComponent as Tiktok} from "../../assets/imgs/socials/tiktok.svg"
// import {ReactComponent as Fzero} from "../../assets/imgs/socials/Fzero.svg"
// import {ReactComponent as Fzone} from "../../assets/imgs/socials/Fzone.svg"
import {ReactComponent as Instagram} from "../../assets/imgs/socials/instagram.svg"
import {ReactComponent as Telgram} from "../../assets/imgs/socials/telgram.svg"
import {ReactComponent as Twitter} from "../../assets/imgs/socials/Twitter.svg"
import {ReactComponent as Reddit} from "../../assets/imgs/socials/reddit.svg"
import {ReactComponent as Youtube} from "../../assets/imgs/socials/youtube.svg"

import  "./style.scss";


function SocialContactComponent(props) {
	return (
		<Card className="social-contacts bg-blur-1 border border-hightlight w-full" draggable>
			<Card.Body className="text-align-center w-full">
			  <Button className="social-contacts-btn p-2" as="a" href="https://www.tiktok.com/@metavice" target="_blank"  variant="light">
			  	<Tiktok className="w-full h-full" />
			  </Button>{' '}
			  <Button className="social-contacts-btn" as="a" href="https://mobile.twitter.com/metavicetoken" target="_blank"  variant="light">
			  	<Twitter className="w-full h-full" />
			  </Button>{' '}
			  <Button className="social-contacts-btn p-2" as="a" href="https://www.reddit.com/user/metaviceofficial" target="_blank"  variant="light">
			  	<Reddit className="w-full h-full"  />
			  </Button>{' '}
			  <Button className="social-contacts-btn" as="a" href="https://www.youtube.com/channel/UCgiWev_FWdlHeakMUho3wLg" target="_blank"  variant="light">
			  	<Youtube className="w-full h-full" />
			  </Button>{' '}
			  <Button className="social-contacts-btn" as="a" href="https://www.instagram.com/metavicetoken" target="_blank"  variant="light">
			  	<Instagram className="w-full h-full" />
			  </Button>{' '}
			  <Button className="social-contacts-btn" as="a" href="/#" target="_blank"  variant="light">
			  	<Telgram className="w-full h-full" />
			  </Button>{' '}
  			  {/* <Button className="social-contacts-btn" as="a" href="/#" target="_blank"  variant="light">
			  	<CoinMarket className="w-full h-full" />
			  </Button>{' '} */}
			</Card.Body>
		</Card>
	)
}

export default SocialContactComponent;
