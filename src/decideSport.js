import React, {Component} from 'react'
import  faker  from 'faker'
import "./headerstyle.css"

class DecideSport extends Component {


//____________________________________ CONSTRUCTOR _____________________________    
    constructor(props) {
        super(props)

        this.state = {
            latitude:null,
            error:'',
            mytext:null,
            iconName:null
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


   
    summer = () => {
        return {
            mytext: "Go Swim",
            iconName: 'sun'
        }
    }

     winter = () => {
        return {
            mytext: "Go Ski",
            iconName: 'snowflake'
        }
    }


//____________________________  decideDoSport() North South ______________________
    decideDoSport(lat) {
        const currentMonth = new Date().getMonth()
      


        if(lat < 0) { //SOUTHERN
                if(currentMonth > 3 && currentMonth < 8){
                    return this.winter().mytext
                }
                else {
                    return  this.summer().mytext
                }

        }
        
        else if( lat > 0){ //NORTHERN
           

                if(currentMonth > 8 || currentMonth < 3){
                    return this.winter().mytext
                }
                else {
                    return   this.summer().mytext
                }
                
        }

}
    


 //______________________________________ render () ____________________
    render() {

            //obj dest.
            const { latitude, error } = this.state  

            if(latitude  && !error) {
                const sport = this.decideDoSport(latitude)

                return(
                    <div className="headerstyle">    
                  
                       <h2 className="ui header" >
                            <img src={faker.image.avatar()} alt="avatar" />
                            <div className="content">
                                 {faker.name.firstName()}  {sport} 
                                 
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
                <div>
                    <h1>Loading.....</h1>
                </div>

            )          
         
    };
  
}


export default DecideSport