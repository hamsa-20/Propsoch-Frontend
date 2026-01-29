import Image, { StaticImageData } from "next/image"
import Fancybox from "@/components/common/Fancybox"
import Link from "next/link"

import offcanvasLogo from "@/assets/images/logo/logo_02.png"

import offcanvasThumb_1 from "@/assets/images/listing/img_69.jpg"
import offcanvasThumb_2 from "@/assets/images/listing/img_70.jpg"
import offcanvasThumb_3 from "@/assets/images/listing/img_71.jpg"
import offcanvasThumb_4 from "@/assets/images/listing/img_72.jpg"

interface DataType {
   id: number;
   tag: string;
   thumb: StaticImageData;
   carousel_thumb: string[];
   price: number;
   sub?: JSX.Element;
   address: string;
}[];

const offcanvas_data: DataType[] = [
   {
      id: 1,
      tag: "FOR RENT",
      thumb: offcanvasThumb_1,
      carousel_thumb: ["1", "2", "3"],
      price: 42000,
      sub: (<>/ <sub>month</sub></>),
      address: "Whitefield, Bangalore, Karnataka",
   },
   {
      id: 2,
      tag: "FOR RENT",
      thumb: offcanvasThumb_2,
      carousel_thumb: ["1", "2", "3"],
      price: 38000,
      sub: (<>/ <sub>month</sub></>),
      address: "Sarjapur Road, Bangalore, Karnataka",
   },
   {
      id: 3,
      tag: "FOR SALE",
      thumb: offcanvasThumb_3,
      carousel_thumb: ["1", "2", "3"],
      price: 12500000,
      address: "Andheri East, Mumbai, Maharashtra",
   },
   {
      id: 4,
      tag: "FOR SALE",
      thumb: offcanvasThumb_4,
      carousel_thumb: ["1", "2", "3"],
      price: 9800000,
      sub: (<> onwards</>),
      address: "Thane West, Mumbai, Maharashtra",
   },
]

const Offcanvas = ({ offCanvas, setOffCanvas }: any) => {
   return (
      <>
         <div className={`offcanvas offcanvas-end sidebar-nav ${offCanvas ? "show" : ""}`} id="sideNav">
            <div className="offcanvas-header">
               <div className="logo order-lg-0">
                  <Link href="/" className="d-flex align-items-center">
                     <Image src={offcanvasLogo} alt="" />
                  </Link>
               </div>
               <button
                  onClick={() => setOffCanvas(false)}
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
               ></button>
            </div>

            <div className="wrapper mt-60">
               <div className="d-flex flex-column h-100">
                  <div className="property-block">
                     <h4 className="title pb-25">Featured Listings</h4>
                     <div className="row">
                        {offcanvas_data.map((item) => (
                           <div key={item.id} className="col-12">
                              <div className="listing-card-one shadow-none style-two mb-40">
                                 <div className="img-gallery">
                                    <div className="position-relative overflow-hidden">
                                       <div className="tag bg-white text-dark fw-500">{item.tag}</div>
                                       <Image src={item.thumb} className="w-100" alt="..." />

                                       <div className="img-slider-btn">
                                          03 <i className="fa-regular fa-image"></i>
                                          <Fancybox
                                             options={{
                                                Carousel: {
                                                   infinite: true,
                                                },
                                             }}
                                          >
                                             {item.carousel_thumb.map((thumb: any, index: any) => (
                                                <a
                                                   key={index}
                                                   className="d-block"
                                                   data-fancybox="gallery2"
                                                   href={`/assets/images/listing/img_large_0${thumb}.jpg`}
                                                ></a>
                                             ))}
                                          </Fancybox>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="property-info d-flex justify-content-between align-items-end pt-30">
                                    <div>
                                       <strong className="price fw-500 color-dark fs-3">
                                          ₹{item.price.toLocaleString("en-IN")}{item.sub}
                                       </strong>
                                       <div className="address pt-5 m0">{item.address}</div>
                                    </div>
                                    <Link href="#" className="btn-four mb-5">
                                       <i className="bi bi-arrow-up-right"></i>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="address-block mt-50">
                     <h4 className="title pb-15">Our Offices</h4>
                     <p>
                        Bangalore & Mumbai <br />
                        India
                     </p>
                     <p>
                        Need assistance? Call us at <br />
                        <Link href="tel:+919876543210">+91 98765 43210</Link>
                     </p>
                  </div>

                  <ul className="style-none d-flex flex-wrap w-100 justify-content-between align-items-center social-icon pt-25 mt-auto">
                     <li><Link href="#"><i className="fa-brands fa-whatsapp"></i></Link></li>
                     <li><Link href="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                     <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                     <li><Link href="#"><i className="fa-brands fa-viber"></i></Link></li>
                  </ul>
               </div>
            </div>
         </div>

         <div
            onClick={() => setOffCanvas(false)}
            className={`offcanvas-backdrop fade ${offCanvas ? "show" : ""}`}
         ></div>
      </>
   )
}

export default Offcanvas
