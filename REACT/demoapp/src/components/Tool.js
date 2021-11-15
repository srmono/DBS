import React from 'react'

function Tool({toolName}) {
    if(toolName === "html"){
        throw new Error("It's not a tool")
    }
    return (
        <div>
            {toolName}
        </div>
    )
}

export default Tool
