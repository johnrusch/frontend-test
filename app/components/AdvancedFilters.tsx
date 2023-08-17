import React from 'react';

const AdvancedFilters: React.FC = () => {
  return (
    <div id="filter-custom-box" className="col">
      <h6>Advanced Filters</h6>
      <div id="fieldDefFilterDisplay">
        <div className="fdf-display">
          <div className="fdf-row row mb-2">
            <div className="col-2 pr-2">
              <select className="sel-field form-control" name="field">
                <option value="-1">Select a field</option>
                <option value="rdate">Review Date</option>
                <option value="rpub">Publish Date</option>
                <option value="rcreated">Created Date</option>
                <option value="rsourceid">Review Source ID</option>
              </select>
            </div>
            <div className="filter-container d-flex w-35">
              <div className="col-6 pl-0 pr-2">
                <div className="date-input-con input-group">
                  <input
                    className="inp-value form-control d-inline-block gldp-el"
                    type="date"
                    name="value"
                    placeholder="Start Date"
                    autoComplete="off"
                    data-gldp-id="gldp-7016022051"
                  />
                </div>
              </div>
              <div className="col-6 px-0">
                <div className="date-input-con input-group">
                  <input
                    className="inp-value2 form-control d-inline-block gldp-el"
                    type="date"
                    name="value2"
                    placeholder="End Date"
                    autoComplete="off"
                    data-gldp-id="gldp-1446518459"
                  />
                </div>
              </div>
            </div>
            <button className="fdf-btn-add btn btn-link text-secondary pr-0">
              <i className="fa fa-plus"></i>
            </button>
            <button className="fdf-btn-remove btn btn-link text-secondary px-1">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
      <button id="filter-fields-btn" className="btn btn-primary mt-2">
        Filter Results
      </button>
    </div>
  );
};

export default AdvancedFilters;
