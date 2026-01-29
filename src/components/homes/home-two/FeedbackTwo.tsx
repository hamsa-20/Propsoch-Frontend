"use client"
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import BrandOne from "@/components/common/brand/BrandOne";

import feedbackIcon from "@/assets/images/icon/icon_14.svg"
import feedbackShape_1 from "@/assets/images/shape/shape_25.svg"
import feedbackShape_2 from "@/assets/images/shape/shape_26.svg"
import feedbackShape_3 from "@/assets/images/shape/shape_27.svg"
import feedbackThumb_1 from "@/assets/images/media/img_22.jpg";
import feedbackThumb_2 from "@/assets/images/media/img_22.jpg";
import feedbackThumb_3 from "@/assets/images/media/img_22.jpg";

interface DataType {
   id: number;
   desc: JSX.Element;
   title: string;
   country: string;
   thumb: StaticImageData
}
const feedback_data: DataType[] = [
  {
    id: 1,
    desc: (
      <>
        &quot;Excellent service, smooth process, and clear guidance throughout.
        <span> Highly recommended</span> for Bangalore properties!&quot;
      </>
    ),
    title: "Rahul Mehta",
    country: "Bangalore, India",
    thumb: feedbackThumb_1,
  },
  {
    id: 2,
    desc: (
      <>
        &quot;Very professional team, helped us find the right home quickly.
        <span> Great experience</span> overall.&quot;
      </>
    ),
    title: "Ananya Sharma",
    country: "Mumbai, India",
    thumb: feedbackThumb_2,
  },
  {
    id: 3,
    desc: (
      <>
        &quot;Transparent pricing and genuine listings.
        <span> Trustworthy real estate platform</span> in the city.&quot;
      </>
    ),
    title: "Karthik Rao",
    country: "Bangalore, India",
    thumb: feedbackThumb_3,
  },
];


const FeedbackTwo = () => {

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

   return (
      <div className="feedback-section-three mt-170 xl-mt-150 lg-mt-100">
         <div className="container">
            <div className="bg-line position-relative z-1 pt-200 xl-pt-150 lg-pt-80 pb-180 xl-pb-150">
               <div className="row gx-lg-0">
                  <div className="col-lg-5 col-md-8">
                     <div className="title-one">
                        <div className="upper-title color">CLIENT Feedback</div>
                        <h2 className="font-garamond text-white fs-lg">Don’t Trust us, Trust Our <span className="color">Client.</span></h2>
                     </div>
                  </div>
                  <div className="col-lg-6 ms-auto">
                     <div className="feedback-bg-wrapper md-mt-60 position-relative z-1">
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle">
                           <Image src={feedbackIcon} alt="" className="lazy-img" />
                        </div>
                        <Slider {...setting} className="feedback-slider-one">
                           {feedback_data.map((item) => (
                              <div key={item.id} className="item">
                                 <div className="feedback-block-three">
                                    <blockquote>{item.desc}</blockquote>
                                    <div className="d-flex justify-content-end align-items-center">
                                       <div className="text-end pe-3 pe-lg-5">
                                          <div className="name fs-22 text-white mb-5">{item.title}</div>
                                          <div className="fs-18 text-white opacity-75">{item.country}</div>
                                       </div>
                                       <Image src={item.thumb} alt="" className="avatar" />
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </Slider>

                        <div className="rating-box">
                           <Image src={feedbackShape_1} alt="" className="lazy-img" />
                           <div className="rate fw-500">9.3 <br /><span>Rating</span></div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <Image src={feedbackShape_2} alt="" className="lazy-img shapes shape_01" />
               <Image src={feedbackShape_3} alt="" className="lazy-img shapes shape_02" />
            </div>
         </div>
         <BrandOne />
      </div>
   )
}

export default FeedbackTwo
