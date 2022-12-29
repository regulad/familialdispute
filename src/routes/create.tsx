import {Feud} from "../game/gameType";
import {decodeFeud, encodeFeud} from "../game/gameSerialization";
import {LoaderFunction, useLoaderData} from "react-router-dom";
import {useState} from "react";

type CreateLoadData = {
    game: Feud | null;
}

export const loader: LoaderFunction = ({ params }): CreateLoadData => {
    const serializedGame: string = params.gameSerial!!;
    if (serializedGame === "0") {
        return {
            game: null,
        };
    } else {
        return {
            game: decodeFeud(serializedGame),
        };
    }
}

export default function Create() {
    const { game }: CreateLoadData = useLoaderData() as CreateLoadData;
    const serializedGame: string | null = !!game ? encodeFeud(game) : null;

    return (
        <>
            <h1 className={"Title"}>Start a Familial Dispute</h1>
            <p>Current game code is <code>{serializedGame}</code>.</p>
        </>
    );
}
