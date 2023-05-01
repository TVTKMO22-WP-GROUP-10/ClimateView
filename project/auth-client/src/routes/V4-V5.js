import React from "react";
import V5chart from "../components/V5chart"
import V4chart from "../components/V4chart"

export default function V4V5Graphs() {
    return (
        <div>
            <div>
                {V4chart()}
            </div>
            
            <div>
                <V5chart />
            </div>
        </div>
    );

}