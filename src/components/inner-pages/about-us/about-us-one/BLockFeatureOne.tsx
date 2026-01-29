import Image from "next/image"
import Link from "next/link"

import titleShape from "@/assets/images/shape/title_shape_06.svg";
import Count from "@/components/common/Count";

interface ContentType {
   sub_title: string;
   desc_1: JSX.Element;
   title_1: string;
   title_2: string;
   desc_2: JSX.Element;
   desc_3: JSX.Element;
}

const feature_content: ContentType = {
  sub_title: "About Us",

  desc_1: (
    <>
      Propscoch is a modern real estate platform helping families discover
      verified homes across Mumbai and Bangalore with complete transparency.
    </>
  ),

  title_1: "Who we are?",
  title_2: "Our Mission",

  desc_2: (
    <>
      We are a customer-first real estate company focused on simplifying the
      property journey. From curated listings to expert guidance, Propscoch
      ensures every buyer and renter makes confident decisions in India’s
      fastest-growing cities.
    </>
  ),

  desc_3: (
    <>
      Our mission is to make property discovery honest, efficient, and
      stress-free by combining technology, local expertise, and trust-driven
      processes tailored for Mumbai and Bangalore markets.
    </>
  ),
};

const { sub_title, desc_1, title_1, title_2, desc_2, desc_3 } = feature_content;

const BLockFeatureOne = () => {
   return (
      <div className="block-feature-two mt-150 xl-mt-100">
         <div className="container">
            <div className="row gx-xl-5">
               <div className="col-lg-6 wow fadeInLeft">
                  <div className="me-xxl-4">
                     <div className="title-one mb-60 lg-mb-40">
                        <div className="upper-title">{sub_title}</div>
                        <h3>Secure your <span>family&apos;s<Image src={titleShape} alt="" className="lazy-img" /></span> Dream home.</h3>
                        <p className="fs-22">{desc_1}</p>
                     </div>
                     <Link href="/contact" className="btn-two">Contact Us</Link>
                     <div className="counter-wrapper border-top pt-40 md-pt-10 mt-65 md-mt-40">
                        <div className="row">
                           <div className="col-xxl-6 col-sm-5">
                              <div className="counter-block-one mt-20">
                                 <div className="main-count fw-500 color-dark"><span className="counter"><Count number={1.2} /></span>%</div>
                                 <span>Low interest rate</span>
                              </div>
                           </div>
                           <div className="col-xxl-6 col-sm-7">
                              <div className="counter-block-one mt-20">
                                 <div className="main-count fw-500 color-dark">₹<span className="counter"><Count number={1.3} /></span>b+</div>
                                 <span>Cumulative trading volume</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="col-lg-6 wow fadeInRight">
                  <div className="block-two md-mt-40">
                     <div className="bg-wrapper">
                        <h5>{title_1}</h5>
                        <p className="fs-22 lh-lg mt-20">{desc_2}</p>
                        <h5 className="top-line">{title_2} </h5>
                        <p className="fs-22 lh-lg mt-20">{desc_3}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureOne
