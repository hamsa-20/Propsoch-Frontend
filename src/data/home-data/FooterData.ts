interface DataType {
   id: number;
   page: string;
   widget_title: string;
   widget_class?: string;
   widget_class2?: string;
   footer_link: {
      link: string;
      link_title: string;
   }[];

}

const footer_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    widget_class: "xs-mt-50",
    widget_title: "Quick Links",
    footer_link: [
      { link: "/", link_title: "Home" },
      { link: "/about_us_01", link_title: "About Us" },
      { link: "/pricing_02", link_title: "Pricing" },
      { link: "/blog_01", link_title: "Blog" },
      { link: "/blog_02", link_title: "Careers" },
      { link: "/dashboard/membership", link_title: "Membership" },
      { link: "/dashboard/dashboard-index", link_title: "Dashboard" },
    ],
  },
  {
    id: 2,
    widget_class: "xs-mt-30",
    page: "home_1",
    widget_title: "Legal",
    footer_link: [
      { link: "/faq", link_title: "Terms & Conditions" },
      { link: "/faq", link_title: "Privacy Policy" },
      { link: "/faq", link_title: "Cookies Policy" },
      { link: "/faq", link_title: "FAQs" },
    ],
  },
  {
    id: 3,
    widget_class: "xs-mt-30",
    page: "home_1",
    widget_title: "Property Types",
    footer_link: [
      { link: "/listing_01", link_title: "Buy Apartments" },
      { link: "/listing_02", link_title: "Buy Condos" },
      { link: "/listing_03", link_title: "Rent Houses" },
      { link: "/listing_04", link_title: "Commercial Properties" },
      { link: "/listing_05", link_title: "Buy Villas" },
      { link: "/listing_06", link_title: "Office Spaces" },
    ],
  },

  // home_3

  {
    id: 1,
    page: "home_3",
    widget_title: "Company",
    footer_link: [
      { link: "/", link_title: "Home" },
      { link: "/about_us_01", link_title: "About Company" },
      { link: "/pricing_02", link_title: "Pricing" },
      { link: "/blog_01", link_title: "Blog" },
      { link: "/blog_02", link_title: "Careers" },
    ],
  },
  {
    id: 2,
    widget_class: "col-xxl-3 col-xl-4",
    page: "home_3",
    widget_title: "Legal",
    footer_link: [
      { link: "/faq", link_title: "Terms & Conditions" },
      { link: "/faq", link_title: "Privacy Policy" },
      { link: "/faq", link_title: "Cookies Policy" },
      { link: "/faq", link_title: "FAQs" },
    ],
  },
  {
    id: 3,
    page: "home_3",
    widget_title: "Explore",
    footer_link: [
      { link: "/listing_01", link_title: "Properties in Bangalore" },
      { link: "/listing_02", link_title: "Properties in Mumbai" },
      { link: "/listing_03", link_title: "Rent Homes" },
      { link: "/listing_05", link_title: "Premium Villas" },
    ],
  },

  // home_4

  {
    id: 1,
    page: "home_4",
    widget_class: "col-lg-2",
    widget_title: "Company",
    footer_link: [
      { link: "/", link_title: "Home" },
      { link: "/about_us_01", link_title: "About Us" },
      { link: "/blog_01", link_title: "Blog" },
      { link: "/pricing_02", link_title: "Pricing" },
    ],
  },
  {
    id: 2,
    widget_class: "col-xl-2 col-lg-3",
    page: "home_4",
    widget_title: "Listings",
    footer_link: [
      { link: "/listing_01", link_title: "Buy Apartments" },
      { link: "/listing_02", link_title: "Buy Condos" },
      { link: "/listing_03", link_title: "Rent Houses" },
      { link: "/listing_05", link_title: "Luxury Villas" },
    ],
  },
  {
    id: 3,
    widget_class: "col-xl-2 col-lg-3",
    page: "home_4",
    widget_title: "Legal",
    footer_link: [
      { link: "/faq", link_title: "Terms & Conditions" },
      { link: "/faq", link_title: "Privacy Policy" },
      { link: "/faq", link_title: "FAQs" },
    ],
  },

  // home_5

  {
    id: 1,
    page: "home_5",
    widget_class: "col-lg-3 ms-auto",
    widget_class2: "ps-xl-5",
    widget_title: "Company",
    footer_link: [
      { link: "/", link_title: "Home" },
      { link: "/about_us_01", link_title: "About Us" },
      { link: "/pricing_02", link_title: "Pricing" },
      { link: "/blog_01", link_title: "Blog" },
      { link: "/blog_02", link_title: "Careers" },
      { link: "/dashboard/dashboard-index", link_title: "Dashboard" },
    ],
  },
  {
    id: 2,
    widget_class: "col-lg-3",
    page: "home_5",
    widget_title: "Legal",
    footer_link: [
      { link: "/faq", link_title: "Terms & Conditions" },
      { link: "/faq", link_title: "Privacy Policy" },
      { link: "/faq", link_title: "Cookies Policy" },
      { link: "/faq", link_title: "FAQs" },
    ],
  },
  {
    id: 3,
    widget_class: "col-lg-2",
    page: "home_5",
    widget_title: "Explore",
    footer_link: [
      { link: "/listing_01", link_title: "Bangalore Properties" },
      { link: "/listing_02", link_title: "Mumbai Properties" },
      { link: "/listing_03", link_title: "Rent Homes" },
      { link: "/listing_05", link_title: "Luxury Villas" },
    ],
  },
];

export default footer_data;
