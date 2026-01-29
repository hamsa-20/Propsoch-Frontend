import { StaticImageData } from "next/image";

import feedbackThumb_1 from "@/assets/images/media/img_01.jpg";
import feedbackThumb_2 from "@/assets/images/media/img_02.jpg";
import feedbackThumb_3 from "@/assets/images/media/img_03.jpg";

import feedback3Thumb_1 from "@/assets/images/media/img_01.jpg";
import feedback3Thumb_2 from "@/assets/images/media/img_02.jpg";
import feedback3Thumb_3 from "@/assets/images/media/img_03.jpg";

import quoteIcon from "@/assets/images/icon/icon_29.svg";

interface DataType {
   id: number;
   page: string;
   desc: string;
   title: string;
   country: string;
   thumb: StaticImageData;
   quote_icon: StaticImageData;
}

const feedback_data: DataType[] = [
  {
    id: 1,
    page: "home_3",
    desc: "Very professional and transparent process. They helped us find the perfect apartment within our budget.",
    title: "Rashed Kabir",
    country: "Bangalore, India",
    thumb: feedback3Thumb_1,
    quote_icon: quoteIcon,
  },
  {
    id: 2,
    page: "home_3",
    desc: "Excellent service and quick responses. The entire buying experience was smooth and stress-free.",
    title: "Jannatul Ferdous",
    country: "Mumbai, India",
    thumb: feedback3Thumb_2,
    quote_icon: quoteIcon,
  },
  {
    id: 3,
    page: "home_3",
    desc: "Highly reliable team. They guided us at every step and ensured all documentation was handled properly.",
    title: "Jubayer Hasan",
    country: "Bangalore, India",
    thumb: feedback3Thumb_3,
    quote_icon: quoteIcon,
  },
  {
    id: 4,
    page: "home_3",
    desc: "Great experience overall. From site visits to final agreement, everything was well managed.",
    title: "Ananya Sharma",
    country: "Mumbai, India",
    thumb: feedback3Thumb_2,
    quote_icon: quoteIcon,
  },

  // home_5

  {
    id: 1,
    page: "home_5",
    desc: "A complete game changer for property search. Clean listings, verified properties, and quick support.",
    title: "Rashed Kabir",
    country: "Bangalore, India",
    thumb: feedbackThumb_1,
    quote_icon: quoteIcon,
  },
  {
    id: 2,
    page: "home_5",
    desc: "Found our dream home without any hassle. The platform is simple, fast, and trustworthy.",
    title: "Jannatul Ferdous",
    country: "Mumbai, India",
    thumb: feedbackThumb_2,
    quote_icon: quoteIcon,
  },
  {
    id: 3,
    page: "home_5",
    desc: "Smooth experience from start to finish. Highly recommended for anyone buying or renting a home.",
    title: "Jubayer Hasan",
    country: "Bangalore, India",
    thumb: feedbackThumb_3,
    quote_icon: quoteIcon,
  },
];

export default feedback_data;
