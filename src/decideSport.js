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

            //obj dest.
            const { longitude, error } = this.state  

            if(longitude !== 0 && !error) {
                return(
                    <div>
                        <h1>Longitude : {longitude}</h1>
                
                     </div>
                )

            } else if(longitude === 0 && error) {
                    return(
                        <p style={{
                            color:'red',
                            fontSize:'1rem'
                        }}>{error}</p>
                    )
            }

            return(
                <div>
                    <h1>Loading.....</h1>
                </div>

            )          
         
    };
  
}


export default DecideSport