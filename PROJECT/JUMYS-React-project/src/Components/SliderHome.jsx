import React from 'react'
import slider1_img from "../assets/asset5.png";
import img_plant from "../assets/asset38.png";
import spin from "../assets/asset4.svg";
const SliderHome = () => {
  return (
    <div>
      <div
        className="w-full h-[800px] flex justify-center items-center gap-11"
        id="slider"
      >
        <div className="w-[500px] h-[350px]">
          <h4 className="text-[1.1rem] font-semibold">ICE CREAM SMILES</h4>
          <h1 id="Nav-text">Frosty Delights: Treat Yourself To Creamy</h1>
          <br />
          <button className="home-bt-shop">Shop Now</button>
          <button className="home-bt2-shop">See more</button>
        </div>

        <div className="w-[450px] h-[620px]  ">
          <div class="w-32 h-32 absolute rounded-e-md text-[25px] flex justify-center items-center mt-56 -ml-14 ">
            <img className="spin_of" src={spin} alt="" />
            <h1 id="spin-text">
              Get 30% <br />
              off
            </h1>
          </div>
          <img src={slider1_img} alt="not found" />
        </div>

        <div className="w-[300px] h-[620px] overflow-hidden -mr-48">
          <div className="flip-vertical-right" id="good-root"></div>
          <img className="mt-80 ml-44" src={img_plant} alt="not found" />
        </div>
      </div>
    </div>
  )
}

export default SliderHome
