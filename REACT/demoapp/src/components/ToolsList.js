import React from 'react'
import Person from './Person'

function ToolsList() {

    //const tools = ["html", "css", "js"]
    const persons = [
        {
            id: 1,
            name: "venkat",
            skill: "react"
        },
        {
            id: 2,
            name: "DeviPriya",
            skill: "Js"
        },
        {
            id: 3,
            name: "Krishna",
            skill: "Node"
        }
    ]

    const personList = persons.map( person => <Person key={person.id} person={person} ></Person>)

    return (
        <div> {personList} </div>

        // <div>
        //     { 
        //         tools.map( tool => <h2 key={tool}> { tool } </h2>)
        //     }
        // </div>
    )
}

export default ToolsList
