import React, { memo } from 'react'
import './DebugInfo.css'

// Component that displayes the debug infor like URL and cached info ==>
const DebugInfo = ({ data = {} }) => {
    const {
        url, request_cached
    } = data;
    return (
        <div class="debug">
            Requesting: <a target="_blank" id="search_query_url" href="javascript:void(null)">{url}</a><br />
    Request Cached: <span id="request_cached" style={{ color: request_cached ? '#5DAE28' : '#CE3C2D' }}>{request_cached ? 'True' : 'False'}</span><br />
        </div>
    )
}
export default memo(DebugInfo);