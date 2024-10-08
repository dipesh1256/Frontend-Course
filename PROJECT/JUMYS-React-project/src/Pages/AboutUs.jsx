import React from "react";
import backgroundImage from "../assets/asset50.jpeg";
import iceCreamImage1 from '../assets/asset64.jpg';
import iceCreamImage2 from '../assets/asset65.jpg';
import { ArrowBigRight, ArrowRight } from 'lucide-react';
import avtar1 from "../assets/avatar1.jpg";
import avtar2 from "../assets/avatar2.jpg";
import avtar3 from "../assets/avatar3.jpg";
import avtar4 from "../assets/avatar4.jpg";
import ArticleCard from "../Components/ArticleCard ";
import Footer2  from "../Components/Footer2";
import Top from "../Components/Top";


// Stat Section Data
const stats = [
  { value: '115+', label: 'Branch Shop', mark:'~~' },
  { value: '85+', label: 'Staffs', mark:'~~' },
  { value: '120+', label: 'Flavor Variants', mark:'~~' },
  { value: '90%', label: 'Positive Review',}
];


function AboutUs() {
  return (
    <div>
    <Top/>
      <div className="relative w-full h-[420px]">
        <img
          src={backgroundImage}
          alt="About Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  flex items-center justify-center mt-36">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold text-black">About Us</h1>
            <p className="mt-2">
              <a href="#" className="text-[#000] hover:text-[#ff0000]">
                Home
              </a>{" "}
              <span className="text-black">/</span>
              <span className="text-red-500">About Us</span>
            </p>
          </div>
        </div>
      </div>

{/* Manufacture 1 */}
<div className="flex flex-col md:flex-row items-center md:items-start  my-5 py-10 px-5 md:px-20 gap-x-14">
      <div className="md:w-1/2 ">
        <h2 className="text-red-500 text-2xl font-semibold mb-2 ">Sweet Escape</h2>
        <h1 className="text-5xl font-bold mb-4">Manufacture</h1>
        <p className="text-gray-500 text-lg mb-6">
          Once The Ingredients Have Cooled Enough, It’s Time To Pour Them Into Molds And Freeze In A Brine Bath. After That, The Ice Cream Sticks Are Dried And Packaged In The Freezer In Square Boxes. From Here, This Cool Ice Cream Is Ready To Be Delivered To Visitors...
        </p>
        <button className="bg-[#ff0000] hover:bg-[#000] text-white px-8 py-3 rounded-full flex items-center duration-700">
          View More <span className="ml-2"> <ArrowRight/></span>
        </button>
       
      </div>
      <div className="h-96 overflow-hidden  w-1/2">
        <img src={iceCreamImage1} alt="Ice Cream" className="w-full h-96  ManufactureImg" />
      </div>
    </div>

{/* Stat Section Data */}
<div className="bg-[#fff6f3] py-12">
      <div className="container mx-auto flex justify-around">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h2 className="text-5xl font-bold text-red-600  font-Kalnia">{stat.value}</h2>
            {/* <h1 className="text-red-600 text-5xl">{stat.mark}</h1> */}
            <p className="text-black font-medium font-sana-seriDm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>



    {/* Manufacture 2 */}
    <div className="flex flex-col md:flex-row items-center md:items-start py-10 gap-x-14 my-5 px-5 md:px-20">
    <div className="h-96 overflow-hidden  w-1/2">
        <img src={iceCreamImage2} alt="Ice Cream" className="w-full h-96 ManufactureImg" />
      </div>

      <div className="md:w-1/2">
        <h2 className="text-red-500 text-2xl font-semibold mb-2">Frozen Joy</h2>
        <h1 className="text-5xl font-bold mb-4">History begin</h1>
        <p className="text-gray-500 text-lg mb-6">
        On hot summer days like today, in addition to a glass of cool beverage, a glass of ice cream can also help relieve some of the heat. Ice cream is popular not only among children but also loved by many people of many different ages…
        </p>
        <button className="bg-[#ff0000] hover:bg-[#000] text-white px-8 py-3 rounded-full flex items-center duration-700">
          View More <span className="ml-2"> <ArrowRight/></span>
        </button>
       
      </div>
      
    </div>

    {/* Testimonial section */}
    <div className="m-5 ">
      <h2 className="text-[#ff0000] text-3xl font-serif">Testimonial</h2>
      <h1 className="text-[#000] text-5xl font-serif mt-2">Ice Cream Shop</h1>
    </div>
    <div className="flex justify-center space-x-6 mx-5">
      {/* 1st card */}
      <div className="flex flex-col  text-center justify-center items-center p-6 bg-[#faf2e7]  shadow-md max-w-96 h-[300px]">
        <div className="flex justify-center  items-center gap-x-6 mb-4 ">
          <div>
            <img
              className="w-28 h-28 rounded-full  outline outline-white"
              src={avtar1}
              alt="Anana"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">Anana</h3>
            <p className="text-gray-600">Photographer</p>
          </div>
        </div>
        <div>
          <p className="flex justify-center items-center text-center text-gray-700 font-bold">
            “I Absolutely love this place! The variety of flavors is impressive,
            and each scoop is packed with deliciousness....
          </p>
        </div>
      </div>
      {/* 2nd card */}
      <div className="flex flex-col text-center justify-center items-center p-6 bg-[#faf2e7]  shadow-md max-w-96 h-[300px]">
        <div className="flex justify-center  items-center gap-x-6 mb-4">
          <div>
            <img
              className="w-28 h-28 rounded-full  outline outline-white"
              src={avtar2}
              alt="Ana Smith"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">Ana Smith</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
        </div>
        <p className="flex justify-center items-center text-center text-gray-700 font-bold">
          “A great company to buy from. Excellent quality products at good
          value. Delivery is efficient and quick.”
        </p>
      </div>
      {/* 3rd card */}
      <div className="flex flex-col text-center justify-center items-center p-6 bg-[#faf2e7]  shadow-md max-w-96 h-[300px]">
        <div className="flex justify-center  items-center gap-x-6 mb-4">
          <div>
            <img
              className="w-28 h-28 rounded-full  outline outline-white"
              src={avtar3}
              alt="Jane Smith"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">Linda</h3>
            <p className="text-gray-600">Designer</p>
          </div>
        </div>
        <p className="flex justify-center items-center text-center text-gray-700 font-bold">
          “ I have never been disappointed, either for myself or as gifts, the
          pieces are lovely, reasonably...
        </p>
      </div>

      {/* 4th card */}
  {/* <div className="flex flex-col  text-center justify-center items-center p-6 bg-[#faf2e7]  shadow-md max-w-96 h-[300px]">
        <div className="flex justify-center  items-center gap-x-6 mb-4 ">
          <div>
            <img
              className="w-28 h-28 rounded-full  outline outline-white"
              src={avtar4}
              alt="Robeson"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">Robeson</h3>
            <p className="text-gray-600">Designer</p>
          </div>
        </div>
        <p className="flex justify-center items-center text-center text-gray-700 font-bold">
        “ I have never been disappointed, either for myself or as gifts, the pieces are lovely, reasonably...
        </p>
      </div> */}

    </div>
    <ArticleCard />

<Footer2/>
    </div>
  );
}

export default AboutUs;
