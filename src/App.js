import Header from './components/Header/index';
import MainPage from './pages/MainPage';
// import Bg1 from "./assets/imgs/bg-1.jpg";
// import LogoFinal from "./assets/imgs/LOGO-final-2.0.png";
// import TabImage1 from "./assets/imgs/tab-1.jpg";
// import TabImage2 from "./assets/imgs/tab-2.jpg";
// import Cribes from "./assets/imgs/cribes.jpg";
// import Land from "./assets/imgs/land.jpg";
import RoadMap from "./assets/imgs/roadmap.jpg";

// import MetaviceV2BinalBackground from "./assets/videos/MetaVice_V2_Final.mp4";
import Tokenomics from "./pages/MainPage/components/tokenomics";
import Loadmap from "./pages/MainPage/components/loadmap";
import FAQ from "./pages/MainPage/components/faq";

// https://www.chromestatus.com/feature/5629709824032768
// https://youtu.be/embed/G8bmi3KmgTc

import './assets/scss/app.scss';


function App() {

  const data = [
    {
      id: 0,
      tabName: "default",
      hideTab: true,
      title: <>
        THE METAVERSE <br />
        FOR ADULTS<br />
      </>,
      descrition: <>
        Meta Vice is an immersive Metaverse <br />
        for adults built on Ethereum. <br />
        Play, party, earn and indulge in your fantasies.
      </>,
      buttons: [],
      // backgroundVideo: {
      //   url: MetaviceV2BinalBackground,
      // },
      // img: {
      //   src: LogoFinal,
      //   additionalClasses: "object-fit-contain w-auto h-80vh m-auto"
      // },
      // background: Bg1,
    },
    {
      id: 1,
      tabName: "Meta-Vice",
      title: <>
        THE META VICE
      </>,
      descrition: <>
        Meta Vice is a multifaceted VR Immersive metaverse for adults. <br />
        From Adult Content Creation, Night Clubs, Strip Clubs, <br />
        Private parties, A Grand Casino and much more. <br />
        Meta Vice aims to build the worlds biggest adult metaverse.
      </>,
      buttons: [
      ],
      // backgroundVideo: {
      //   url: MetaviceV2BinalBackground,
      // },
      // // img: {
      //   src: TabBackground1
      // },
      // background: Bg1,
    },
    {
      id: 2,
      tabName: "Casino",
      title: <>
        META VICE CASINO
      </>,
      descrition: <>
        From Play To Earn Poker to Slots and table games <br />
        The Meta Vice Grand Casino provides <br />
        an electric and exciting atmosphere to be in.
      </>,
      buttons: [
      ]
      // backgroundVideo: {
      //   url: MetaviceV2BinalBackground,
      // },
      // img: {
      //   src: TabBackground2,
      // },
      // background: Bg1,
    },
    {
      id: 3,
      tabName: "NFTs",
      title: <>
        NFTs
      </>,
      descrition: <>
        From Costumes to Condos to toys <br />
        and accessories as MetaVice ready NFT's, <br />
        The MetaVice Marketplace is where it all happens.  <br />
      </>,
      buttons: [
      ],
      // backgroundVideo: {
      //   url: MetaviceV2BinalBackground,
      // },
      // img: {
      //   src: TabBackground3
      // },
      // background: Bg1,
    },
    {
      id: 4,
      tabName: "Tokenomics",
      title: <>
        Tokenomics
      </>,
      descrition: <>
        Wilder World is an immersive 5D <br />
        Metaverse built on Ethereum, <br />
        Unreal Engine 5 &amp; ZERO. <br />
      </>,
      buttons: [
      ],
      img: {
        // src: Land
      },
      Tabpage: Tokenomics,
      showDescriptionPanel: false,
      // background: Bg1,
      background: {
        videoPlay: false,
        black: true
      }
    },
    {
      id: 5,
      tabName: "RoadMap",
      title: <>
        RoadMap
      </>,
      descrition: <>
        RoadMap
      </>,
      buttons: [
        // {
        //   label: "visite wheels showcase",
        //   href: "#",
        // }
      ],
      img: {
        src: RoadMap
      },
      Tabpage: Loadmap,
      showDescriptionPanel: false,
      background: {
        videoPlay: false,
        black: true
      }
      // background: Bg1,
    },
    {
      id: 5,
      tabName: "FAQ",
      title: <>
        FAQ
      </>,
      descrition: <>
        FAQ
      </>,
      buttons: [
        // {
        //   label: "visite wheels showcase",
        //   href: "#",
        // }
      ],
      Tabpage: FAQ,
      showDescriptionPanel: false,
      background: {
        videoPlay: false,
        black: true
      }
      // background: Bg1,
    }
  ]

  return (
    <div className="App overflow-hidden">
      <Header />
      <MainPage tabs={data} />
    </div>
  );
}

export default App;
