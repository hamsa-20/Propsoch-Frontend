import Image from "next/image"
import Link from "next/link"

import infoAvatar from "@/assets/images/agent/img_06.jpg"

const SidebarInfo = () => {
  return (
    <>
      <Image
        src={infoAvatar}
        alt="Property Advisor"
        className="lazy-img rounded-circle ms-auto me-auto mt-3 avatar"
      />

      <div className="text-center mt-25">
        <h6 className="name">Propsoch Property Advisor</h6>
        <p className="fs-16">Certified Home Buying Consultant</p>

        <ul className="style-none d-flex align-items-center justify-content-center social-icon">
          <li>
            <Link href="#"><i className="fa-brands fa-linkedin"></i></Link>
          </li>
          <li>
            <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
          </li>
        </ul>
      </div>

      <div className="divider-line mt-40 mb-45 pt-20">
        <ul className="style-none">
          <li>
            Location: <span>Bangalore & Mumbai</span>
          </li>
          <li>
            Email:{" "}
            <span>
              <Link href="mailto:support@propsoch.com">
                support@propsoch.com
              </Link>
            </span>
          </li>
          <li>
            Phone:{" "}
            <span>
              <Link href="tel:+919876543210">
                +91 98765 43210
              </Link>
            </span>
          </li>
        </ul>
      </div>

      <Link
        href="/contact"
        className="btn-nine text-uppercase rounded-3 w-100 mb-10"
      >
        BOOK FREE CONSULTATION
      </Link>
    </>
  )
}

export default SidebarInfo
