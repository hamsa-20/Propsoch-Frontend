interface DataType{
   id:number;
   page:string;
   class_name:string;
   date:string;
   info_name:string;
   info_time:number;
   title:string;
   data_delay_time?:string;
}

const blog_data: DataType[] = [
  // home_2
  {
    id: 1,
    page: "home_2",
    class_name: "blog-item-1",
    date: "09 FEB",
    info_name: "Propsoch Research Team",
    info_time: 6,
    title: "7 Costly Mistakes First-Time Homebuyers Make in Bangalore",
  },
  {
    id: 2,
    page: "home_2",
    class_name: "blog-item-2",
    date: "12 AUG",
    info_name: "Prashant Rao",
    info_time: 7,
    title: "How to Evaluate a Builder Before You Book a Property",
    data_delay_time: "0.1s",
  },

  // home_4
  {
    id: 3,
    page: "home_4",
    class_name: "blog-item-1",
    date: "08 JAN",
    info_name: "Stuti Mehta",
    info_time: 8,
    title: "Bangalore vs Mumbai: Where Should You Buy Your First Home?",
  },
  {
    id: 4,
    page: "home_4",
    class_name: "blog-item-2",
    date: "17 AUG",
    info_name: "Propsoch Advisory",
    info_time: 7,
    title: "Understanding Floor Plans: What Builders Don’t Tell You",
  },
  {
    id: 5,
    page: "home_4",
    class_name: "blog-item-3",
    date: "21 SEP",
    info_name: "Ashish Sharma",
    info_time: 8,
    title: "How Guided Home Buying Saves You Money, Time & Stress",
  },
];


export default blog_data;