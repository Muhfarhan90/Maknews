import React from "react";

const ButtonAction = ({ name }) => {
    return (
        <div>
            <button className="btn bg-accent hover:bg-red-500 rounded-2xl transition-all text-white font-body py-4 px-4">
                {name}
            </button>
        </div>
    );
};

export default ButtonAction;
