"use client";

import pricing_data from "@/data/inner-data/PricingData";
import Link from "next/link";
import { useState } from "react";

const tab_title = ["Monthly", "Yearly"];

const featureList: string[] = [
  "Property Listings",
  "Verified Properties",
  "Advanced Search Filters",
  "Priority Support",
  "Unlimited Property Views",
  "Dedicated Relationship Manager",
];

const PricingOneArea = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="pricing-section-one mt-150 xl-mt-100">
      <div className="container">
        {/* TITLE */}
        <div className="row">
          <div className="col-lg-10 m-auto">
            <div className="title-one text-center mb-40">
              <h3>Simple & transparent pricing</h3>
              <p className="fs-24">
                Choose a plan that fits your property needs. No hidden charges.
              </p>
            </div>
          </div>
        </div>

        {/* TAB NAV */}
        <div className="pr-table-one">
          <nav className="pricing-nav-one d-flex justify-content-center">
            <div className="nav nav-tabs">
              {tab_title.map((tab, index) => (
                <button
                  key={index}
                  type="button"
                  className={`nav-link ${activeTab === index ? "active" : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </nav>

          <div className="discount-text mt-15 text-center">
            Save 30% on yearly plans
          </div>

          {/* TABLE */}
          <div className="dot-bg-wrapper mt-60">
            {pricing_data
              .filter((item) => item.page === "pricing_1")
              .map((pricing, index) => (
                <div
                  key={index}
                  className={`tab-pane show ${
                    activeTab === index ? "active" : ""
                  }`}
                >
                  <div className="main-bg d-flex flex-wrap justify-content-end">

                    {/* LEFT FEATURES */}
                    <div className="left-panel d-none d-lg-block">
                      <ul className="style-none">
                        {featureList.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* PRICING CARDS */}
                    {pricing.pricing_data.map((plan) => {
                      const basePrice = Number(
                        plan.price.replace(/[^0-9]/g, "")
                      );

                      const finalPrice =
                        activeTab === 1
                          ? Math.floor(basePrice * 12 * 0.7)
                          : basePrice;

                      return (
                        <div
                          key={plan.id}
                          className={`pr-column-wrapper ${plan.class_name || ""}`}
                        >
                          <div className="pr-header text-center">
                            <div className="plan text-uppercase">
                              {plan.plan}
                            </div>
                            <strong className="price fw-500">
                              ₹{finalPrice.toLocaleString()}
                            </strong>
                            <p className="fs-16">
                              {activeTab === 0 ? "per month" : "per year"}
                            </p>
                          </div>

                          <ul className="style-none text-center">
                            {plan.icon_details.map((icon, i) => (
                              <li key={i}>
                                <i
                                  className={`${icon.icon} ${
                                    icon.icon_class || ""
                                  }`}
                                ></i>
                              </li>
                            ))}
                          </ul>

                          <div className="pr-footer text-center">
                            <Link href="#" className="btn-twelve sm">
                              {plan.btn}
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingOneArea;
