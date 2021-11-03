import React from "react";

const Log = ({ log }) => {
    return (
        <tr>
            <td>{log.description}</td>
            <td>{log.operatedAt}</td>
        </tr>
    )
}

export default Log
