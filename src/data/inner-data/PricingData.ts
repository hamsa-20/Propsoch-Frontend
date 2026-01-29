interface DataType {
   page: string;
   pricing_data: {
      id: number,
      class_name?: string;
      plan: string;
      price: string;
      desc: string;
      icon_details: {
         icon: string;
         icon_class?: string;
      }[];
      btn: string;
   }[];
}[];

const pricing_data: DataType[] = [
   {
      page: "pricing_1",
      pricing_data: [
         {
            id: 1,
            class_name: "active",
            plan: "Free Consultation",
            price: "₹0",
            desc: "Ideal for early-stage homebuyers exploring options",
            icon_details: [
               { icon: "fa-sharp fa-regular fa-xmark" },
               { icon: "fa-sharp fa-regular fa-xmark" },
               { icon: "fa-sharp fa-regular fa-xmark" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
            ],
            btn: "active"
         },
         {
            id: 1,
            plan: "Guided Home Buying",
            price: "₹1,49,999",
            desc: "Best for serious buyers planning to purchase in 30–60 days",
            icon_details: [
               { icon: "fa-sharp fa-regular fa-xmark" },
               { icon: "fa-sharp fa-regular fa-xmark" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
            ],
            btn: "Get Started"
         },
         {
            id: 1,
            plan: "End-to-End Advisory",
            price: "₹2,99,999",
            desc: "Complete support from discovery to final registration",
            icon_details: [
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
            ],
            btn: "Get Started"
         },
      ]
   },
   {
      page: "pricing_1",
      pricing_data: [
         {
            id: 1,
            class_name: "active",
            plan: "Property Health Check",
            price: "₹4,999",
            desc: "One-time detailed report for a shortlisted property",
            icon_details: [
               { icon: "fa-sharp fa-regular fa-xmark" },
               { icon: "fa-sharp fa-regular fa-xmark" },
               { icon: "fa-sharp fa-regular fa-xmark" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
            ],
            btn: "active"
         },
         {
            id: 1,
            plan: "Peace of Mind Report",
            price: "₹14,999",
            desc: "In-depth legal, flood, ventilation & risk analysis",
            icon_details: [
               { icon: "fa-sharp fa-regular fa-xmark" },
               { icon: "fa-sharp fa-regular fa-xmark" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
            ],
            btn: "Get Started"
         },
         {
            id: 1,
            plan: "Negotiation Assistance",
            price: "₹49,999",
            desc: "Expert-led price negotiation to secure the best deal",
            icon_details: [
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
               { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
            ],
            btn: "Get Started"
         },
      ]
   },
];

export default pricing_data;
