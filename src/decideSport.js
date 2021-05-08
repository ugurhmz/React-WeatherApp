import React, { Component}  from 'react'



class DecideSport extends Component {

    state = {
        longitude:0  //Stati al, aşağıad setState ile güncelle
    }


    render() {

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position)
                this.setState({
                    longitude:position.coords.longitude
                });
            },
            (err) => {
                console.log(err)
            }
        );



        return(
            <div>
                    <h1>Decide Sport...</h1>
                    <p>longitude : {this.state.longitude}</p>
            </div>
        )
    }
}



export default DecideSport