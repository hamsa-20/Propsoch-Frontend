import { StaticImageData } from "next/image";

import categoryIcon_1 from "@/assets/images/icon/icon_15.svg";
import categoryIcon_2 from "@/assets/images/icon/icon_16.svg";
import categoryIcon_3 from "@/assets/images/icon/icon_17.svg";
import categoryIcon_4 from "@/assets/images/icon/icon_18.svg";
import categoryIcon_5 from "@/assets/images/icon/icon_19.svg";
import categoryIcon_6 from "@/assets/images/icon/icon_20.svg";
import categoryIcon_7 from "@/assets/images/icon/icon_21.svg";
import categoryIcon_8 from "@/assets/images/icon/icon_22.svg";

interface DataType {
   id: number;
   page: string;
   icon?: StaticImageData;
   text: string;
   item_bg_img?:string;
   data_delay_time?:string;
}[];

const category_data: DataType[] = [
  // home_3
  { id: 1, page: "home_3", icon: categoryIcon_2, text: "Apartments" },
  { id: 2, page: "home_3", icon: categoryIcon_3, text: "Villas" },
  { id: 3, page: "home_3", icon: categoryIcon_7, text: "Independent Houses" },
  { id: 4, page: "home_3", icon: categoryIcon_5, text: "Office Spaces" },
  { id: 5, page: "home_3", icon: categoryIcon_6, text: "Healthcare" },
  { id: 6, page: "home_3", icon: categoryIcon_8, text: "Lofts" },

  // home_4
  { id: 7, page: "home_4", item_bg_img: "category-4-item-1", text: "Apartments" },
  { id: 8, page: "home_4", item_bg_img: "category-4-item-2", text: "Independent Houses", data_delay_time: "0.1s" },
  { id: 9, page: "home_4", item_bg_img: "category-4-item-3", text: "Villas", data_delay_time: "0.2s" },
  { id: 10, page: "home_4", item_bg_img: "category-4-item-4", text: "Premium Projects", data_delay_time: "0.3s" },
];

export default category_data;


