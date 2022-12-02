import React from 'react'

const NovedadItem = (props) => {
    const { title, description, body } = props

    return (
        <div className="notes">
            <h4 className='h4_note'>{title}</h4>
            <p className='p_note'>{description}</p>
            <div dangerouslySetInnerHTML={{
                __html: body
            }} />
            <hr />
        </div>

    )
}

export default NovedadItem;