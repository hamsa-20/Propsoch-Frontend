import AgencyFormTwo from "@/components/forms/AgencyFormTwo";
import NiceSelect from "@/ui/NiceSelect";
import Link from "next/link";

const AgencyDetailsSidebar = () => {

  const selectHandler = (e: any) => {};

  return (
    <div className="col-lg-4">
      <div className="theme-sidebar-one dot-bg p-30 ms-xxl-3 md-mt-60">

        {/* Contact */}
        <div className="tour-schedule bg-white p-30 mb-40">
          <h5 className="mb-40">Contact Form</h5>
          <AgencyFormTwo />
          <Link
            href="tel:+919876543210"
            className="btn-eight sm text-uppercase w-100 rounded-0 tran3s"
          >
            Call Now
          </Link>
        </div>

        {/* Search Agency */}
        <div className="agent-finder bg-white p-30">
          <h5 className="mb-40">Search Agency</h5>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-box-one mb-25">
              <div className="label">Agency Name</div>
              <input
                type="text"
                placeholder="Type Agency Name"
                className="type-input"
              />
            </div>

            <div className="input-box-one mb-25">
              <div className="label">Keyword</div>
              <input
                type="text"
                placeholder="Apartment, Villa, Plot"
                className="type-input"
              />
            </div>

            <div className="input-box-one mb-25">
              <div className="label">Location</div>
              <NiceSelect
                className="nice-select rounded-0"
                options={[
                  { value: "01", text: "Bengaluru – Indiranagar" },
                  { value: "02", text: "Bengaluru – Whitefield" },
                  { value: "03", text: "Bengaluru – Electronic City" },
                  { value: "04", text: "Mumbai – Andheri West" },
                  { value: "05", text: "Mumbai – Powai" },
                  { value: "06", text: "Mumbai – Bandra East" },
                ]}
                defaultCurrent={0}
                onChange={selectHandler}
                name=""
                placeholder=""
              />
            </div>

            <button className="btn-nine text-uppercase w-100 mb-10">
              Search
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AgencyDetailsSidebar;
