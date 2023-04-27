import React from "react";
import V3chart from "../components/V3chart";
import V1chart from "../components/V1chart";

export default function V1V3Graphs() {
    return (
        <div>
            <div>
                <V1chart />
            </div>
            <div>
                <h1>v2 tähän</h1>
            </div>
            <div>
                <V3chart />
            </div>
        </div>
    );

}