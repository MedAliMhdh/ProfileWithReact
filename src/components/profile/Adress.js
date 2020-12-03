import React from "react";
import PropTypes from "prop-types";

const Address = (props) => {
  return (
    <>
      <h3>
        {props.apartmentNuber || "00"} {props.buildingNumber || "00"}
        {props.streetName || "street Name"}
      </h3>
      <h3>
        {props.city || "City"}
        {props.country || "Country"} {props.zipCode}
        {props.children}
      </h3>
    </> // here we have set props and default values
  );
};

/*PropTypes Validator*/

Address.propTypes = {
  apartmentNuber: PropTypes.number.isRequired,
  buildingNumber: PropTypes.number.isRequired,
  streetName: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  zipCode: PropTypes.number.isRequired,
  children: PropTypes.number,
};

/*Setting default props value separatly */

// Address.defaultProps = {
//   country: "France",
// };
export default Address;
