import React from "react";

const Select = ({
    options = [],
    defaultValue = "Pilih salah satu",
    value,
    onChange,
}) => {
    return (
        <select
            label={defaultValue}
            value={value}
            onChange={onChange}
            className="select"
        >
            <option value="" disabled={true}>
                {defaultValue}
            </option>
            {options.map((opt, index) => (
                <option key={index} value={opt.id}>
                    {opt.name}
                </option>
            ))}
        </select>
    );
};

export default Select;
