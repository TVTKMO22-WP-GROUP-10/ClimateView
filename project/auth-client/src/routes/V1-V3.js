import React from "react";
import V3chart from "../components/V3chart";
import V2chart from "../components/V2chart";
import V1chart from "../components/V1chart";

export default function V1V3Graphs() {
    return (
        <div>
            <div className="vchart">
                <V1chart />
            </div>
            <div className="vchart">
                <V2chart />
            </div>
            <div className="vchart">
                {V3chart()}
            </div>
        </div>
    );

}