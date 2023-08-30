import React from 'react'

function InputBtn({inputName, input, setInput, type}) {
    return (
        <>
            <article className='col'>
                <label htmlFor={`${inputName}`} className='leadText' >{inputName}</label>
                <input className='form-control' type={`${type}`} id={`${inputName}`} value={input} onChange={e => setInput(e.target.value)} required />
            </article>
        </>
    )
}

export default InputBtn
