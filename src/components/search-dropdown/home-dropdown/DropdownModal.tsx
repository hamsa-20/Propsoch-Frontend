"use client"

import NiceSelect from "@/ui/NiceSelect"
import Link from "next/link"

const amenities_data: string[] = [
  "A/C & Heating",
  "Parking",
  "Power Backup",
  "Lift",
  "Gym",
  "Swimming Pool",
  "Garden",
  "Children Play Area",
  "Club House",
  "Security",
  "Pet Friendly",
  "Fire Safety",
]

const DropdownModal = () => {
  const selectHandler = (e: any) => {}

  return (
    <div
      className="home-dropdown modal fade"
      id="advanceFilterModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto">
              <div className="modal-content">
                <button
                  type="button"
                  className="btn-close ms-auto mt-20 me-4"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fa-regular fa-xmark"></i>
                </button>

                <div className="advance-search-panel">
                  <div className="main-bg border-0">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="row gx-lg-5">

                        {/* ACTION */}
                        <div className="col-md-6">
                          <div className="input-box-one mb-35">
                            <div className="label">I’m looking to</div>
                            <NiceSelect
                              className="nice-select fw-normal"
                              options={[
                                { value: "buy", text: "Buy Property" },
                                { value: "rent", text: "Rent Property" },
                                { value: "sell", text: "Sell Property" },
                              ]}
                              defaultCurrent={0}
                              onChange={selectHandler}
                              name="action"
                              placeholder="Select Action"
                            />
                          </div>
                        </div>

                        {/* LOCATION */}
                        <div className="col-md-6">
                          <div className="input-box-one mb-35">
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

                        {/* KEYWORD */}
                        <div className="col-md-6">
                          <div className="input-box-one mb-35">
                            <div className="label">Keyword</div>
                            <input
                              type="text"
                              placeholder="Apartment, Villa, Plot"
                              className="type-input"
                              name="keyword"
                            />
                          </div>
                        </div>

                        {/* PROPERTY ID */}
                        <div className="col-md-6">
                          <div className="input-box-one mb-35">
                            <div className="label">Property ID</div>
                            <input
                              type="text"
                              placeholder="PS-10234"
                              className="type-input"
                              name="property_id"
                            />
                          </div>
                        </div>

                        {/* BEDROOM */}
                        <div className="col-lg-6">
                          <div className="input-box-one mb-40">
                            <div className="label">Bedrooms</div>
                            <NiceSelect
                              className="nice-select fw-normal"
                              options={[
                                { value: "1", text: "1 BHK" },
                                { value: "2", text: "2 BHK" },
                                { value: "3", text: "3 BHK" },
                                { value: "4", text: "4+ BHK" },
                              ]}
                              defaultCurrent={0}
                              onChange={selectHandler}
                              name="bedrooms"
                              placeholder="Select Bedrooms"
                            />
                          </div>
                        </div>

                        {/* BATHROOM */}
                        <div className="col-lg-6">
                          <div className="input-box-one mb-40">
                            <div className="label">Bathrooms</div>
                            <NiceSelect
                              className="nice-select fw-normal"
                              options={[
                                { value: "1", text: "1" },
                                { value: "2", text: "2" },
                                { value: "3", text: "3+" },
                              ]}
                              defaultCurrent={0}
                              onChange={selectHandler}
                              name="bathrooms"
                              placeholder="Select Bathrooms"
                            />
                          </div>
                        </div>

                        {/* AMENITIES */}
                        <div className="col-12">
                          <h6 className="block-title fw-bold mb-30">
                            Amenities
                          </h6>
                          <ul className="style-none d-flex flex-wrap justify-content-between filter-input">
                            {amenities_data.map((item, i) => (
                              <li key={i}>
                                <input
                                  type="checkbox"
                                  id={`amenity-${i}`}
                                  name="amenities"
                                  value={item}
                                />
                                <label htmlFor={`amenity-${i}`}>
                                  {item}
                                </label>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* PRICE RANGE */}
                        <div className="col-md-6">
                          <h6 className="block-title fw-bold mt-45 mb-20">
                            Budget (₹)
                          </h6>
                          <div className="d-flex align-items-center sqf-ranger">
                            <input type="number" placeholder="Min (₹)" />
                            <div className="divider"></div>
                            <input type="number" placeholder="Max (₹)" />
                          </div>
                        </div>

                        {/* SQFT */}
                        <div className="col-md-6">
                          <h6 className="block-title fw-bold mt-45 mb-20">
                            Area (sq.ft)
                          </h6>
                          <div className="d-flex align-items-center sqf-ranger">
                            <input type="number" placeholder="Min" />
                            <div className="divider"></div>
                            <input type="number" placeholder="Max" />
                          </div>
                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="col-12">
                          <button className="fw-500 text-uppercase tran3s apply-search w-100 mt-40 mb-25">
                            <i className="fa-light fa-magnifying-glass"></i>
                            <span>Apply Filters</span>
                          </button>
                        </div>

                        <div className="col-12">
                          <div className="d-flex justify-content-between form-widget">
                            <Link href="#" className="tran3s">
                              <i className="fa-regular fa-arrows-rotate"></i>
                              <span>Reset Filters</span>
                            </Link>
                            <Link href="#" className="tran3s">
                              <i className="fa-regular fa-star"></i>
                              <span>Save Search</span>
                            </Link>
                          </div>
                        </div>

                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropdownModal
