import React from 'react'

const validate = props => {

    let message = 'long enough'

    if (props.inputLength < 6) message = 'too short!!!'

    return (
        <div>
            <div>{message}</div>
        </div>
    )
}

export default validate
