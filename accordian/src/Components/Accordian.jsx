import React from 'react'
import { useState } from 'react'
import data from './data';


const Accordian = () => {

    const [selected, setselected] = useState(null);

    function handleSingleSelection(getCurrentId) {
        console.log(getCurrentId);
        setselected(getCurrentId === selected ? null : getCurrentId)
    }
    console.log(selected);

  return ( 
    <div className='wrapper'>
        <div className='accordian'>
        <h1>ACCORDIAN :-</h1>
        {
            data && data.length > 0 ?
            data.map((dataItems) => <div className='item'>
                <div onClick={()=> handleSingleSelection(dataItems.id)} className='title'>
                    <h3>{dataItems.question}</h3>
                    <span>+</span>
                </div>
                {
                    selected === dataItems.id ? 
                    <div className='content'>
                        {dataItems.answer}
                    </div>
                    : null
                }
            </div>)
             : <div>No data found !</div>
        }
        </div>
    </div>
  )
}

export default Accordian;