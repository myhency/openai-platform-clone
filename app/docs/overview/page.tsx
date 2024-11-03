"use client";

import { useSelectedLayoutSegment } from "next/navigation";

export default function Page() {
    const segment = useSelectedLayoutSegment();

    return <h1>DOCS : {segment}</h1>;
}
