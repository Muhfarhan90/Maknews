import React from "react";

const ButtonAction = ({ name, type = "", disabled="", onClick="" }) => {
    return (
        <div>
            <button
                className="btn bg-secondary hover:bg-secondary/80 rounded-lg transition-all text-white font-body py-4 px-4"
                type={type}
                disabled={disabled}
                onClick={onClick}
            >
                {name}
            </button>
        </div>
    );
};

export default ButtonAction;
