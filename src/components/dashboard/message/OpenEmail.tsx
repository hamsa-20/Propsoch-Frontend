import Image from "next/image"
import Link from "next/link"

import logo_1 from "@/assets/images/dashboard/logo_02.png"
import icon_1 from "@/assets/images/dashboard/icon/icon_29.svg"
import icon_2 from "@/assets/images/dashboard/icon/icon_30.svg"
import icon_3 from "@/assets/images/dashboard/icon/icon_31.svg"
import icon_4 from "@/assets/images/dashboard/icon/icon_32.svg"
import icon_5 from "@/assets/images/dashboard/icon/icon_33.svg"
import icon_6 from "@/assets/images/dashboard/icon/icon_34.svg"
import icon_7 from "@/assets/images/dashboard/icon/icon_35.svg"

const OpenEmail = () => {
   return (
      <div className="col-lg-8">
         <div className="open-email-container pb-40">
            <div className="email-header divider d-flex justify-content-between ps-4 pe-4 ps-xxl-5 pe-xxl-5">
               <div className="sender-info d-flex align-items-center">
                  <Image src={logo_1} alt="" className="lazy-img logo" />
                  <div className="ps-3">
                     <div className="sender-name">Propscoch Support</div>
                     <div className="sender-email">support@propscoch.com</div>
                  </div>
               </div>

               <div className="email-info">
                  <div className="time">10:30 AM (Today)</div>
                  <div className="d-flex align-items-center justify-content-end">
                     <button className="delete-email">
                        <Image src={icon_1} alt="" className="lazy-img" />
                     </button>
                     <button className="reply-email ms-3 me-3">
                        <Image src={icon_2} alt="" className="lazy-img" />
                     </button>
                     <div className="action-dots float-end">
                        <button
                           className="action-btn dropdown-toggle"
                           type="button"
                           data-bs-toggle="dropdown"
                           aria-expanded="false"
                        >
                           <span></span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                           <li><Link className="dropdown-item" href="#">Reply</Link></li>
                           <li><Link className="dropdown-item" href="#">Forward</Link></li>
                           <li><Link className="dropdown-item" href="#">Block</Link></li>
                           <li><Link className="dropdown-item" href="#">Delete</Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>

            <div className="email-body divider">
               <div className="ps-4 pe-4 ps-xxl-5 pe-xxl-5">
                  <h2>Property Verification Update</h2>

                  <p>
                     Hello,
                  </p>

                  <p>
                     Thank you for submitting your property details on Propscoch.
                     Our team has completed the initial review and shared the
                     verification documents for your reference.
                  </p>

                  <p>
                     Next steps in the process:
                  </p>

                  <ul className="style-none mb-30">
                     <li>- Review the attached property documents</li>
                     <li>- Share any clarifications or questions</li>
                  </ul>

                  <p>
                     If you need any assistance or would like to schedule a
                     discussion with our advisor, feel free to reply to this
                     message.
                  </p>

                  <p>
                     Regards,<br />
                     Propscoch Team
                  </p>
               </div>
            </div>

            <div className="email-footer">
               <div className="ps-4 pe-4 ps-xxl-5 pe-xxl-5">
                  <div className="attachments mb-30">
                     <div className="d-flex justify-content-between mb-5">
                        <h6 className="m0">2 Attachments</h6>
                        <Link href="#" className="all-download">Download All</Link>
                     </div>
                     <div className="d-flex">
                        <Link href="#" className="file tran3s d-flex align-items-center mt-10" download>
                           <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                              <Image src={icon_3} alt="" className="lazy-img" />
                           </div>
                           <div className="ps-2">
                              <div className="file-name">property-documents.pdf</div>
                              <div className="file-size">2.3 MB</div>
                           </div>
                        </Link>

                        <Link href="#" className="file tran3s d-flex align-items-center mt-10" download>
                           <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                              <Image src={icon_3} alt="" className="lazy-img" />
                           </div>
                           <div className="ps-2">
                              <div className="file-name">verification-notes.pdf</div>
                              <div className="file-size">1.3 MB</div>
                           </div>
                        </Link>
                     </div>
                  </div>

                  <div className="compose-new-email-container">
                     <div className="new-email-header position-relative">
                        <div className="btn-group">
                           <Link data-bs-toggle="collapse" href="#CC-input" role="button">Cc</Link>
                           <Link data-bs-toggle="collapse" href="#BCC-input" role="button">Bcc</Link>
                        </div>

                        <div className="input-group d-flex align-items-center">
                           <div className="text-center" style={{ width: "60px" }}>To</div>
                           <input type="email" className="flex-fill" placeholder="support@propscoch.com" />
                        </div>

                        <div className="collapse" id="CC-input">
                           <div className="input-group d-flex align-items-center">
                              <div className="text-center" style={{ width: "60px" }}>Cc</div>
                              <input type="email" className="flex-fill" placeholder="advisor@propscoch.com" />
                           </div>
                        </div>

                        <div className="collapse" id="BCC-input">
                           <div className="input-group d-flex align-items-center">
                              <div className="text-center" style={{ width: "60px" }}>Bcc</div>
                              <input type="email" className="flex-fill" placeholder="records@propscoch.com" />
                           </div>
                        </div>
                     </div>

                     <div className="compose-body">
                        <textarea defaultValue="Hi Team, I have reviewed the documents and have a few questions." />
                     </div>

                     <div className="compose-email-footer d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                           <div className="insert-file position-relative me-3">
                              <Image src={icon_4} alt="" className="lazy-img" />
                              <input type="file" name="uploadImg" title="Attach File" />
                           </div>
                           <button className="insert-emoji me-3">
                              <Image src={icon_5} alt="" className="lazy-img" />
                           </button>
                           <div className="insert-file position-relative me-3">
                              <Image src={icon_6} alt="" className="lazy-img" />
                              <input type="file" name="uploadImg" title="Insert Image" />
                           </div>
                        </div>

                        <div className="d-flex align-items-center">
                           <Link href="#" className="delete-mail me-3">
                              <Image src={icon_7} alt="" className="lazy-img" />
                           </Link>
                           <Link href="#" className="reply-btn tran3s">Reply</Link>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>
   )
}

export default OpenEmail
