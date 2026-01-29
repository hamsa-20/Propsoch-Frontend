import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Fancybox from "@/components/common/Fancybox";

import agencyDetailsImg_1 from "@/assets/images/media/img_01.jpg";
import agencyDetailsImg_2 from "@/assets/images/media/img_02.jpg";
import agencyDetailsImg_3 from "@/assets/images/media/img_03.jpg";

import agencyDetailsImg_4 from "@/assets/images/listing/img_48.jpg";
import agencyDetailsImg_5 from "@/assets/images/listing/img_49.jpg";
import agencyDetailsImg_6 from "@/assets/images/listing/img_50.jpg";

const largeThumb: string[] = ["4", "5", "6"];

interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
   date: string;
   total_rating: string;
   rating: string[];
   desc: JSX.Element;
   img_slider?: StaticImageData[]
}[]

const review_data: DataType[] = [
   {
      id: 1,
      img: agencyDetailsImg_1,
      title: "Ankit Sharma",
      date: "12 Feb, 2024",
      total_rating: "(4.7 Rating)",
      rating: ["star", "star", "star", "star", "star"],
      desc: (<>The entire buying process was smooth and transparent. The team guided us well through documentation and site visits.</>),
   },
   {
      id: 2,
      img: agencyDetailsImg_3,
      title: "Priya Nair",
      date: "28 Jan, 2024",
      total_rating: "(4.9 Rating)",
      rating: ["star", "star", "star", "star", "star"],
      img_slider: [agencyDetailsImg_4, agencyDetailsImg_5, agencyDetailsImg_6],
      desc: (<>Excellent support throughout the property shortlisting process. Location insights and pricing guidance were very helpful.</>),
   },
   {
      id: 3,
      img: agencyDetailsImg_2,
      title: "Rohit Mehta",
      date: "10 Jan, 2024",
      total_rating: "(4.6 Rating)",
      rating: ["star", "star", "star", "star", "star"],
      desc: (<>Great experience overall. The dashboard made it easy to track shortlisted properties and schedule visits.</>),
   },
   {
      id: 4,
      img: agencyDetailsImg_1,
      title: "Sneha Kulkarni",
      date: "05 Jan, 2024",
      total_rating: "(4.8 Rating)",
      rating: ["star", "star", "star", "star", "star"],
      desc: (<>Very professional service. Timely follow-ups and clear communication made the process stress-free.</>),
   },
]

const UserReview = () => {

   return (
      <>
         {review_data.map((item) => (
            <div key={item.id} className="review">
               <Image src={item.img} alt="" className="rounded-circle avatar" />
               <div className="text">
                  <div className="d-sm-flex justify-content-between">
                     <div>
                        <h6 className="name">{item.title}</h6>
                        <div className="time fs-16">{item.date}</div>
                     </div>
                     <ul className="rating style-none d-flex xs-mt-10">
                        <li><span className="fst-italic me-2">{item.total_rating}</span></li>
                        {item.rating.map((rating, i) => (
                           <li key={i}><i className={`fa-sharp fa-solid fa-${rating}`}></i></li>
                        ))}
                     </ul>
                  </div>

                  <p className="fs-20 mt-20 mb-30">{item.desc}</p>

                  {item.img_slider && (
                     <ul className="style-none d-flex flex-wrap review-gallery pb-30">
                        {item.img_slider.map((img, index) => (
                           <li key={index}>
                              <a className="d-block"><Image src={img} alt="" /></a>
                           </li>
                        ))}
                        <li>
                           <div className="position-relative more-img">
                              <Image src={agencyDetailsImg_6} alt="" />
                              <span>13+</span>
                              <Fancybox
                                 options={{
                                    Carousel: { infinite: true },
                                 }}
                              >
                                 {largeThumb.map((thumb, index) => (
                                    <a
                                       key={index}
                                       className="d-block"
                                       data-fancybox="img1"
                                       href={`/assets/images/listing/img_large_0${thumb}.jpg`}
                                    />
                                 ))}
                              </Fancybox>
                           </div>
                        </li>
                     </ul>
                  )}

                  <div className="d-flex review-help-btn">
                     <Link href="#" className="me-5">
                        <i className="fa-sharp fa-regular fa-thumbs-up"></i>
                        <span>Helpful</span>
                     </Link>
                     <Link href="#" className="me-5">
                        <i className="fa-sharp fa-regular fa-flag-swallowtail"></i>
                        <span>Flag</span>
                     </Link>
                     <Link href="#">
                        <i className="fa-sharp fa-regular fa-reply"></i>
                        <span>Reply</span>
                     </Link>
                  </div>
               </div>
            </div>
         ))}
      </>
   )
}

export default UserReview
