import React from "react";

const ButtonAction = ({ name }) => {
    return (
        <div>
            <button className="btn bg-accent hover:bg-red-500 rounded-2xl transition-all ml-4 text-white font-body">
                {name}
            </button>
        </div>
    );
};

export default ButtonAction;
