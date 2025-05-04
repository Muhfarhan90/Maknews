import React from "react";

const Select = ({
    options = [],
    defaultValue = "Pilih salah satu",
    value,
    onChange,
    label = "Title",
}) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="select" className="text-xs font-semibold">{label}</label>
            <select
                id="select"
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
        </div>
    );
};

export default Select;
