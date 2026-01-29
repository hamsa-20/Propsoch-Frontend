import NiceSelect from "@/ui/NiceSelect";

const Overview = () => {

   const selectHandler = (e: any) => { };

   return (
      <div className="bg-white card-box border-20">
         <h4 className="dash-title-three">Overview</h4>

         <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Property Title*</label>
            <input type="text" placeholder="Ex: 2 BHK Apartment in Whitefield" />
         </div>

         <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Description*</label>
            <textarea
               className="size-lg"
               placeholder="Provide a brief overview of the property, layout, nearby landmarks, and key highlights..."
            ></textarea>
         </div>

         <div className="row align-items-end">
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Category*</label>
                  <NiceSelect
                     className="nice-select"
                     options={[
                        { value: "1", text: "Apartment" },
                        { value: "2", text: "Independent House" },
                        { value: "3", text: "Villa" },
                        { value: "4", text: "Gated Community" },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder=""
                  />
               </div>
            </div>

            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Listing Type*</label>
                  <NiceSelect
                     className="nice-select"
                     options={[
                        { value: "1", text: "Buy" },
                        { value: "2", text: "Ready to Move" },
                        { value: "3", text: "Under Construction" },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder=""
                  />
               </div>
            </div>

            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Expected Price (₹)*</label>
                  <input type="text" placeholder="Ex: 85,00,000" />
               </div>
            </div>

            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Annual Property Tax (₹)</label>
                  <input type="text" placeholder="Optional" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Overview;
