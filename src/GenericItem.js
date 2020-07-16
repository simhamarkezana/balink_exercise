import React from "react";
const GenericItem = ({ placeholder, children, type = "text", ...otherProps }) => (
    <div>
        <input type={type} placeholder={placeholder} {...otherProps} />
    </div>
);

export default GenericItem;
