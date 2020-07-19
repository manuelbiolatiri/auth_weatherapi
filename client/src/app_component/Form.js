import React from "react";

const Form = (props) => {
  return (
    <div className="container">
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <form onSubmit={props.getWeather}>
        <div className="row mb-5">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              name="city"
              className="form-control"
              placeholder="City"
            />
          </div>
          <div className="col-md-3 mt-2">
            <input
              type="text"
              name="country"
              className="form-control"
              placeholder="Country"
            />
          </div>
          <div className="col-md-4 mt-md-0 mt-2 text-md-left">
            <button className="btn btn-info">Show Weather</button>
          </div>
        </div>
      </form>
      </article>
    </div>
  );
};

export default Form;
