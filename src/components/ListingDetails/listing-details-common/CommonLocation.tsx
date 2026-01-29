
const CommonLocation = () => {
   return (
      <>
         <h4 className="mb-40">Location</h4>
         <div className="bg-white shadow4 border-20 p-30">
            <div className="map-banner overflow-hidden border-15">
               <div className="gmap_canvas h-100 w-100">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62219.60408909848!2d77.54416706330913!3d12.97159871722867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6f%3A0x8e5e4b3f5c9d3c5!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1699764452737"

                     width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade" className="w-100 h-100">
                  </iframe>
               </div>
            </div>
         </div>
      </>
   )
}

export default CommonLocation;
