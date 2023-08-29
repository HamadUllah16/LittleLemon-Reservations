import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Select({btnState, btnSetState, btnContext, options}) {
    const renderLists = options.map((item, index)=>{
        return(
            <option key={index}>{item}</option>
        )
    })
    return (
        <>
            <article className='col'>
                <label className='leadText'>{btnContext}</label>
                <section htmlFor={`${btnContext}`} className='dropDown rounded-3'>
                    <select className='border rounded-3' value={btnState} onChange={e => btnSetState(e.target.value)} id={`${btnContext}`} >
                        {renderLists}
                    </select>
                    <article className='arrowHead'>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </article>
                </section>
            </article>
        </>
    )
}

export default Select
