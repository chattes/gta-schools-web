import React from "react";
const School = ({ schools }) => {
  return (
    <div className="accordion" id="schoolsAcordion">
      {schools.map((school) => (
        <div key={school.id} className="accordion-item">
          <h2 className="accordion-header" id={school.id}>
            <button
              className="accordion-button"
              type="btn btn-link"
              data-bs-toggle="collapse"
              data-bs-target={`#bod${school.id}`}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div className="d-flex flex-column">
                <p className="text-sm-start fw-bold">{school.name}</p>
                <small>{school.address}</small>
              </div>
            </button>
          </h2>
          <div
            id={`bod${school.id}`}
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#schoolsAcordion"
          >
            <div className="accordion-body fs-6">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <strong>Board:</strong>
                  <p className="text-uppercase">{school.board}</p>
                </div>
                <div className="col-12 col-sm-6">
                  <strong>City:</strong>
                  <p className="">{school.city}</p>
                </div>
                <div className="col-12 col-sm-6">
                  <strong>EQAO Rating:</strong>
                  <p>{school.eqao_rating}</p>
                </div>
                <div className="col-12 col-sm-6">
                  <strong>Fraser Rating:</strong>
                  <p>{school.fraser_rating}</p>
                </div>
                <div className="col-12 col-sm-6">
                  <strong>Grades:</strong>
                  <p>{school.grades}</p>
                </div>
                <div className="col-12 col-sm-6">
                  <strong>Language:</strong>
                  <p className="text-uppercase">{school.language}</p>
                </div>
                <div className="col-12 col-sm-6">
                  <strong>Phone:</strong>
                  <p>{school.phone_number}</p>
                </div>

                <div className="col-12 col-sm-6">
                  <p>
                    <a href={school?.website || "https://www.tdsb.on.ca/"}>
                      More Information
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default School;
