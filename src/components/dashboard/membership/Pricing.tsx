import Link from "next/link"

interface DataType {
   id: number;
   title: string;
   price: string;
   desc: string;
   list_details: {
      list: string;
      disable?: string;
   }[];
   class_name: string
   btn: string;
}

const pricing_data: DataType[] = [
   {
      id: 1,
      title: "BASIC",
      price: "₹0",
      desc: "for exploration",
      list_details: [
         { list: "Access to property insights & blogs" },
         { list: "Locality overview for Bangalore & Mumbai" },
         { list: "Legal verification support", disable: "disable" },
         { list: "Personalised guidance", disable: "disable" }
      ],
      btn: "Get Started",
      class_name: "border-0",
   },
   {
      id: 2,
      title: "GUIDED BUYING",
      price: "₹19,999",
      desc: "one-time fee",
      list_details: [
         { list: "Verified property shortlisting" },
         { list: "Legal & RERA document checks" },
         { list: "Price & locality analysis" },
         { list: "End-to-end buying guidance" }
      ],
      btn: "Current Plan",
      class_name: "active",
   },
   {
      id: 3,
      title: "PREMIUM",
      price: "₹29,999",
      desc: "one-time fee",
      list_details: [
         { list: "Everything in Guided Buying" },
         { list: "Dedicated property advisor" },
         { list: "Builder negotiations support" },
         { list: "Post-booking assistance" }
      ],
      btn: "Choose Plan",
      class_name: "border-0",
   },
]

const Pricing = () => {
   return (
      <div className="pricing-section-two">
         <div className="wrapper">
            <div className="row gx-xxl-5">
               {pricing_data.map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-6">
                     <div className={`pr-column-wrapper bg-white rounded-5 ${item.class_name} mt-30`}>
                        <div className="pr-header text-center mb-55">
                           <div className="plan fw-500 text-uppercase color-dark">{item.title}</div>
                           <strong className="price fw-500">{item.price}</strong>
                           <p className="fs-24">{item.desc}</p>
                        </div>
                        <ul className="style-none text-center">
                           {item.list_details.map((list, i) => (
                              <li key={i} className={list.disable}>{list.list}</li>
                           ))}
                        </ul>
                        <div className="pr-footer text-center mt-60">
                           <Link href="#" className="btn-twelve w-100 sm">
                              {item.btn}
                           </Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Pricing
