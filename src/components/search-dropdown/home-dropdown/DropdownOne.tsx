import NiceSelect from "@/ui/NiceSelect";

const DropdownOne = ({ style }: any) => {

   const selectHandler = (e: any) => { };

   const searchHandler = () => {
      window.location.href = '/listing_0';
   };

   return (
      <form onSubmit={(e) => { e.preventDefault(); searchHandler(); }}>
         <div className="row gx-0 align-items-center">
            <div className="col-xl-3 col-lg-4">
               <div className="input-box-one border-left">
                  <div className="label">I’m looking to...</div>
                  <NiceSelect className={`nice-select ${style ? "fw-normal" : ""}`}
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
            <div className={`${style ? "col-xl-3" : "col-xl-4"} col-lg-4`}>
               <div className="input-box-one border-left">
                  <div className="label">Location</div>
                  <NiceSelect className={`nice-select location ${style ? "fw-normal" : ""}`}
options={[
  { value: "bangalore", text: "Bangalore" },
  { value: "mumbai", text: "Mumbai" },
]}
                     defaultCurrent={0}
                     onChange={selectHandler}
name="location"
placeholder="Select city"
                  />
               </div>
            </div>
            <div className="col-xl-3 col-lg-4">
               <div className="input-box-one border-left border-lg-0">
                  <div className="label">Price Range</div>
                  <NiceSelect
                     className={`nice-select ${style ? "fw-normal" : ""}`}
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
            <div className={`${style ? "col-xl-3" : "col-xl-2"}`}>
               <div className="input-box-one lg-mt-10">
                  <button className={`fw-500 tran3s ${style ? "w-100 tran3s search-btn-three" : "text-uppercase search-btn"}`}>{style ? "Search Now" : "Search"}</button>
               </div>
            </div>
         </div>
      </form>
   );
};

export default DropdownOne;
