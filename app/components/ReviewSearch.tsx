import React from "react";
import CheckboxGroup from "./CheckboxGroup";
import AdvancedFilters from "./AdvancedFilters";

const ratings = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];

const statuses = [
  { value: "1", label: "Pending" },
  { value: "2", label: "Approved" },
  { value: "3", label: "Scheduled" },
  { value: "4", label: "Published" },
  { value: "5", label: "Flagged" },
  { value: "6", label: "Archived" },
];

const hasComments = [
  { value: "1", label: "Yes" },
  { value: "2", label: "No" },
];

const profileTypes = [
  { value: "1", label: "Public" },
  { value: "2", label: "Enabled" },
  { value: "3", label: "Disabled" },
];

const profileStatuses = [
  { value: "1", label: "Live" },
  { value: "2", label: "Offline" },
];

const hasResponses = [
  { value: "1", label: "Yes" },
  { value: "2", label: "No" },
];

const destinations = [
  { value: "1", label: "Organization" },
  { value: "2", label: "DocScores" },
  { value: "3", label: "Vitals" },
];

function ReviewSearch() {
  // TODO: replace these placeholder values with actual data
  const statusOpts = [];
  const fStatus = [];
  const fRating = [];
  const fHasBody = [];
  const fProType = [];
  const fLive = [];
  const fHasResponse = [];
  const fMaturity = [];
  const validMaturities = [];
  const legacy = [];
  const fDest = [];
  const destOpts = [];
  const UC = { isSysAdmin: () => false };

  return (
    <div className="row mb-4">
      <div id="filters-box" className="col">
        <div className="card bg-light">
          <div className="card-body">
            <form className="md-form">
              {/* TODO: Replace placeholders with actual checkbox fields */}
              <div className="row auto-filter">
                <CheckboxGroup
                  idPrefix="fStatus"
                  name="Status"
                  options={statuses}
                  className="col-lg-7"
                />
                <CheckboxGroup
                  idPrefix="fRating"
                  name="Rating"
                  options={ratings}
                  className="col-lg-3"
                />
                <CheckboxGroup
                  idPrefix="fHasComments"
                  name="Has Comments"
                  options={hasComments}
                  className="col-lg-2"
                />
                {/* Other checkbox fields... */}
              </div>
              <div className="row auto-filter mt-2">
                <CheckboxGroup
                  idPrefix="fProfileType"
                  name="Profile Type"
                  options={profileTypes}
                  className="col-lg-7"
                />
                <CheckboxGroup
                  idPrefix="fProfileStatus"
                  name="Profile Status"
                  options={profileStatuses}
                  className="col-lg-3"
                />
                <CheckboxGroup
                  idPrefix="fHasResponse"
                  name="Has Response"
                  options={hasResponses}
                  className="col-lg-2"
                />
              </div>
              <div className="row auto-filter mt-2">
                <CheckboxGroup
                  idPrefix="fDestination"
                  name="Destination"
                  options={destinations}
                  className="col"
                />
              </div>
              <div className="row mt-2">
                <AdvancedFilters />
              </div>

              {/* More rows and checkbox fields... */}

              {UC.isSysAdmin() && (
                <div className="row auto-filter mt-2">
                  <div className="col">
                    {/* #checkboxFieldsInlineMd("Destination" "fDest" $destOpts $!fDest "<i className='fa fa-bolt text-muted' title='System Administrator Only'></i>") */}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSearch;
