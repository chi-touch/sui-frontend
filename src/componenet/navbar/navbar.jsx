import logo from "../../assert/uppLog 1.png";
import  ecp from "../../assert/Ellipse 2.png"
const Navbar = () =>{

    return (
        <div className="flex justify-items-center gap-x-72 items-center bg-[#073a45] ">
            <div className="ml-12">
                <img src={logo} alt="Icon"/>

            </div>
            <img className="absolute mt-[274px] ml-[192px] w-[196px] h-[600px] opacity-50"
                 src={ecp} alt=""/>

            <div className="flex mt-10 gap-10 ">
                <div className="flex gap-10 text-[#72ddd1]">
                    <p>HOME</p>
                    <p>ABOUT</p>
                    <p>STAKING</p>
                    <p>COMMUNITY</p>
                </div>
                <div className="ml-16 w-[140px] h-[40px] mr-[100px] ">
                    <button className="mb-10 w-full h-full py-2 text-white bg-[#09A896] rounded-full ">connect</button>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
