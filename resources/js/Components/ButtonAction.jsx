import React from "react";

const ButtonAction = ({ name, type = "", disabled="" }) => {
    return (
        <div>
            <button
                className="btn bg-accent hover:bg-red-500 rounded-2xl transition-all text-white font-body py-4 px-4"
                type={type}
                disabled={disabled}
            >
                {name}
            </button>
        </div>
    );
};

export default ButtonAction;
