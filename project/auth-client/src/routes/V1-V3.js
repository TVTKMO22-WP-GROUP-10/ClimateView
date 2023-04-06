import React from "react";
import V3chart from "../components/V3chart";

export default function V1V3Graphs() {
    return (
        <div>
            <div>
                v1 tähän
            </div>
            <div>
                v2 tähän
            </div>
            <div>
                {V3chart()}
            </div>
        </div>
    );

}