import Image from "next/image"
import Link from "next/link"

import commentImg_1 from "@/assets/images/blog/avatar_01.jpg"
import commentImg_2 from "@/assets/images/blog/avatar_02.jpg"
import commentImg_3 from "@/assets/images/blog/avatar_03.jpg"

const BlogComment = () => {
   return (
      <div className="blog-comment-area">
         <h3 className="blog-inner-title pb-35">2 Comments</h3>

         <div className="comment position-relative d-flex">
            <Image src={commentImg_1} alt="" className="lazy-img user-avatar rounded-circle" />
            <div className="comment-text">
               <div className="name fw-500">Ankit Sharma</div>
               <div className="date">18 Sep, 2023, 3:45pm</div>
               <p>
                  This article clearly explains the risks first-time buyers usually overlook.
                  The section on legal verification and builder credibility was especially helpful.
                  Would love to see more Bangalore-specific insights like this.
               </p>
               <Link href="#" className="reply-btn tran3s">Reply</Link>

               <div className="comment position-relative reply-comment d-flex">
                  <Image src={commentImg_2} alt="" className="lazy-img user-avatar rounded-circle" />
                  <div className="comment-text">
                     <div className="name fw-500">Propscoch Team</div>
                     <div className="date">19 Sep, 2023, 10:15am</div>
                     <p>
                        Thanks Ankit! Glad you found it useful. We’ll be publishing more
                        city-focused guides covering legal checks, pricing insights, and
                        future development potential very soon.
                     </p>
                     <Link href="#" className="reply-btn tran3s">Reply</Link>
                  </div>
               </div>
            </div>
         </div>

         <div className="comment position-relative d-flex">
            <Image src={commentImg_3} alt="" className="lazy-img user-avatar rounded-circle" />
            <div className="comment-text">
               <div className="name fw-500">Sneha Reddy</div>
               <div className="date">05 Sep, 2023, 6:20pm</div>
               <p>
                  Very practical breakdown of the home-buying process.
                  The emphasis on long-term livability and resale value
                  makes this much more trustworthy than typical property blogs.
               </p>
               <Link href="#" className="reply-btn tran3s">Reply</Link>
            </div>
         </div>
      </div>
   )
}

export default BlogComment
