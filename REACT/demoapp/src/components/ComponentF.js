import React from 'react'
import { UserContext, ProjectContext } from '../App'

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ProjectContext.Consumer>
                                {
                                    project => {
                                        return <div> User Context is {user}, his project is {project} </div>
                                    }
                                }
                            </ProjectContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
