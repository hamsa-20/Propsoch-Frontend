"use client"
import { useState } from "react"
import NiceSelect from "@/ui/NiceSelect"

const tab_title: string[] = ["Buy", "Rent"]

const DropdownFive = () => {
  const [activeTab, setActiveTab] = useState(0)

  const selectHandler = (e: any) => {}

  const searchHandler = () => {
    window.location.href = "/listing_05"
  }

  return (
    <div className="search-wrapper-one layout-one mt-60 lg-mt-40 position-relative">
      {/* Tabs */}
      <nav className="search-filter-nav-one d-flex">
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

      <div className="bg-wrapper p0 border-0 rounded-0">
        <div className="tab-content">

          {/* BUY */}
          <div className={`tab-pane show ${activeTab === 0 ? "active" : ""}`}>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                searchHandler()
              }}
              className="md-pt-20"
            >
              <div className="row gx-0 align-items-center">

                <div className="col-lg-3">
                  <div className="input-box-one border-left">
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
                      name="property_type"
                      placeholder="Select Type"
                    />
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="input-box-one border-left">
                    <div className="label">City</div>
                    <NiceSelect
                      className="nice-select location fw-normal"
                      options={[
                        { value: "bangalore", text: "Bangalore" },
                        { value: "mumbai", text: "Mumbai" },
                      ]}
                      defaultCurrent={0}
                      onChange={selectHandler}
                      name="city"
                      placeholder="Select City"
                    />
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4">
                  <div className="input-box-one">
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
                      name="budget"
                      placeholder="Select Budget"
                    />
                  </div>
                </div>

                <div className="col-xl-2 col-lg-1">
                  <div className="input-box-one p0 ms-xl-5 md-mt-20">
                    <button
                      type="submit"
                      className="fw-500 text-uppercase tran3s search-btn-two w-100 h-100"
                    >
                      <i className="fa-light fa-magnifying-glass"></i>
                    </button>
                  </div>
                </div>

              </div>
            </form>
          </div>

          {/* RENT */}
          <div className={`tab-pane show ${activeTab === 1 ? "active" : ""}`}>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                searchHandler()
              }}
              className="md-pt-20"
            >
              <div className="row gx-0 align-items-center">

                <div className="col-lg-3">
                  <div className="input-box-one border-left">
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
                      placeholder="Select Type"
                    />
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="input-box-one border-left">
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

                <div className="col-xl-3 col-lg-4">
                  <div className="input-box-one">
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

                <div className="col-xl-2 col-lg-1">
                  <div className="input-box-one p0 ms-xl-5 md-mt-20">
                    <button
                      type="submit"
                      className="fw-500 text-uppercase tran3s search-btn-two w-100 h-100"
                    >
                      <i className="fa-light fa-magnifying-glass"></i>
                    </button>
                  </div>
                </div>

              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default DropdownFive
