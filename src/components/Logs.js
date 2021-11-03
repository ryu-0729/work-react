import React, { useContext } from "react"

import Log from './Log'
import AppContext from "../contexts/AppContext"

const Logs = () => {
    const { state } = useContext(AppContext)
    return (
        <>
            <h4>操作ログ一覧</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>内容</th>
                        <th>日時</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.logs.map((log, index) => {
                            return <Log key={index} log={log} />
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Logs
