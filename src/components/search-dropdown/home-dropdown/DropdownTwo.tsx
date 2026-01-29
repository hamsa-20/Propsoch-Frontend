"use client"
import { useState } from "react";
import NiceSelect from "@/ui/NiceSelect";

const tab_title: string[] = ["Buy", "Rent",];

const DropdownTwo = () => {

   const selectHandler = (e: any) => { };
   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };

   const searchHandler = () => {
      window.location.href = '/listing_07';
   };

   return (
      <div className="search-wrapper-one layout-two mt-60 lg-mt-40 position-relative">
         <nav className="search-filter-nav-one d-flex">
            <div className="nav nav-tabs border-0" role="tablist">
               {tab_title.map((tab, index) => (
                  <button key={index} onClick={() => handleTabClick(index)} className={`nav-link ${activeTab === index ? "active" : ""}`} id="buy-tab" type="button">{tab}</button>
               ))}
            </div>
         </nav>

         <div className="bg-wrapper border-0 rounded-0">
            <div className="tab-content">
               <div className={`tab-pane show ${activeTab === 0 ? "active" : ""}`} id="buy">
                  <form onSubmit={(e) => { e.preventDefault(); searchHandler(); }}>
                     <div className="row gx-0 align-items-center">
                        <div className="col-xl-2 col-md-6">
                           <div className="input-box-one border-left">
                              <div className="label">I’m looking to...</div>
                              <NiceSelect className="nice-select fw-normal"
                                 
options={[
  { value: "buy", text: "Buy Property" },
  { value: "rent", text: "Rent Property" },
  { value: "sell", text: "Sell Property" },
]}
name="purpose"
placeholder="Select purpose"


                                 defaultCurrent={0}
                                 onChange={selectHandler}
                              />

                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="input-box-one border-left">
                              <div className="label">Location</div>
                              <NiceSelect className="nice-select location fw-normal"
options={[
  { value: "bangalore", text: "Bangalore" },
  { value: "mumbai", text: "Mumbai" },
]}
name="location"
placeholder="Select city"

                                 defaultCurrent={0}
                                 onChange={selectHandler}
                              />

                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="input-box-one border-left">
                              <div className="label">Keyword</div>
                              <input type="text" placeholder="buy, home, loft, apartment" className="type-input" />
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="input-box-one border-left">
                              <div className="label">Price Range</div>
                              <NiceSelect
                                 className="nice-select fw-normal"
options={[
  { value: "1", text: "₹30L – ₹75L" },
  { value: "2", text: "₹75L – ₹1.5Cr" },
  { value: "3", text: "₹1.5Cr – ₹3Cr+" },
]}
name="price"
placeholder="Select budget"

                                 defaultCurrent={0}
                                 onChange={selectHandler}
                              />

                           </div>
                        </div>
                        <div className="col-xl-1">
                           <div className="input-box-one lg-mt-10">
                              <button className="fw-500 text-uppercase tran3s search-btn-two"><i
                                 className="fa-light fa-magnifying-glass"></i></button>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>

               <div className={`tab-pane show ${activeTab === 1 ? "active" : ""}`} id="buy">
                  <form onSubmit={(e) => { e.preventDefault(); searchHandler(); }}>
                     <div className="row gx-0 align-items-center">
                        <div className="col-xl-2 col-md-6">
                           <div className="input-box-one border-left">
                              <div className="label">I’m looking to...</div>
                              <NiceSelect className="nice-select fw-normal"
options={[
  { value: "buy", text: "Buy Property" },
  { value: "rent", text: "Rent Property" },
  { value: "sell", text: "Sell Property" },
]}
name="purpose"
placeholder="Select purpose"

                                 defaultCurrent={0}
                                 onChange={selectHandler}
                              />

                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="input-box-one border-left">
                              <div className="label">Location</div>
                              <NiceSelect className="nice-select location fw-normal"
options={[
  { value: "bangalore", text: "Bangalore" },
  { value: "mumbai", text: "Mumbai" },
]}
name="location"
placeholder="Select city"

                                 defaultCurrent={0}
                                 onChange={selectHandler}
                              />
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="input-box-one border-left">
                              <div className="label">Keyword</div>
                              <input type="text" placeholder="buy, home, loft, apartment" className="type-input" />
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="input-box-one border-left">
                              <div className="label">Price Range</div>
                              <NiceSelect
                                 className="nice-select fw-normal"
options={[
  { value: "1", text: "₹30L – ₹75L" },
  { value: "2", text: "₹75L – ₹1.5Cr" },
  { value: "3", text: "₹1.5Cr – ₹3Cr+" },
]}
name="price"
placeholder="Select budget"

                                 defaultCurrent={0}
                                 onChange={selectHandler}
                              />

                           </div>
                        </div>
                        <div className="col-xl-1">
                           <div className="input-box-one lg-mt-10">
                              <button className="fw-500 text-uppercase tran3s search-btn-two"><i
                                 className="fa-light fa-magnifying-glass"></i></button>
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

export default DropdownTwo
