import React from "react";
import V3chart from "../components/V3chart";
import V2chart from "../components/V2chart";
import V1chart from "../components/V1chart";

export default function V1V3Graphs() {
    return (
        <div>
            <div>
                <V1chart />
            </div>
            <div>
                <V2chart />
            </div>
            <div>
                <V3chart />
            </div>
        </div>
    );

}