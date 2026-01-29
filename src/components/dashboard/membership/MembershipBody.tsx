import DashboardHeaderTwo from "@/layouts/headers/dashboard/DashboardHeaderTwo"
import Link from "next/link"
import Pricing from "./Pricing"

const MembershipBody = () => {
   return (
      <div className="dashboard-body">
         <div className="position-relative">
            <DashboardHeaderTwo title="Membership" />
            <h2 className="main-title d-block d-lg-none">Membership</h2>

            <div className="membership-plan-wrapper mb-20">
               <div className="row gx-0">
                  <div className="col-xxl-7 col-lg-6 d-flex flex-column">
                     <div className="column w-100 h-100">
                        <h4>Current Plan (Guided Home Buying)</h4>
                        <p>
                           Access expert guidance, verified property research, legal checks,
                           and personalised shortlisting support for buying a home in
                           Bangalore or Mumbai.
                        </p>
                     </div>
                  </div>

                  <div className="col-xxl-5 col-lg-6 d-flex flex-column">
                     <div className="column border-left w-100 h-100">
                        <div className="d-flex">
                           <h3 className="price m0">₹19,999</h3>
                           <div className="ps-4 flex-fill">
                              <h6>One-Time Plan</h6>
                              <span className="text1 d-block">
                                 Valid for your complete home-buying journey
                              </span>
                              <Link href="#" className="cancel-plan tran3s">
                                 Manage Membership
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <Pricing />
         </div>
      </div>
   )
}

export default MembershipBody
