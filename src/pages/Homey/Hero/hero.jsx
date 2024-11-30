import React from 'react';
import imga1 from "../../../assert/download 1.png"

const Hero1 = () => {
    return (
        <div className="bg-[#073a45]">
            <div className="flex justify-items-center items-center w-full h-[418px] mx-auto px-4 gap-6 bg-[#073a45]">
                <div className="w-[767px] h-[300px] ml-10">
                    <h1 style={{fontFamily: 'Outfit'}}
                        className="font-bold text-gray-900 w-[700px] text-[50px] leading-[60px]">
                        <span className="text-[#FFFFFF]">Empowering </span><span
                        className="text-[#72ddd1]">Communities</span>, <br/> <span className="text-[#FFFFFF]">Securing the</span>
                        <span className="text-[#72ddd1]"> Future</span>
                    </h1>
                    <p className="w-[497px] h-[146px] mt-4 text-[#FFFFFF]">
                        Redefining Community Finance, Empowering <br/> Financial Inclusion
                    </p>
                </div>
                <div className="w-[589px] h-[536px] mt-[-40px] mr-10">
                    <img src={imga1} alt="Image" className="object-cover w-full h-full"/>
                </div>
            </div>
            <p style={{fontFamily: 'Outfit', fontSize: '10px'}} className="w-[459px] h-[27.5px] text-[#72ddd1] ml-10">What we
                Offer</p>
            <p style={{fontFamily: 'Outfit', fontSize: '24px'}} className="font-bold w-[1000px] text-[#FFFFFF] ml-10">Our
                Services</p>
        </div>

    );
};

export default Hero1;
