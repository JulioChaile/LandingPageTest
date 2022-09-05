import React from "react";

function ItemInfo (props) {
    const { title, info, icon } = props

    return <div className="d-flex mx-4 focus-element">
        <div className="mx-4">
            <img height={75} src={icon + '.png'} alt={icon} />
        </div>

        <div className="d-flex flex-column justify-content-center">
            <div className="h4 text-bold">{ title }</div>
            <div>{ info }</div>
        </div>
    </div>
}

export default ItemInfo