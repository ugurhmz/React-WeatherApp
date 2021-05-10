import React from 'react'




const Loader = ({text}) => {

    return(
        <div className="ui segment" style={{height:'100vh'}}>
        <div className="ui active dimmer">
          <div className="ui text loader">{text}</div>
        </div>
        <p></p>
      </div>

    )

}

Loader.defaultProps = {
    text:'Loading..'
}

export default Loader