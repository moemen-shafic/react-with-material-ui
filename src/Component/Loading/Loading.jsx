import React from 'react'

export const Loading = ({color="text-danger", size="spiier-grow"}) => {

    return (
        <div className={`${size} ${color}`} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}
