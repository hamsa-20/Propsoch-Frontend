import Image from "next/image";

import icon_1 from "@/assets/images/dashboard/icon/icon_28.svg";

interface DataType {
   id: number;
   name: string;
   date: string;
   title: string;
   desc: string;
   class_name?: string;
   attached_file_1?: boolean;
   attached_file_2?: boolean;
}[]

const email_read_data: DataType[] = [
   {
      id: 1,
      name: "Propscoch Support",
      date: "AUG 22",
      title: "Property details received",
      desc: "Your submitted property details have been received and are currently under review by our team.",
      class_name: "read",
      attached_file_1: true,
   },
   {
      id: 2,
      name: "Rohit Mehra",
      date: "MAY 22",
      title: "Query about Whitefield apartment",
      desc: "Hi, I wanted to understand the pricing and possession timeline for the shortlisted apartment in Whitefield.",
      class_name: "primary selected",
      attached_file_2: true,
   },
   {
      id: 3,
      name: "Propscoch Research Team",
      date: "JUN 22",
      title: "Updated property insights available",
      desc: "New pricing trends and locality insights have been added for Bangalore and Mumbai properties.",
   },
   {
      id: 4,
      name: "Ananya Kulkarni",
      date: "NOV 22",
      title: "Site visit confirmation",
      desc: "Your site visit has been scheduled. Please find the attached details for location and timings.",
      class_name: "read",
   },
   {
      id: 5,
      name: "Propscoch Legal Team",
      date: "NOV 22",
      title: "Legal documents shared",
      desc: "We have shared the initial legal documents for your shortlisted property. Please review them at your convenience.",
      class_name: "read",
   },
   {
      id: 6,
      name: "Suresh Patil",
      date: "NOV 22",
      title: "Follow-up on shortlisted properties",
      desc: "Hello, just following up to check if there are any updates on the shortlisted properties discussed earlier.",
      class_name: "read",
   },
]

const EmailReadPanel = () => {
   return (
      <div className="email-read-panel">
         {email_read_data.map((item) => (
            <div key={item.id} className={`email-list-item ps-3 pe-3 ps-xxl-4 pe-xxl-4 ${item.class_name}`}>
               <div className="email-short-preview position-relative">
                  <div className="d-flex align-items-center justify-content-between">
                     <div className="sender-name">{item.name}</div>
                     <div className="date">{item.date}</div>
                  </div>
                  <div className="mail-sub">{item.title}</div>
                  <div className="mail-text">{item.desc}</div>

                  {item.attached_file_1 && (
                     <div className="attached-file-preview d-flex align-items-center mt-15">
                        <div className="file d-flex align-items-center me-2">
                           <Image src={icon_1} alt="" className="lazy-img me-2" />
                           <span>details.pdf</span>
                        </div>
                     </div>
                  )}

                  {item.attached_file_2 && (
                     <div className="attached-file-preview d-flex align-items-center mt-15">
                        <div className="file d-flex align-items-center me-2">
                           <Image src={icon_1} alt="" className="lazy-img me-2" />
                           <span>details.pdf</span>
                        </div>
                        <div className="file d-flex align-items-center me-2">
                           <Image src={icon_1} alt="" className="lazy-img me-2" />
                           <span>documents.pdf</span>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         ))}
      </div>
   )
}

export default EmailReadPanel
