import React from 'react'
import './DebugInfo.css'

const DebugInfo = ({ data = {} }) => {
    const {
        url, request_cached
    } = data;
    return (
        <div class="debug">
            Requesting: <a target="_blank" id="search_query_url" href="javascript:void(null)">{url}</a><br />
    Request Cached: <span id="request_cached" style={{ color: request_cached ? '#5DAE28' : '#CE3C2D' }}>{request_cached ? 'True' : 'False'}</span><br />
            {/* Time taken: <span id="request_time_taken">-</span> */}
        </div>
    )
}
export default DebugInfo;