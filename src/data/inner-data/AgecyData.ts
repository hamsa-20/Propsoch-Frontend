import { StaticImageData } from "next/image";

import agencyThumb_1 from "@/assets/images/logo/p_logo_13.png";
import agencyThumb_2 from "@/assets/images/logo/p_logo_14.png";
import agencyThumb_3 from "@/assets/images/logo/p_logo_15.png";
import agencyThumb_4 from "@/assets/images/logo/p_logo_16.png";
import agencyThumb_5 from "@/assets/images/logo/p_logo_17.png";
import agencyThumb_6 from "@/assets/images/logo/p_logo_18.png";
import agencyThumb_7 from "@/assets/images/logo/p_logo_19.png";
import agencyThumb_8 from "@/assets/images/logo/p_logo_20.png";
import agencyThumb_9 from "@/assets/images/logo/p_logo_21.png";

interface DataType {
  id: number;
  data_delay_time?: string;
  tag: string;
  category?: string;
  thumb: StaticImageData;
  title: string;
  rating: number;
  desc: string;
  price: number;
}[];

const agency_data: DataType[] = [
  {
    id: 1,
    tag: "27 Listing",
    thumb: agencyThumb_1,
    title: "Prestige Group",
    rating: 5,
    desc: "Whitefield, Bengaluru, Karnataka 560066",
    price: 100,
  },
  {
    id: 2,
    data_delay_time: "0.1s",
    tag: "31 Listing",
    thumb: agencyThumb_2,
    title: "Godrej Properties",
    rating: 4,
    desc: "Sarjapur Road, Bengaluru, Karnataka 560035",
    price: 50,
  },
  {
    id: 3,
    data_delay_time: "0.2s",
    tag: "22 Listing",
    thumb: agencyThumb_3,
    title: "Brigade Group",
    rating: 5,
    desc: "Yelahanka, Bengaluru, Karnataka 560064",
    price: 100,
  },
  {
    id: 4,
    tag: "12 Listing",
    thumb: agencyThumb_4,
    title: "Sobha Developers",
    rating: 4,
    category: "Popular",
    desc: "HSR Layout, Bengaluru, Karnataka 560102",
    price: 50,
  },
  {
    id: 5,
    data_delay_time: "0.1s",
    tag: "36 Listing",
    thumb: agencyThumb_5,
    title: "Assetz Property Group",
    rating: 3,
    desc: "Bellandur, Bengaluru, Karnataka 560103",
    price: 30,
  },
  {
    id: 6,
    data_delay_time: "0.2s",
    tag: "16 Listing",
    thumb: agencyThumb_6,
    title: "Puravankara",
    rating: 5,
    desc: "Kanakapura Road, Bengaluru, Karnataka 560062",
    price: 150,
  },
  {
    id: 7,
    tag: "26 Listing",
    thumb: agencyThumb_7,
    title: "Embassy Group",
    rating: 3,
    desc: "Hebbal, Bengaluru, Karnataka 560024",
    price: 30,
  },
  {
    id: 8,
    data_delay_time: "0.1s",
    tag: "19 Listing",
    thumb: agencyThumb_8,
    title: "Prestige Group",
    rating: 5,
    category: "Popular",
    desc: "Electronic City, Bengaluru, Karnataka 560100",
    price: 150,
  },
  {
    id: 9,
    data_delay_time: "0.2s",
    tag: "27 Listing",
    thumb: agencyThumb_9,
    title: "Lodha Group",
    rating: 5,
    desc: "Thanisandra, Bengaluru, Karnataka 560077",
    price: 150,
  },
  {
    id: 10,
    tag: "26 Listing",
    thumb: agencyThumb_7,
    title: "Embassy Group",
    rating: 3,
    desc: "Devanahalli, Bengaluru, Karnataka 562110",
    price: 30,
  },
  {
    id: 11,
    data_delay_time: "0.1s",
    tag: "19 Listing",
    thumb: agencyThumb_8,
    title: "Prestige Group",
    rating: 2,
    category: "Popular",
    desc: "Marathahalli, Bengaluru, Karnataka 560037",
    price: 20,
  },
  {
    id: 12,
    data_delay_time: "0.2s",
    tag: "27 Listing",
    thumb: agencyThumb_9,
    title: "Lodha Group",
    rating: 5,
    desc: "Jayanagar, Bengaluru, Karnataka 560041",
    price: 100,
  },
  {
    id: 13,
    tag: "27 Listing",
    thumb: agencyThumb_1,
    title: "Prestige Group",
    rating: 1,
    desc: "JP Nagar, Bengaluru, Karnataka 560078",
    price: 10,
  },
  {
    id: 14,
    data_delay_time: "0.1s",
    tag: "31 Listing",
    thumb: agencyThumb_2,
    title: "Godrej Properties",
    rating: 4,
    desc: "Bannerghatta Road, Bengaluru, Karnataka 560076",
    price: 50,
  },
  {
    id: 15,
    data_delay_time: "0.2s",
    tag: "22 Listing",
    thumb: agencyThumb_3,
    title: "Brigade Group",
    rating: 5,
    desc: "KR Puram, Bengaluru, Karnataka 560036",
    price: 150,
  },
  {
    id: 16,
    tag: "12 Listing",
    thumb: agencyThumb_4,
    title: "Sobha Developers",
    rating: 4,
    category: "Popular",
    desc: "Indiranagar, Bengaluru, Karnataka 560038",
    price: 50,
  },
  {
    id: 17,
    data_delay_time: "0.1s",
    tag: "36 Listing",
    thumb: agencyThumb_5,
    title: "Assetz Property Group",
    rating: 2,
    desc: "Hennur Road, Bengaluru, Karnataka 560043",
    price: 20,
  },
  {
    id: 18,
    data_delay_time: "0.2s",
    tag: "16 Listing",
    thumb: agencyThumb_6,
    title: "Puravankara",
    rating: 5,
    desc: "Mysore Road, Bengaluru, Karnataka 560059",
    price: 200,
  }
];

export default agency_data;
