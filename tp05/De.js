import React from "react";
import one from './images/one.png';
import two from './images/two.png';
import three from './images/three.png';
import four from './images/four.png';
import five from './images/five.png';
import six from './images/six.png';

export default class De extends React.Component{


    constructor(props) {
        super(props);
        this.state = { 
            num : props.num, 
        };
        
    }



    render(){

        if(this.props.num == 0){
            return <img src= {one}  style={{ margin:"20px"}} ></img> ;
        }
        else{
            if(this.props.num == 1){
                return <img src= {two}  style={{ margin:"20px"}} ></img> ;
            }
            else{
                if(this.props.num == 2){
                    return <img src= {three}  style={{ margin:"20px"}} ></img> ;
                }
                else{
                    if(this.props.num == 3){
                        return <img src= {four}  style={{ margin:"20px"}} ></img> ;
                    }
                    else{
                        if(this.props.num == 4){
                            return <img src= {five}  style={{ margin:"20px"}} ></img> ;
                        }
                        else{
                            if(this.props.num == 5){
                                return <img src= {six}  style={{ margin:"20px"}} ></img> ;
                            }
                            else{
                                return <img src= "!!!" style={{ margin:"20px"}} ></img> ;
                            }
                        }
                    }
                }
            }
        }
    
    }
}