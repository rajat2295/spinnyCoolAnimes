import React, { memo } from 'react'
import './DebugInfo.css'

// Component that displayes the debug infor like URL and cached info ==>
const DebugInfo = ({ data = {} }) => {
    const {
        url, request_cached, request_cache_expiry
    } = data;
    return (
        <div className="debug">
            Requesting: <a rel="noopener noreferrer" target="_blank" id="search_query_url" href={url}>{url}</a><br />
    Request Cached: {!!request_cache_expiry && <span id="request_cached" style={{ color: request_cached ? '#5DAE28' : '#CE3C2D' }}>{request_cached ? 'True' : 'False'}</span>}<br />
        </div>
    )
}
export default memo(DebugInfo);