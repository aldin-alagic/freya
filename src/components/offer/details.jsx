import React from "react";

export class Details extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h5 className="text-primary bg-light p-2">Details</h5>
        <div className="row justify-content-start px-4 mb-2">
          <div className="ml-1 mr-2">
            <span>Start date</span>
            <h6 className="text-center">10.05.2020.</h6>
          </div>
          <div className="mx-2">
            <span>Days of work</span>
            <h6 className="text-center">5</h6>
          </div>
        </div>
        <p className="text-justify px-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
          posuere lorem. Sed interdum facilisis ornare. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Fusce nec posuere lorem. Sed
          interdum facilisis ornare. Sed interdum facilisis ornare. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Fusce nec posuere lorem.
          Sed interdum facilisis ornare.
        </p>
      </React.Fragment>
    );
  }
}
