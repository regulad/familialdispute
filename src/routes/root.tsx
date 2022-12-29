import React from "react";
import {Outlet} from "react-router-dom";

export default function Root() {
    return (
        <>
            <div className={"Background"} />
            <div className={"Root-box"}>
                <div className={"Game-box"}>
                    <Outlet />
                </div>
            </div>
        </>
    );
}
