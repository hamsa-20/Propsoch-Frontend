import { StaticImageData } from "next/image";

import serviceIcon_1 from "@/assets/images/icon/icon_69.svg";
import serviceIcon_2 from "@/assets/images/icon/icon_70.svg";
import serviceIcon_3 from "@/assets/images/icon/icon_71.svg";

interface DataType {
   id: number;
   page: string;
   icon: StaticImageData;
   title: string;
   desc: string;
   data_delay_time?: string;
   btn: string;
}[];

const service_data: DataType[] = [
   {
      id: 1,
      page: "service_1",
      icon: serviceIcon_1,
      title: "Guided Home Buying",
      btn: "Buy Home",
      desc: "Get end-to-end guidance to shortlist, evaluate, negotiate, and buy the right home with complete confidence.",
   },
   {
      id: 2,
      page: "service_1",
      icon: serviceIcon_2,
      title: "Property Shortlisting",
      btn: "Explore Homes",
      desc: "Curated property options based on budget, location, lifestyle needs, and long-term livability.",
      data_delay_time: "0.1s",
   },
   {
      id: 3,
      page: "service_1",
      icon: serviceIcon_3,
      title: "Price Negotiation",
      btn: "Negotiate Price",
      desc: "Data-backed negotiation support to help you secure the best possible price and offers.",
      data_delay_time: "0.2s",
   },
   {
      id: 4,
      page: "service_1",
      icon: serviceIcon_1,
      title: "Home Loan Assistance",
      btn: "Check Loans",
      desc: "Compare loan options, interest rates, and eligibility with trusted banking partners.",
   },
   {
      id: 5,
      page: "service_1",
      icon: serviceIcon_2,
      title: "Legal Due Diligence",
      btn: "Verify Property",
      desc: "Thorough legal checks including title verification, approvals, RERA status, and risk assessment.",
      data_delay_time: "0.1s",
   },
   {
      id: 6,
      page: "service_1",
      icon: serviceIcon_3,
      title: "Peace of Mind Reports",
      btn: "View Report",
      desc: "In-depth analysis covering construction quality, flood risk, ventilation, and future development.",
      data_delay_time: "0.2s",
   },
];

export default service_data;
