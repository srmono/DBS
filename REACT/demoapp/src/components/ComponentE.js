import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import { UserContext, ProjectContext } from '../App'

function ComponentE() {

    const user = useContext(UserContext);
    const project = useContext(ProjectContext);

    return (
        <div>
            <h2> User is {user} , his project is {project} </h2>
            <ComponentF />
        </div>
    )
}

export default ComponentE
