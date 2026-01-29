import Link from "next/link"
import Image from "next/image"

import circleImg from "@/assets/images/icon/icon_39.svg"

interface DataType {
   id: number;
   class_name?: string;
   title: string;
   address_1: string;
   address_2?: string;
}

const address_data: DataType[] = [
   {
      id: 1,
      title: "We’re always happy to help.",
      address_1: "support@propscoch.com"
   },
   {
      id: 2,
      class_name: "skew-line",
      title: "Our hotline numbers",
      address_1: "+91 98765 43210,",
      address_2: "+91 91234 56789",
   },
   {
      id: 3,
      title: "Live chat support",
      address_1: "www.propscoch.com/live-chat"
   },
]

const AddressBanner = ({ style }: any) => {
   return (
      <div className={`address-banner wow fadeInUp mt-120 lg-mt-80 ${style ? "mb-140" : ""}`}>
         <div className="container container-large">
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-between">
               {address_data.map((item) => (
                  <div key={item.id} className={`block position-relative ${item.class_name} z-1 mt-25`}>
                     <div className="d-xl-flex align-items-center">
                        <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                           <Image src={circleImg} alt="" className="lazy-img" />
                        </div>
                        <div className="text">
                           <p className="fs-22">{item.title}</p>
                           <Link href="#" className="tran3s">{item.address_1}</Link>
                           {item.address_2 && <>{" "} <Link href="#" className="tran3s">{item.address_2}</Link></>}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default AddressBanner
