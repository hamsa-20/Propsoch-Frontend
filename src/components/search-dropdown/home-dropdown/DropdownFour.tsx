"use client"
import NiceSelect from "@/ui/NiceSelect"
import { useState } from "react"

const tab_title: string[] = ["Buy", "Rent", "Sell"]

const DropdownFour = () => {
  const [activeTab, setActiveTab] = useState(0)

  const selectHandler = (e: any) => {}

  const searchHandler = () => {
    window.location.href = "/listing_01"
  }

  return (
    <div className="search-wrapper-two position-relative ms-xl-5 ms-lg-4 ps-xxl-4 md-mt-60">
      {/* Tabs */}
      <nav className="search-filter-nav-two d-inline-flex">
        <div className="nav nav-tabs border-0">
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

      <div className="bg-wrapper position-relative z-1">
        <h4 className="mb-35 xl-mb-30">Find & Buy Now!</h4>

        <div className="tab-content">

          {/* BUY */}
          <div className={`tab-pane show ${activeTab === 0 ? "active" : ""}`}>
            <form onSubmit={(e) => { e.preventDefault(); searchHandler(); }}>
              <div className="row gx-0">

                <div className="col-12">
                  <div className="input-box-one bottom-border mb-25">
                    <div className="label">Property Type</div>
                    <NiceSelect
                      className="nice-select fw-normal"
                      options={[
                        { value: "apartment", text: "Apartment" },
                        { value: "villa", text: "Villa" },
                        { value: "plot", text: "Plot" },
                        { value: "independent", text: "Independent House" },
                      ]}
                      defaultCurrent={0}
                      onChange={selectHandler}
                      name="buy_type"
                      placeholder="Select Property Type"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="input-box-one bottom-border mb-25">
                    <div className="label">City</div>
                    <NiceSelect
                      className="nice-select location fw-normal"
                      options={[
                        { value: "bangalore", text: "Bangalore" },
                        { value: "mumbai", text: "Mumbai" },
                      ]}
                      defaultCurrent={0}
                      onChange={selectHandler}
                      name="buy_city"
                      placeholder="Select City"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="input-box-one bottom-border mb-50">
                    <div className="label">Budget</div>
                    <NiceSelect
                      className="nice-select fw-normal"
                      options={[
                        { value: "1", text: "₹50L – ₹1 Cr" },
                        { value: "2", text: "₹1 Cr – ₹2 Cr" },
                        { value: "3", text: "₹2 Cr – ₹3 Cr" },
                        { value: "4", text: "₹3 Cr+" },
                      ]}
                      defaultCurrent={0}
                      onChange={selectHandler}
                      name="buy_budget"
                      placeholder="Select Budget"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <button className="btn-five text-uppercase rounded-0 w-100">
                    Search
                  </button>
                </div>

              </div>
            </form>
          </div>

          {/* RENT */}
          <div className={`tab-pane show ${activeTab === 1 ? "active" : ""}`}>
            <form onSubmit={(e) => { e.preventDefault(); searchHandler(); }}>
              <div className="row gx-0">

                <div className="col-12">
                  <div className="input-box-one bottom-border mb-25">
                    <div className="label">Property Type</div>
                    <NiceSelect
                      className="nice-select fw-normal"
                      options={[
                        { value: "apartment", text: "Apartment" },
                        { value: "villa", text: "Villa" },
                        { value: "studio", text: "Studio" },
                      ]}
                      defaultCurrent={0}
                      onChange={selectHandler}
                      name="rent_type"
                      placeholder="Select Property Type"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="input-box-one bottom-border mb-25">
                    <div className="label">City</div>
                    <NiceSelect
                      className="nice-select location fw-normal"
                      options={[
                        { value: "bangalore", text: "Bangalore" },
                        { value: "mumbai", text: "Mumbai" },
                      ]}
                      defaultCurrent={0}
                      onChange={selectHandler}
                      name="rent_city"
                      placeholder="Select City"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="input-box-one bottom-border mb-50">
                    <div className="label">Monthly Rent</div>
                    <NiceSelect
                      className="nice-select fw-normal"
                      options={[
                        { value: "1", text: "₹20k – ₹40k" },
                        { value: "2", text: "₹40k – ₹70k" },
                        { value: "3", text: "₹70k – ₹1L" },
                        { value: "4", text: "₹1L+" },
                      ]}
                      defaultCurrent={0}
                      onChange={selectHandler}
                      name="rent_budget"
                      placeholder="Select Rent"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <button className="btn-five text-uppercase rounded-0 w-100">
                    Search
                  </button>
                </div>

              </div>
            </form>
          </div>

          {/* SELL */}
          <div className={`tab-pane show ${activeTab === 2 ? "active" : ""}`}>
            <form onSubmit={(e) => { e.preventDefault(); searchHandler(); }}>
              <div className="row gx-0">

                <div className="col-12">
                  <div className="input-box-one bottom-border mb-25">
                    <div className="label">Property Type</div>
                    <NiceSelect
                      className="nice-select fw-normal"
                      options={[
                        { value: "apartment", text: "Apartment" },
                        { value: "villa", text: "Villa" },
                        { value: "plot", text: "Plot" },
                      ]}
                      defaultCurrent={0}
                      onChange={selectHandler}
                      name="sell_type"
                      placeholder="Select Property Type"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="input-box-one bottom-border mb-25">
                    <div className="label">City</div>
                    <NiceSelect
                      className="nice-select location fw-normal"
                      options={[
                        { value: "bangalore", text: "Bangalore" },
                        { value: "mumbai", text: "Mumbai" },
                      ]}
                      defaultCurrent={0}
                      onChange={selectHandler}
                      name="sell_city"
                      placeholder="Select City"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <button className="btn-five text-uppercase rounded-0 w-100">
                    Search
                  </button>
                </div>

              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default DropdownFour
