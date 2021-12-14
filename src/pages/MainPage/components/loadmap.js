import React from 'react'

import './loadmap.scss'

export default function LoadMap({ ...props }) {
    return (
        <div className="mt-20 mb-80" {...props}>
            <div className="text-white row">
                <div className="text-center col-sm-12 col-md-4 py-15">
                    <div className="stage w-full h-full p-2 border-rounded-15" >
                        <h1 className="">MV 0.1</h1>
                        <h6 className="bg-pink">Audit</h6>
                        <p className="font-weight-lighter bg-pink">
                            Audit- Certik & Solidity Finance
                        </p>
                        <p className="font-weight-lighter bg-pink">
                            Strategic Influencer Partnerships
                        </p>
                        <p className="font-weight-lighter bg-pink">
                            Coingecko (FastTrack)
                        </p>
                        <p className="font-weight-lighter bg-pink">
                            Coinmarketcap(FastTrack)
                        </p>
                        <p className="font-weight-lighter bg-pink">
                            Meta Vice Marketplace UI & Minting
                        </p>
                        <p className="font-weight-lighter bg-pink">
                            Meta Vice Condo's design finalisation & preview
                        </p>
                        <p className="font-weight-lighter bg-pink">
                            Environment & VR gameplay preview
                        </p>
                        <p className="font-weight-lighter bg-pink">
                            Avatar Character creator- Construct your avatar based on numerous
                            charecteristics  <br />
                        </p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 py-15">
                    <div className="stage w-full h-full p-2 border-rounded-15" >
                        <h1 className="text-center ">MV 0.2</h1>
                        <h6 className="text-center bg-pink">CEX Listing</h6>
                        <p className="font-weight-lighter bg-pink">
                            Marketing Expansion to multiple continents (Asia, Europe, South America)
                        </p>
                        <p className="font-weight-lighter bg-pink">
                            Team expansion for various roles (VR Game Designer's, Solidity/Immutable X Developers)
                        </p>
                        <p className="font-weight-lighter bg-pink">
                            AI Avatar creator- Construct avatar with a selfie scan which can then be modified
                        </p>
                        <p className="font-weight-lighter bg-pink">
                            Meta Vice Marketplace- Auction, Toys & Accessories
                        </p>
                        <p className="font-weight-lighter bg-pink">
                            Meta Vice Native Messaging & Social Media app
                        </p>
                        <p className="font-weight-lighter bg-pink">
                            Meta Vice Grand Casino
                        </p>
                        <p className="font-weight-lighter bg-pink">
                            Meta Vice Condo's sale on the Meta Vice Marketplace <br />
                        </p>
                    </div>
                </div>
                <div className="text-center col-sm-12 col-md-4 py-15">
                    <div className="stage w-full h-full p-2 border-rounded-15" >
                        <h1 className="text-center ">MV 0.3</h1>
                        <h6 className="text-center bg-pink">Meta Vice DAO </h6>
                        <p className="font-weight-lighter text-center bg-pink">
                            To be Announced
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
