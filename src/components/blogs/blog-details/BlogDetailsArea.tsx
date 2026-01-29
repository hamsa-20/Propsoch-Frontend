"use client"
import Image from "next/image";
import Link from "next/link";
import BlogComment from "../common-blog/BlogComment";
import BlogForm from "@/components/forms/BlogForm";
import BlogSidebar from "../common-blog/BlogSidebar";

import blogDetailsIcon from "@/assets/images/icon/icon_67.svg";
import blogDetailsThumb_1 from "@/assets/images/blog/blog_img_16.jpg";

interface ContentType {
   title_1: string;
   title_2: string;
   desc_1: JSX.Element;
   desc_2: JSX.Element;
   desc_3: JSX.Element;
   desc_4: JSX.Element;
   desc_5: JSX.Element;
   desc_6: JSX.Element;
   blog_details_list: string[];
   icon: string[];
}

const content_data: ContentType = {
   title_1: "What First-Time Home Buyers in Bangalore Must Know Before Booking a Property",
   title_2: "A Simple, Guided Process to Buy the Right Apartment",
   desc_1: (
      <>
         Buying a home in Bangalore can be overwhelming, especially for first-time buyers.
         With hundreds of projects and constant sales pressure, it becomes difficult to
         separate genuine value from marketing claims. Understanding the fundamentals
         before booking is essential.
      </>
   ),
   desc_2: (
      <>
         While price and location are important, buyers must also evaluate legal approvals,
         builder reputation, and future infrastructure development. Ignoring these aspects
         often leads to delays, disputes, or poor resale potential.
      </>
   ),
   desc_3: (
      <>
         A well-informed decision is built on research, not urgency — clarity today ensures
         peace of mind for years to come.
      </>
   ),
   desc_4: (
      <>
         Propscoch follows a structured, data-backed approach to home buying. Instead of
         focusing on discounts or limited-time offers, the emphasis is on suitability,
         long-term livability, and risk assessment.
      </>
   ),
   desc_5: (
      <>
         From verifying RERA registrations to analysing price trends across Bangalore
         micro-markets, each step helps buyers make confident and unbiased decisions.
         This process reduces dependency on broker-led narratives.
      </>
   ),
   desc_6: (
      <>
         Bangalore’s real estate market varies significantly across regions. A guided and
         research-driven approach helps buyers choose homes that align with both lifestyle
         needs and future value appreciation.
      </>
   ),
   blog_details_list: [
      "Define your budget and preferred Bangalore localities",
      "Verify legal approvals and builder track record",
      "Assess long-term livability and resale potential"
   ],
   icon: [
      "fa-brands fa-whatsapp",
      "fa-brands fa-x-twitter",
      "fa-brands fa-instagram",
      "fa-brands fa-viber"
   ]
}

const { title_1, title_2, desc_1, desc_2, desc_3, desc_4, desc_5, desc_6, blog_details_list, icon } = content_data;

const BlogDetailsArea = () => {
   return (
      <div className="blog-details border-top mt-130 xl-mt-100 pt-100 xl-pt-80 mb-150 xl-mb-100">
         <div className="container">
            <div className="row gx-xl-5">
               <div className="col-lg-8">
                  <div className="blog-post-meta mb-60 lg-mb-40">
                     <div className="post-info">
                        <Link href="/blog_02">Propscoch Research Team</Link> · 6 min read
                     </div>
                     <h3 className="blog-title">{title_1}</h3>
                  </div>
               </div>
            </div>

            <div className="row gx-xl-5">
               <div className="col-lg-8">
                  <article className="blog-post-meta">
                     <figure
                        className="post-img position-relative m0"
                        style={{ backgroundImage: `url(/assets/images/blog/blog_img_11.jpg)` }}
                     >
                        <div className="fw-500 date d-inline-block">17 SEP</div>
                     </figure>

                     <div className="post-data pt-50 md-pt-30">
                        <p>{desc_1}</p>
                        <p>{desc_2}</p>

                        <div className="quote-wrapper">
                           <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
                              <Image src={blogDetailsIcon} alt="" className="lazy-img" />
                           </div>
                           <div className="row">
                              <div className="col-xxl-10 col-xl-11 col-lg-12 col-md-9 m-auto">
                                 <h4>{desc_3}</h4>
                              </div>
                           </div>
                           <h6>Propscoch Insights Team <span>Bangalore</span></h6>
                        </div>

                        <h5>{title_2}</h5>
                        <p>{desc_4}</p>

                        <ul className="style-none list-item">
                           {blog_details_list.map((list, i) => (
                              <li key={i}>{list}</li>
                           ))}
                        </ul>

                        <p>{desc_5}</p>

                        <div className="img-meta">
                           <Image src={blogDetailsThumb_1} alt="" className="lazy-img w-100" />
                        </div>
                        <div className="img-caption">
                           Buy verified properties with expert guidance — no brokerage pressure
                        </div>

                        <p>{desc_6}</p>
                     </div>

                     <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                        <ul className="d-flex align-items-center tags style-none pt-20">
                           <li>Tag:</li>
                           <li><Link href="#">Bangalore Real Estate,</Link></li>
                           <li><Link href="#">Home Buying,</Link></li>
                           <li><Link href="#">Legal Verification</Link></li>
                        </ul>

                        <ul className="d-flex share-icon align-items-center style-none pt-20">
                           <li>Share:</li>
                           {icon.map((icon, index) => (
                              <li key={index}>
                                 <Link href="#"><i className={icon}></i></Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </article>

                  <BlogComment />
                  <BlogForm />
               </div>

               <BlogSidebar style={true} />
            </div>
         </div>
      </div>
   )
}

export default BlogDetailsArea
