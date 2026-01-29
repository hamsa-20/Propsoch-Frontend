import Image, { StaticImageData } from "next/image"

import icon_1 from "@/assets/images/dashboard/icon/icon_28.svg"

interface DataType {
   id: number;
   name: string;
   date: string;
   title: string;
   desc: string;
   icon?: StaticImageData;
   class_name?: string;
}

const message_data: DataType[] = [
   {
      id: 1,
      name: "Propscoch Support",
      date: "Aug 22",
      title: "Property details submitted successfully",
      desc: "Your property details have been received and are currently under review by our team.",
      icon: icon_1,
      class_name: "read border-0 pt-0"
   },
   {
      id: 2,
      name: "Ankit Sharma",
      date: "Aug 20",
      title: "Query regarding Sarjapur Road property",
      desc: "Hi, I had a few questions about the shortlisted apartment on Sarjapur Road. Can we connect?",
      class_name: "primary"
   },
   {
      id: 3,
      name: "Propscoch Research Team",
      date: "Aug 18",
      title: "New property insights available",
      desc: "We’ve added updated pricing and locality insights for properties in Bangalore and Mumbai.",
   },
]

const RecentMessage = () => {
   return (
      <div className="message-wrapper">
         <div className="message-sidebar border-0">
            <div className="email-read-panel">
               {message_data.map((item) => (
                  <div key={item.id} className={`email-list-item ${item.class_name}`}>
                     <div className="email-short-preview position-relative">
                        <div className="d-flex align-items-center justify-content-between">
                           <div className="sender-name">{item.name}</div>
                           <div className="date">{item.date}</div>
                        </div>
                        <div className="mail-sub">{item.title}</div>
                        <div className="mail-text">{item.desc}</div>
                        {item.icon && (
                           <div className="attached-file-preview d-flex align-items-center mt-15">
                              <div className="file d-flex align-items-center me-2">
                                 <Image src={item.icon} alt="" className="lazy-img me-2" />
                                 <span>details.pdf</span>
                              </div>
                           </div>
                        )}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default RecentMessage
