"use client"
import NiceSelect from "@/ui/NiceSelect";
import Image from "next/image";
import locationImage from "@/assets/images/dashboard/icon/icon_16.svg";

const AddressAndLocation = () => {

   const selectHandler = (e: any) => { };

   return (
      <div className="bg-white card-box border-20 mt-40">
         <h4 className="dash-title-three">Address & Location</h4>
         <div className="row">
            <div className="col-12">
               <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Address*</label>
                  <input type="text" placeholder="Indiranagar, Bengaluru, Karnataka" />
               </div>
            </div>

            <div className="col-lg-3">
               <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Country*</label>
                  <NiceSelect
                     className="nice-select"
                     options={[
                        { value: "india", text: "India" },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder=""
                  />
               </div>
            </div>

            <div className="col-lg-3">
               <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">City*</label>
                  <NiceSelect
                     className="nice-select"
                     options={[
                        { value: "bangalore", text: "Bangalore" },
                        { value: "mumbai", text: "Mumbai" },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder=""
                  />
               </div>
            </div>

            <div className="col-lg-3">
               <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Zip Code*</label>
                  <input type="number" placeholder="560038" />
               </div>
            </div>

            <div className="col-lg-3">
               <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">State*</label>
                  <NiceSelect
                     className="nice-select"
                     options={[
                        { value: "karnataka", text: "Karnataka" },
                        { value: "maharashtra", text: "Maharashtra" },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder=""
                  />
               </div>
            </div>
         </div>

         <div className="col-12">
            <div className="dash-input-wrapper mb-25">
               <label htmlFor="">Map Location*</label>
               <div className="position-relative">
                  <input type="text" placeholder="Bangalore, India" />
                  <button className="location-pin tran3s">
                     <Image src={locationImage} alt="" className="lazy-img m-auto" />
                  </button>
               </div>

               <div className="map-frame mt-30">
                  <div className="gmap_canvas h-100 w-100">
                     <iframe
                        className="gmap_iframe h-100 w-100"
                        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Bangalore, India&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                     </iframe>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AddressAndLocation
