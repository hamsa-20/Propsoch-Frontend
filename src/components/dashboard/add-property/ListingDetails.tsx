import NumberNiceSelect from "@/ui/NumberNiceSelect";

const ListingDetails = () => {

   const selectHandler = (e: any) => { };

   return (
      <div className="bg-white card-box border-20 mt-40">
         <h4 className="dash-title-three">Listing Details</h4>
         <div className="row align-items-end">
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Built-up Area (sq ft)*</label>
                  <input type="text" placeholder="Ex: 1,250 sq ft" />
               </div>
            </div>

            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Bedrooms*</label>
                  <NumberNiceSelect className="nice-select"
                     options={[
                        { value: 1, text: 0 },
                        { value: 2, text: 1 },
                        { value: 3, text: 2 },
                        { value: 4, text: 3 },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>

            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Bathrooms*</label>
                  <NumberNiceSelect className="nice-select"
                     options={[
                        { value: 1, text: 0 },
                        { value: 2, text: 1 },
                        { value: 3, text: 2 },
                        { value: 4, text: 3 },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>

            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Kitchens*</label>
                  <NumberNiceSelect className="nice-select"
                     options={[
                        { value: 1, text: 0 },
                        { value: 2, text: 1 },
                        { value: 3, text: 2 },
                        { value: 4, text: 3 },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>

            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Car Parking</label>
                  <NumberNiceSelect className="nice-select"
                     options={[
                        { value: 1, text: 1 },
                        { value: 2, text: 2 },
                        { value: 3, text: 3 },
                        { value: 4, text: 4 },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>

            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Parking Area (sq ft)</label>
                  <input type="text" placeholder="Ex: 120 sq ft" />
               </div>
            </div>

            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Year of Construction*</label>
                  <input type="text" placeholder="Ex: 2018" />
               </div>
            </div>

            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Number of Floors*</label>
                  <NumberNiceSelect className="nice-select"
                     options={[
                        { value: 1, text: 0 },
                        { value: 2, text: 1 },
                        { value: 3, text: 2 },
                        { value: 4, text: 3 },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>

            <div className="col-12">
               <div className="dash-input-wrapper">
                  <label htmlFor="">Property Description*</label>
                  <textarea
                     className="size-lg"
                     placeholder="Provide a brief description of the property, layout, amenities, and any highlights..."
                  ></textarea>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ListingDetails;
