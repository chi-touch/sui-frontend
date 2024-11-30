import React from 'react';
import log from "../../../assert/equity 1.png"

const Section1 = () => {
    return (
        <div className="flex justify-center bg-[#073a45]">
            <div className="w-[700px]  bg-[#09A896]">
                <div className="flex ml-[286px]">
                    <img src={log} alt=""/>
                </div>
                <div className="ml-[130px] w-[400px] h-[70px] text-[#073A45]"
                     style={{fontFamily: 'Outfit', fontSize: '40px', textAlign: 'center'}}>
                    <h1>STAKING</h1>
                </div>
                <div>
                    <h1 className="ml-[16px] w-[1000px]">Stake to Earn:- Lock up your crypto assets to support the
                        network and earn rewards in <span className=""><br/>return.</span></h1>
                </div>
                <div className="w-[244px] h-[30px] ml-[230px]  mr-[83px] ">
                    <button className="mb-5 w-full h-full text-white rounded-full bg-[#073A45]">Stake</button>
                </div>

            </div>
        </div>

    );
}

export default Section1;