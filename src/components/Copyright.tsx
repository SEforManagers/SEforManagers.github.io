import React from "react";

type CopyrightProps = {
    name: string;
    startYear: number;
    endYear?: number;
};

function Copyright({ name, startYear, endYear }: CopyrightProps) {
    if (!endYear) {
        endYear = new Date().getFullYear();
    }

    if (startYear === endYear) {
        return (
            <>
                &copy; {startYear} {name}
            </>
        );
    }

    return (
        <>
            &copy; {startYear} - {endYear} {name}
        </>
    );
}

export default Copyright;