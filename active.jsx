import React from "react";

function Active(){
    return(
        <div>
            <h1>Active Courses</h1>
            <div class="Filters">
                <div class="Filteritem">
                    <label>Filter by:</label>
                    <select>
                        <option value="/">All Courses</option>
                        <option value="/">2020</option>
                        <option value="/">2019</option>
                    </select>
                </div>
                <div class="Filteritem">
                    <label>Sort by:</label>
                    <select>
                        <option value="/">Alphabetically, A-Z</option>
                        <option value="/">Alphabetically, Z-A</option>
                        <option value="/">Date, new to old</option>
                        <option value="/">Date, old to new</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Active;
