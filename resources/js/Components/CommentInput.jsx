import React from "react";
import ButtonAction from "./ButtonAction";
import HeadingSection from "./HeadingSection";

const CommentInput = ({ user, value, onChange, disabled }) => {
    const isLoggedIn = !!user;
    return (
        <div>
            <HeadingSection heading="Tulis Komentar" />
            <div className="rounded-2xl flex items-center gap-4 p-5 border-2 text-neutral-dark">
                <div className="flex flex-col gap-2 w-full">
                    <input
                        type="text"
                        placeholder={
                            isLoggedIn
                                ? "Tulis Komentar..."
                                : "Login untuk menulis komentar"
                        }
                        value={value}
                        onChange={onChange}
                        className="w-full p-2 rounded-md border mt-1"
                        disabled={disabled}
                    />
                </div>
                <ButtonAction
                    name={ user ? "Kirim" : "Login"}
                    type="submit"
                    disabled={disabled}
                />
            </div>
        </div>
    );
};

export default CommentInput;
