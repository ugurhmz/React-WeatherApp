import React from 'react'
import ReactDOM from 'react-dom'
import DecideSport from './decideSport'

class App extends React.Component {

    render() {

        return (
            <div style={{
                padding:'1em 3em'
            }}>
                <DecideSport/>
            </div>
            
            )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')

)