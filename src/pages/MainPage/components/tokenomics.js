import React from 'react'
import "./tokenomics.scss"

export default function Tokenomics({ ...props }) {
    return (
        <div {...props} className="pb-60">
            <div className="text-white align-items-stretch">
                <div className="text-center p-15" bg="transparent" >
                    <h1 className="title" >15<span className="text-percent">%</span> </h1>
                    <span className="font-weight-lighter">
                        Buy &amp; Sell tax
                    </span>
                    <br />
                    <span className="font-weight-lighter">
                        (Decreases by 1%  daily until capping at 5%)
                    </span>

                </div>

            </div>

            <div className="text-white align-items-stretch row">
                <div className="text-center p-15 border-right border-grey-100 col" bg="transparent" >
                    <h1 className="title" >10T</h1>
                    <span className="font-weight-lighter">
                        Total supply
                    </span>
                </div>
                <div className="text-center p-15 border-right border-grey-100 col" bg="transparent" >
                    <h1 className="title" >35<span className="text-percent">%</span></h1>
                    <span className="font-weight-lighter">
                        Development
                    </span> 
                </div>
                <div className="text-center p-15 border-right border-grey-100 col" bg="transparent" >
                    <h1 className="title" >35<span className="text-percent">%</span></h1>
                    <span className="font-weight-lighter">
                        Marketing
                    </span>
                </div>
                <div className="text-center p-15 col" bg="transparent" >
                    <h1 className="title" >30<span className="text-percent">%</span></h1>
                    <span className="font-weight-lighter">
                        Treasury
                    </span>
                </div>
            </div>
        </div>
    )
}
