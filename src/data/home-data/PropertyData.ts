import { StaticImageData } from "next/image";

import propertyThumb_1 from "@/assets/images/listing/img_01.jpg";
import propertyThumb_2 from "@/assets/images/listing/img_02.jpg";
import propertyThumb_3 from "@/assets/images/listing/img_03.jpg";
import propertyThumb_4 from "@/assets/images/listing/img_04.jpg";
import propertyThumb_5 from "@/assets/images/listing/img_05.jpg";
import propertyThumb_6 from "@/assets/images/listing/img_06.jpg";

import property2Thumb_1 from "@/assets/images/listing/img_07.jpg";
import property2Thumb_2 from "@/assets/images/listing/img_08.jpg";
import property2Thumb_3 from "@/assets/images/listing/img_09.jpg";

import property3Thumb_1 from "@/assets/images/listing/img_13.jpg";
import property3Thumb_2 from "@/assets/images/listing/img_14.jpg";
import property3Thumb_3 from "@/assets/images/listing/img_15.jpg";
import property3Thumb_4 from "@/assets/images/listing/img_16.jpg";

import propertyLargThumb_1 from "@/assets/images/listing/img_large_01.jpg";
import propertyLargThumb_2 from "@/assets/images/listing/img_large_02.jpg";
import propertyLargThumb_3 from "@/assets/images/listing/img_large_03.jpg";
import propertyLargThumb_4 from "@/assets/images/listing/img_large_04.jpg";
import propertyLargThumb_5 from "@/assets/images/listing/img_large_05.jpg";
import propertyLargThumb_6 from "@/assets/images/listing/img_large_06.jpg";

import propertyIcon_1 from "@/assets/images/icon/icon_04.svg";
import propertyIcon_2 from "@/assets/images/icon/icon_05.svg";
import propertyIcon_3 from "@/assets/images/icon/icon_06.svg";

interface DataType {
   id: number;
   page: string;
   tag: string;
   tag_bg?: string;
   thumb?:StaticImageData
   carousel_thumb: {
      id?:string;
      img: StaticImageData;
      active?: string;
   }[];
   title: string;
   address: string;
   property_info: {
      icon: StaticImageData;
      feature: string;
      total_feature: number;
   }[];
   data_delay_time?: string;
   price: number;
   price_text?: string;
   carousel?: string;
}[];

const property_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    tag: "FOR RENT",
    carousel_thumb: [{ img: propertyThumb_1, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_3 }],
    title: "3 BHK Apartment in Whitefield",
    address: "Whitefield, Bengaluru",
    property_info: [
      { icon: propertyIcon_1, feature: "sqft", total_feature: 1370 },
      { icon: propertyIcon_2, feature: "bed", total_feature: 3 },
      { icon: propertyIcon_3, feature: "bath", total_feature: 2 },
    ],
    price: 45000,
    price_text: "₹/mo",
    carousel: "1",
  },
  {
    id: 2,
    page: "home_1",
    tag: "FOR SELL",
    tag_bg: "sale",
    carousel_thumb: [{ img: propertyThumb_2, active: "active" }, { img: propertyThumb_3 }, { img: propertyThumb_1 }],
    title: "Luxury Villa in Sarjapur",
    address: "Sarjapur Road, Bengaluru",
    property_info: [
      { icon: propertyIcon_1, feature: "sqft", total_feature: 2400 },
      { icon: propertyIcon_2, feature: "bed", total_feature: 4 },
      { icon: propertyIcon_3, feature: "bath", total_feature: 3 },
    ],
    data_delay_time: "0.1s",
    price: 18500000,
    price_text: "₹",
    carousel: "2",
  },
  {
    id: 3,
    page: "home_1",
    tag: "FOR SELL",
    tag_bg: "sale",
    carousel_thumb: [{ img: propertyThumb_3, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_1 }],
    title: "Premium Apartment in HSR Layout",
    address: "HSR Layout, Bengaluru",
    property_info: [
      { icon: propertyIcon_1, feature: "sqft", total_feature: 1650 },
      { icon: propertyIcon_2, feature: "bed", total_feature: 3 },
      { icon: propertyIcon_3, feature: "bath", total_feature: 2 },
    ],
    data_delay_time: "0.2s",
    price: 13200000,
    price_text: "₹",
    carousel: "3",
  },
  {
    id: 4,
    page: "home_1",
    tag: "FOR RENT",
    carousel_thumb: [{ img: propertyThumb_4, active: "active" }, { img: propertyThumb_5 }, { img: propertyThumb_6 }],
    title: "2 BHK Flat near Manyata Tech Park",
    address: "Hebbal, Bengaluru",
    property_info: [
      { icon: propertyIcon_1, feature: "sqft", total_feature: 1200 },
      { icon: propertyIcon_2, feature: "bed", total_feature: 2 },
      { icon: propertyIcon_3, feature: "bath", total_feature: 2 },
    ],
    price: 38000,
    price_text: "₹/mo",
    carousel: "4",
  },
  {
    id: 5,
    page: "home_1",
    tag: "FOR SELL",
    tag_bg: "sale",
    carousel_thumb: [{ img: propertyThumb_5, active: "active" }, { img: propertyThumb_4 }, { img: propertyThumb_6 }],
    title: "Independent House in Yelahanka",
    address: "Yelahanka, Bengaluru",
    property_info: [
      { icon: propertyIcon_1, feature: "sqft", total_feature: 2600 },
      { icon: propertyIcon_2, feature: "bed", total_feature: 4 },
      { icon: propertyIcon_3, feature: "bath", total_feature: 4 },
    ],
    data_delay_time: "0.1s",
    price: 21000000,
    price_text: "₹",
    carousel: "5",
  },
  {
    id: 6,
    page: "home_1",
    tag: "FOR RENT",
    carousel_thumb: [{ img: propertyThumb_6, active: "active" }, { img: propertyThumb_5 }, { img: propertyThumb_4 }],
    title: "Studio Apartment in Indiranagar",
    address: "Indiranagar, Bengaluru",
    property_info: [
      { icon: propertyIcon_1, feature: "sqft", total_feature: 750 },
      { icon: propertyIcon_2, feature: "bed", total_feature: 1 },
      { icon: propertyIcon_3, feature: "bath", total_feature: 1 },
    ],
    data_delay_time: "0.2s",
    price: 32000,
    price_text: "₹/mo",
    carousel: "6",
  },

  // home_2

  {
    id: 1,
    page: "home_2",
    tag: "FOR RENT",
    carousel_thumb: [{ img: property2Thumb_1, active: "active" }, { img: property2Thumb_2 }, { img: property2Thumb_3 }],
    title: "Furnished Apartment in Bellandur",
    address: "Bellandur, Bengaluru",
    property_info: [
      { icon: propertyIcon_1, feature: "sqft", total_feature: 1450 },
      { icon: propertyIcon_2, feature: "bed", total_feature: 3 },
      { icon: propertyIcon_3, feature: "bath", total_feature: 2 },
    ],
    price: 52000,
    price_text: "₹/mo",
    carousel: "1",
  },
  {
    id: 2,
    page: "home_2",
    tag: "FOR SELL",
    carousel_thumb: [{ img: property2Thumb_2, active: "active" }, { img: property2Thumb_1 }, { img: property2Thumb_2 }],
    title: "Gated Community Villa",
    address: "Devanahalli, Bengaluru",
    property_info: [
      { icon: propertyIcon_1, feature: "sqft", total_feature: 2800 },
      { icon: propertyIcon_2, feature: "bed", total_feature: 4 },
      { icon: propertyIcon_3, feature: "bath", total_feature: 4 },
    ],
    data_delay_time: "0.1s",
    price: 24000000,
    price_text: "₹",
    carousel: "2",
  },
  {
    id: 3,
    page: "home_2",
    tag: "FOR SELL",
    carousel_thumb: [{ img: property2Thumb_3, active: "active" }, { img: property2Thumb_2 }, { img: property2Thumb_1 }],
    title: "Ready to Move Flat in JP Nagar",
    address: "JP Nagar, Bengaluru",
    property_info: [
      { icon: propertyIcon_1, feature: "sqft", total_feature: 1550 },
      { icon: propertyIcon_2, feature: "bed", total_feature: 3 },
      { icon: propertyIcon_3, feature: "bath", total_feature: 2 },
    ],
    data_delay_time: "0.2s",
    price: 11800000,
    price_text: "₹",
    carousel: "3",
  },
];

export default property_data;
