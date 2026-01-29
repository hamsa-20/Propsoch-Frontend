import Link from "next/link";

interface DataType {
  id: number;
  class_name?: string;
  plan: string;
  price: string;
  desc: string;
  price_features: {
    feature_title: string;
    feature_class?: string;
  }[];
}

const pricing_data: DataType[] = [
  {
    id: 1,
    class_name: "active",
    plan: "DISCOVERY",
    price: "₹0",
    desc: "one time",
    price_features: [
      { feature_title: "Initial requirement discovery call" },
      { feature_title: "Area & budget feasibility guidance" },
      { feature_title: "Access to curated insights (Bangalore & Mumbai)" },
      { feature_title: "Site visit & negotiation support", feature_class: "disable" },
    ],
  },
  {
    id: 2,
    plan: "GUIDED HOME BUYING",
    price: "₹49,999",
    desc: "one time",
    price_features: [
      { feature_title: "Curated shortlisting by architects" },
      { feature_title: "Guided site visits with experts" },
      { feature_title: "Builder, location & livability analysis" },
      { feature_title: "End-to-end negotiation support" },
    ],
  },
  {
    id: 3,
    plan: "END-TO-END ADVISORY",
    price: "₹99,999",
    desc: "one time",
    price_features: [
      { feature_title: "Complete home buying handholding" },
      { feature_title: "Legal, financial & risk analysis" },
      { feature_title: "Best price & deal negotiation" },
      { feature_title: "Dedicated relationship manager" },
    ],
  },
];


const PricingTwoArea = () => {
  return (
    <div className="pricing-section-two mt-150 xl-mt-100 mb-170 xl-mb-100">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-5">
            <div className="title-one">
              <h3>No hidden charges, choose your plan.</h3>
            </div>
          </div>
          <div className="col-xl-5 ms-auto">
            <p className="fs-24 pt-20">
              Simple and transparent pricing for buying or renting homes in
              Mumbai & Bangalore.
            </p>
          </div>
        </div>

        <div className="row gx-xxl-5 pt-40 lg-pt-10">
          {pricing_data.map((item) => (
            <div key={item.id} className="col-lg-4">
              <div className={`pr-column-wrapper mt-30 ${item.class_name || ""}`}>
                <div className="pr-header text-center mb-55">
                  <div className="plan fw-500 text-uppercase color-dark">
                    {item.plan}
                  </div>
                  <strong className="price fw-500">{item.price}</strong>
                  <p className="fs-24">{item.desc}</p>
                </div>

                <ul className="style-none text-center">
                  {item.price_features.map((feature, i) => (
                    <li key={i} className={feature.feature_class}>
                      {feature.feature_title}
                    </li>
                  ))}
                </ul>

                <div className="pr-footer text-center mt-60">
                  <Link
                    href="#"
                    className="btn-twelve w-100 rounded-0 sm"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTwoArea;
