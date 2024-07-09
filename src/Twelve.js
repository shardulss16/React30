//Search Bar

import React, { useState } from 'react'

export default function Twelve({items}) {

    const [searchTerm, setSearchTerm] = useState('');

    const filteredItems = items.filter((item) =>items.toLowerCase().include(searchTerm.toLowerCase())
    )

  return (
    <div>
        <input type="text" placeholder='Search..' onChange={(e) => setSearchTerm(e.target.value)}/>
        <ul>
            {filteredItems.map((item,index) =>(
                <li key={index}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
  )
}
