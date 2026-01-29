"use client"
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";

import feedbackImg_1 from "@/assets/images/media/img_01.jpg";
import feedbackImg_2 from "@/assets/images/media/img_02.jpg";
import feedbackImg_3 from "@/assets/images/media/img_03.jpg";

interface DataType {
   id: number;
   blockquote: JSX.Element;
   name: string;
   country: string;
   img: StaticImageData;
}

const feedback_data: DataType[] = [
   {
      id: 1,
      blockquote: (
         <>
            Propscoch helped us shortlist the right project with clear
            <span> legal and pricing insights</span>. The guidance made the
            entire home-buying process stress-free.
         </>
      ),
      name: "Rahul Mehta",
      country: "Bangalore, India",
      img: feedbackImg_1,
   },
   {
      id: 2,
      blockquote: (
         <>
            As first-time buyers, we were unsure about builders and approvals.
            The team explained everything in a <span>simple and unbiased</span>
            way. Highly recommended.
         </>
      ),
      name: "Neha Kulkarni",
      country: "Mumbai, India",
      img: feedbackImg_2,
   },
   {
      id: 3,
      blockquote: (
         <>
            What stood out was the <span>research-driven approach</span>.
            No sales pressure, just honest advice that helped us choose the
            right home with confidence.
         </>
      ),
      name: "Amit Verma",
      country: "Bangalore, India",
      img: feedbackImg_3,
   },
]

const setting = {
   dots: true,
   arrows: false,
   centerPadding: '0px',
   slidesToShow: 1,
   slidesToScroll: 1,
   fade: true,
   autoplay: true,
   autoplaySpeed: 300000
}

const FeedbackOne = () => {
   return (
      <Slider {...setting} className="feedback-slider-one">
         {feedback_data.map((item) => (
            <div key={item.id} className="item">
               <div className="feedback-block-five">
                  <blockquote>{item.blockquote}</blockquote>
                  <div className="d-flex align-items-center justify-content-end">
                     <div className="pe-3 text-end">
                        <h6 className="fs-20 m0">{item.name}</h6>
                        <span className="fs-16 opacity-50">{item.country}</span>
                     </div>
                     <Image src={item.img} alt="" className="rounded-circle avatar" />
                  </div>
               </div>
            </div>
         ))}
      </Slider>
   )
}

export default FeedbackOne
