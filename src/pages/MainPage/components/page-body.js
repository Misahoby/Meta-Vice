import React from 'react';


export default function PageBody({children, className}) {
    return (
        <div className={"overflow-auto page-body " + className}>
            {children}
        </div>
    )
}
