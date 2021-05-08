import React, {Component} from 'react'



class DecideSport extends Component {

    constructor(props) {
        super(props)

        this.state = {
            longitude:0
        }
    }

 //______________________________________ render () ______________
    render() {

            window.navigator.geolocation.getCurrentPosition(
                (position) => {

                    console.log(position)
                    this.setState({
                        longitude:position.coords.longitude
                    })
                },
                (err) => {
                    console.log(err)
                }
            )
  
            return(
                <div>
                    <h1>Longitude : {this.state.longitude}</h1>
                    
                </div>
            ) 
    };
  
}


export default DecideSport