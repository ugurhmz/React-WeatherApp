import React, {Component} from 'react'



class DecideSport extends Component {

    constructor(props) {
        super(props)

        this.state = {
            longitude:0,
            error:''
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
                    this.setState({
                       error:err.message
                    })
                }
            )
  
            return(
                <div>
                    <h1>Longitude : {this.state.longitude}</h1>
                    <p style={{
                        color:'red',
                        fontSize:'1rem'
                    }}>{this.state.error}</p>
                </div>
            ) 
    };
  
}


export default DecideSport