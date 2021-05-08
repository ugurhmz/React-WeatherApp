import React, {Component} from 'react'



class DecideSport extends Component {

    constructor(props) {
        super(props)

        this.state = {
            latitude:null,
            error:''
        }

        //to be  called in one go 
        
        window.navigator.geolocation.getCurrentPosition(
            (position) => {

                console.log(position)
                this.setState({
                    latitude:position.coords.latitude
                })
            },
            (err) => {
                console.log(err)
                this.setState({
                   error:err.message
                })
            }
        )
    }

    componentDidMount() {
        console.log("componentDidMount worked")
        
    }

    componentDidUpdate(){
        console.log("componentDidUpdate worked...")
        
    }

    //clear state
    componentWillUnmount(){
        this.setState({
            latitude:0
        })
    }


//____________________________ Decide North South ______________________
    decideDoSport(lat) {
        const currentMonth = new Date().getMonth()

        if(lat < 0) {
            //güney
            if(currentMonth > 3 && currentMonth < 8){
                return "Go Ski "
            }
            else {
                return "Go swimming..."
            }

        }else if( lat > 0){
            //Kuzey

            if(currentMonth > 8 || currentMonth < 3){
                return "Go Ski "
            }
            else {
                return "Go swimming..."
            }
            
        }

}
    


 //______________________________________ render () ______________
    render() {

            //obj dest.
            const { latitude, error } = this.state  
            if(latitude){
                console.log(this.decideDoSport(latitude)) 
            }

            if(latitude !== 0 && !error) {
                return(
                    <div>
                        <h1>Latitude : {latitude}</h1>
                
                     </div>
                )

            } else if(latitude === 0 && error) {
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