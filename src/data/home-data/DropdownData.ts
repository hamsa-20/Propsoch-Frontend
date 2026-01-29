interface InputField {
   id: number;
   page: string;
   col?: string;
   border_lg?: string;
   label: string;
   options: {
      value: string;
      text: string;
   }[];
   className?: string;
}[]

const dropdoun_data: InputField[] = [
  // home_1
  {
    id: 1,
    page: "home_1",
    col: "col-xl-3",
    label: "I’m looking to...",
    options: [
      { value: "buy", text: "Buy Property" },
      { value: "rent", text: "Rent Property" },
      { value: "sell", text: "Sell Property" },
    ],
  },
  {
    id: 2,
    page: "home_1",
    col: "col-xl-4",
    label: "Location",
    className: "location",
    options: [
      { value: "bangalore", text: "Bangalore" },
      { value: "mumbai", text: "Mumbai" },
    ],
  },
  {
    id: 3,
    page: "home_1",
    col: "col-xl-3",
    border_lg: "border-lg-0",
    label: "Budget Range",
    options: [
      { value: "1", text: "₹50L – ₹1Cr" },
      { value: "2", text: "₹1Cr – ₹2Cr" },
      { value: "3", text: "₹2Cr+" },
    ],
  },

  // home_2_tab_1
  {
    id: 4,
    page: "home_2_tab_1",
    col: "col-xl-2",
    label: "Purpose",
    options: [
      { value: "buy", text: "Buy" },
      { value: "rent", text: "Rent" },
    ],
  },
  {
    id: 5,
    page: "home_2_tab_1",
    col: "col-xl-3",
    label: "City",
    className: "location",
    options: [
      { value: "bangalore", text: "Bangalore" },
      { value: "mumbai", text: "Mumbai" },
    ],
  },
  {
    id: 6,
    page: "home_2_tab_1",
    col: "col-xl-3",
    label: "Budget",
    options: [
      { value: "1", text: "₹50L – ₹1Cr" },
      { value: "2", text: "₹1Cr – ₹2Cr" },
      { value: "3", text: "₹2Cr+" },
    ],
  },
];

export default dropdoun_data;

