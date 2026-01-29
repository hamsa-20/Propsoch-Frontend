import ListingDropdownModal from "@/modals/ListingDropdownModal"
import NiceSelect from "@/ui/NiceSelect"
import Link from "next/link"

const DropdownThree = ({
   handleBathroomChange,
   handleBedroomChange,
   handleSearchChange,
   handlePriceChange,
   maxPrice,
   priceValue,
   handleResetFilter,
   selectedAmenities,
   handleAmenityChange,
   handleLocationChange,
   handleStatusChange,
   handlePriceDropChange }: any) => {
   return (
      <>
         <form onSubmit={(e) => e.preventDefault()}>
            <div className="row gx-0 align-items-center">
               <div className="col-xxl-2 col-xl-3 col-lg-4">
                  <div className="input-box-one border-left">
                     <div className="label">I’m looking to...</div>
                     <NiceSelect className="nice-select fw-normal"
options={[
  { value: "buy", text: "Buy Property" },
  { value: "rent", text: "Rent Property" },
  { value: "sell", text: "Sell Property" },
]}
                        defaultCurrent={0}
                        onChange={handleStatusChange}
                        name=""
                        placeholder="" />
                  </div>
               </div>
               <div className="col-xl-3 col-lg-4">
                  <div className="input-box-one border-left">
                     <div className="label">Location</div>
                     <NiceSelect className="nice-select location fw-normal"
options={[
  { value: "bangalore", text: "Bangalore" },
  { value: "mumbai", text: "Mumbai" },
]}
                        defaultCurrent={0}
                        onChange={handleLocationChange}
                        name=""
                        placeholder="" />
                  </div>
               </div>
               <div className="col-xl-3 col-lg-4">
                  <div className="input-box-one border-left border-lg-0">
                     <div className="label">Price Range</div>
                     <NiceSelect
                        className="nice-select fw-normal"
options={[
  { value: "1", text: "₹30L – ₹75L" },
  { value: "2", text: "₹75L – ₹1.5Cr" },
  { value: "3", text: "₹1.5Cr – ₹3Cr+" },
]}
                        defaultCurrent={0}
                        onChange={(event) => handlePriceDropChange(event.target.value)}
                        name=""
                        placeholder=""
                     />
                  </div>
               </div>
               <div className="col-xxl-4 col-xl-3">
                  <div className="input-box-one lg-mt-20">
                     <div className="d-flex align-items-center justify-content-center">
                        <Link href="#" data-bs-toggle="modal" data-bs-target="#advanceFilterModal" className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center me-3">
                           <span className="d-xl-none d-xxl-block">ADVANCE Search</span>
                           <i className="fa-light fa-sliders-up"></i>
                        </Link>
                        <button className="fw-500 text-uppercase tran3s search-btn-four">
                           <span>Search</span>
                           <i className="fa-light fa-magnifying-glass"></i>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </form>
         <ListingDropdownModal
            handleSearchChange={handleSearchChange}
            handleBedroomChange={handleBedroomChange}
            handleBathroomChange={handleBathroomChange}
            handlePriceChange={handlePriceChange}
            maxPrice={maxPrice}
            priceValue={priceValue}
            handleResetFilter={handleResetFilter}
            selectedAmenities={selectedAmenities}
            handleAmenityChange={handleAmenityChange}
            handleLocationChange={handleLocationChange}
            handleStatusChange={handleStatusChange}
         />
      </>
   )
}

export default DropdownThree
