import { StaticImageData } from "next/image";

import featureIcon_1 from "@/assets/images/icon/icon_01.svg";
import featureIcon_2 from "@/assets/images/icon/icon_02.svg";
import featureIcon_3 from "@/assets/images/icon/icon_03.svg";

import feature3Icon_1 from "@/assets/images/icon/icon_07.svg";
import feature3Icon_2 from "@/assets/images/icon/icon_08.svg";
import feature3Icon_3 from "@/assets/images/icon/icon_09.svg";
import feature3Icon_4 from "@/assets/images/icon/icon_26.svg";
import feature3Icon_5 from "@/assets/images/icon/icon_27.svg";
import feature3Icon_6 from "@/assets/images/icon/icon_28.svg";

import feature4Icon_1 from "@/assets/images/icon/icon_11.svg";
import feature4Icon_2 from "@/assets/images/icon/icon_12.svg";
import feature4Icon_3 from "@/assets/images/icon/icon_13.svg";

import feature5Icon_1 from "@/assets/images/icon/icon_23.svg";
import feature5Icon_2 from "@/assets/images/icon/icon_24.svg";
import feature5Icon_3 from "@/assets/images/icon/icon_25.svg";

import feature6Icon_1 from "@/assets/images/icon/icon_35.svg";
import feature6Icon_2 from "@/assets/images/icon/icon_36.svg";
import feature6Icon_3 from "@/assets/images/icon/icon_37.svg";

import feature7Icon_1 from "@/assets/images/icon/icon_40.svg";
import feature7Icon_2 from "@/assets/images/icon/icon_41.svg";
import feature7Icon_3 from "@/assets/images/icon/icon_42.svg";

import featureImg_1 from "@/assets/images/media/img_19.jpg";
import featureImg_2 from "@/assets/images/media/img_20.jpg";
import featureImg_3 from "@/assets/images/media/img_21.jpg";

interface DataType {
   id: number;
   page: string;
   item_bg?: string;
   img?: StaticImageData;
   icon?: StaticImageData;
   title: string;
   desc?: string;
   tag?: string;
   data_delay_time?: string;
   btn?: string;
   class_name?:string;
}

const feature_data: DataType[] = [
  // home_1_feature_1
  {
    id: 1,
    page: "home_1_feature_1",
    icon: featureIcon_1,
    title: "Buy a Home",
    btn: "Find Homes",
    desc: "Get expert-guided help to shortlist, evaluate, and buy the right home with confidence.",
  },
  {
    id: 2,
    page: "home_1_feature_1",
    icon: featureIcon_2,
    title: "Rent a Home",
    btn: "Explore Rentals",
    desc: "Discover verified rental homes with detailed insights and zero brokerage bias.",
  },
  {
    id: 3,
    page: "home_1_feature_1",
    icon: featureIcon_3,
    title: "Sell Property",
    btn: "Sell Property",
    desc: "Price your property right and sell faster with expert market guidance.",
  },

  // home_1_feature_2 — Popular Cities
  {
    id: 1,
    page: "home_1_feature_2",
    item_bg: "card-1",
    title: "Bangalore",
    desc: "2,300+ Properties",
  },
  {
    id: 2,
    page: "home_1_feature_2",
    item_bg: "card-2",
    title: "Mumbai",
    desc: "1,900+ Properties",
  },
  {
    id: 3,
    page: "home_1_feature_2",
    item_bg: "card-3",
    title: "Hyderabad",
    desc: "1,450+ Properties",
  },
  {
    id: 4,
    page: "home_1_feature_2",
    item_bg: "card-4",
    title: "Pune",
    desc: "1,120+ Properties",
  },
  {
    id: 5,
    page: "home_1_feature_2",
    item_bg: "card-5",
    title: "Chennai",
    desc: "980+ Properties",
  },

  // home_1_feature_3 — How it works
  {
    id: 1,
    page: "home_1_feature_3",
    icon: feature3Icon_1,
    title: "Tell Us Your Needs",
    desc: "Share your budget, location preferences, and home requirements.",
  },
  {
    id: 2,
    page: "home_1_feature_3",
    class_name: "arrow position-relative",
    icon: feature3Icon_2,
    title: "Get Expert Guidance",
    desc: "Our experts shortlist and analyze the best options for you.",
  },
  {
    id: 3,
    page: "home_1_feature_3",
    icon: feature3Icon_3,
    title: "Buy with Confidence",
    desc: "From site visits to negotiations, we support you end-to-end.",
  },

  // home_two_feature_1 — Localities
  {
    id: 1,
    page: "home_2_feature_1",
    item_bg: "location-card-1",
    title: "Whitefield",
  },
  {
    id: 2,
    page: "home_2_feature_1",
    item_bg: "location-card-2",
    title: "Sarjapur Road",
    data_delay_time: "0.1s",
  },
  {
    id: 3,
    page: "home_2_feature_1",
    item_bg: "location-card-3",
    title: "Electronic City",
    data_delay_time: "0.2s",
  },
  {
    id: 4,
    page: "home_2_feature_1",
    item_bg: "location-card-4",
    title: "Hebbal",
  },
  {
    id: 5,
    page: "home_2_feature_1",
    item_bg: "location-card-5",
    title: "Yelahanka",
    data_delay_time: "0.1s",
  },
  {
    id: 6,
    page: "home_2_feature_1",
    item_bg: "location-card-6",
    title: "Hennur Road",
    data_delay_time: "0.2s",
  },

  // home_two_feature_2 — Actions
  {
    id: 1,
    page: "home_two_feature_2",
    img: featureImg_1,
    title: "Explore & Buy Homes",
    tag: "BUY",
    data_delay_time: "0.2s",
  },
  {
    id: 2,
    page: "home_two_feature_2",
    img: featureImg_2,
    title: "Sell with Confidence",
    tag: "SELL",
    data_delay_time: "0.1s",
  },
  {
    id: 3,
    page: "home_two_feature_2",
    img: featureImg_3,
    title: "Find Rental Homes",
    tag: "RENT",
    data_delay_time: "0.2s",
  },

  // home_two_feature_3 — Trust features
  {
    id: 1,
    page: "home_two_feature_3",
    icon: feature4Icon_1,
    title: "Verified Properties",
    desc: "Every property is carefully evaluated before recommendation.",
  },
  {
    id: 2,
    page: "home_two_feature_3",
    icon: feature4Icon_2,
    title: "Transparent Pricing",
    desc: "No hidden commissions or biased recommendations.",
  },
  {
    id: 3,
    page: "home_two_feature_3",
    icon: feature4Icon_3,
    title: "Quick & Smooth Process",
    desc: "Save time with a structured, expert-led buying journey.",
  },
];

export default feature_data;
