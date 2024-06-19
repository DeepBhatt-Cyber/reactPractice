import { useState } from "react";

export const LiveTime = () => {
    const time = new Date();
    setInterval(() => {
        time = new Date();
    }, 1000)
    return time;
}