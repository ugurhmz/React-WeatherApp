import React, {Component} from 'react'
import  faker  from 'faker'
import "./headerstyle.css"
import Loader from "./loader"
class DecideSport extends Component {


//____________________________________ CONSTRUCTOR _____________________________    
    constructor(props) {
        super(props)

        this.state = {
            latitude:null,
            error:'',
           
        }

       
//_______________________ GEOLOCATION & to be  called in one go_________________        
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
//___________________________ componentMethod...________________________
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


   
   


//____________________________  decideDoSport() North South ______________________
    decideDoSport(lat) {
        const currentMonth = new Date().getMonth()
      


        if(lat < 0) { //SOUTHERN
                if(currentMonth > 3 && currentMonth < 8){
                    return ['Go Ski','winter']
                    
                }
                else {
                    return ["Go Swim","sun"]
                }

        }
        
        else if( lat > 0){ //NORTHERN
           

                if(currentMonth > 8 || currentMonth < 3){
                    return ['Go Ski','winter']
                 
                }
                else {
                    
                    return ["Go Swim","sun"]
                }
                
        }

}
    


 //______________________________________ render () ____________________
    render() {

            //obj dest.
            const { latitude, error } = this.state  

            if(latitude  && !error) {
                const sport = this.decideDoSport(latitude)
                console.log("SPORT:"+sport)
                return(
                    <div className={`${sport[1]} headerstyle myalign`}>    
                  
                       <h2 className="ui header" >
                            <img src={faker.image.avatar()} alt="avatar" />
                            <div className="content">
                                 {faker.name.firstName()}  {sport[0]} 
                                 
                                <div className="sub header">{faker.commerce.productDescription()}</div>
                            </div>
                            </h2>

                
                     </div>
                )

            } else if(!latitude && error) {
                    return(
                        <p style={{
                            color:'red',
                            fontSize:'1rem'
                        }}>{error}</p>
                    )
            }

            return(
               <Loader text="Loading my friend..."/>

            )          
         
    };
  
}



export default DecideSport