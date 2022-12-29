import {Feud} from "./gameType";

export function encodeFeud(game: Feud): string {
    const json: string = JSON.stringify(game);
    const buffer: Buffer = Buffer.from(json);
    return buffer.toString("base64");
}

export function decodeFeud(serial: string): Feud {
    const buffer: Buffer = Buffer.from(serial, "base64");
    const json: string = buffer.toString("utf8");
    return JSON.parse(json);
}
