import React from "react";
import {Form, Link} from "react-router-dom";

export default function Index() {
    return (
        <div className={"Start-page"}>
            <h1 className={"Title"}>Familial Dispute</h1>
            <h2>Select an action:</h2>
            <h3>Create a game</h3>
            <p>
                <Link to={"/create/0"} className={"Button-link"}>
                    Open blank game creator
                </Link>
                <Form action={"/create/:gameSerial"}>
                    <input
                        id={"gameSerial"} // query?
                        aria-label={"Enter game code to edit"}
                        placeholder={"Enter game code to edit"}
                        type={"text"}
                        name={"gameSerial"} // also query
                    />
                </Form>
            </p>
            <h3>Play game</h3>
            <div className={"Paragraph-margin"}>
                <Form action={"/game/:gameSerial"}>
                    <input
                        id={"gameSerial"} // query?
                        aria-label={"Enter game code to play"}
                        placeholder={"Enter game code to play"}
                        type={"text"}
                        name={"gameSerial"} // also query
                    />
                </Form>
            </div>
        </div>
    );
}
