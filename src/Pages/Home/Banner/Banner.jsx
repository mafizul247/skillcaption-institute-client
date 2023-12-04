import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <>
      <Carousel>
        <div>
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://img.freepik.com/free-photo/students-knowing-right-answer_329181-14271.jpg?w=740&t=st=1698242235~exp=1698242835~hmac=5c339bd86b1f76795e4bae27e5adab10e5ac91c43c387c2330cb6d0e06a9912c" className="w-full md:h-[80vh]" />
            <div className="absolute  transform -translate-y-1/2 left-20 right-5 top-32">
              <p className="text-2xl text-white  font-semibold w-1/2">Have Fun with  <p className="text-5xl uppercase"><span className="text-[#F45050]">Skillcaption</span> Institute</p></p>
              <Link to="/classes" className="btn mt-4 ">Enroll now</Link>
            </div>
          </div>
        </div>

        <div>
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://img.freepik.com/premium-photo/school-children-library-reading-books-doing-homework-prepare-school-project-lessons_98296-10384.jpg?w=740" className="w-full md:h-[80vh]" />
            <div className="absolute  transform -translate-y-1/2 left-20 right-5 top-32">
              <p className="text-2xl text-white  font-semibold w-1/2">Doing Home Work With  <p className="text-5xl uppercase"><span className="text-[#F45050]">Skillcaption </span> Institute</p></p>
              <Link to="/classes" className="btn mt-4 ">Enroll now</Link>
            </div>
          </div>
        </div>

        <div>
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://img.freepik.com/premium-photo/portrait-smiling-male-elementary-school-student-working-desk-classroom-with-teacher_625516-1124.jpg?w=740" className="w-full md:h-[80vh]" />
            <div className="absolute  transform -translate-y-1/2 left-20 right-5 top-32">
              <p className="text-2xl text-white  font-semibold w-1/2">Learn <span className="text-[#F45050]">New Experience</span> with  <p className="text-5xl uppercase"><span className="text-[#F45050]">SkillCaption</span> Institute</p></p>
              <Link to="/classes" className="btn mt-4 ">Enroll now</Link >
            </div>
          </div>
        </div>

        <div>
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://img.freepik.com/free-photo/science-dna-research-development-human_53876-121145.jpg?w=740&t=st=1698242484~exp=1698243084~hmac=1e27c1fb4adb95ea8db2d9485c0952850a82ede87f76ff7123fb9ea3271098cf" className="w-full  md:h-[80vh]" />
            <div className="absolute  transform -translate-y-1/2 left-20 right-5 top-32">
              <p className="text-2xl text-white  font-semibold w-1/2">Having Fun    <p className="text-5xl uppercase"><span className="text-[#F45050]">Learning With Populer </span>Instrutor</p></p>
              <Link to="/classes" className="btn mt-4  ">Enroll now</Link>
            </div>
          </div>
        </div>

      </Carousel>
    </>
  );
};

export default Banner;