import React from "react";

const Address = (props) => {
  return (
    <>
      <h3>
        {props.apartmentNuber} {props.buildingNumber} {props.streetName}
      </h3>
      <h3>
        {props.city || "Paris"}
        {props.country || "Tunisia"} {props.zipCode || "75001"}
        {props.children}
      </h3>
    </>
  );
};

// Address.defaultProps = {
//   country: "France",
// };
export default Address;
