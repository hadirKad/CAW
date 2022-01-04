import React from "react";
import De from './De';
import './De';
import './tp5.css';



export default class LancerDe extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            dice1 : 1,
            dice2 : 3,
            resultTxt : "Lancer les Dés",
            gameNumber: 10 ,
            score : 0 ,
        };
        this.lancer = this.lancer.bind(this);
       
    }

    reset(){
        this.setState({
            buttonTxt : "Lancer les Dés",
            gameNumber : 10 ,
            score : 0,
         });
    }

    lancer(e){


           let game_number = this.state.gameNumber;

           if(game_number > 0){
            const firstDice = Math.floor(Math.random() * 6);
            const secondDice = Math.floor(Math.random() * 6);
            let message = "";
            let score_txt = this.state.score;
            

            if(firstDice == secondDice){
                message = "You Win";
                score_txt = score_txt +1 ;
            }
            else{
                message = "try again";
                score_txt = score_txt - 1 ;
            }

            this.setState({
               dice1 : firstDice,
               dice2 : secondDice,
               resultTxt : message,
               gameNumber : game_number - 1 ,
               score : score_txt,
            });

           }
           else{
            let message = "reset the game";
            this.setState({
                resultTxt : message
            });
           }

            
    }

    render(){
        return(
           
            <center>
                <h2>  Round {this.state.gameNumber} </h2>

            <div className="dice-wrapper">
              <div className="dice-area">
                  <p>Dice 1</p>
                  <De num = {this.state.dice1}/>
              </div>
              <div className="dice-area">
                  <p>Dice 2</p>
                  <De num = {this.state.dice2}/>
              </div>
              </div>
              <p className="result">your score : {this.state.score}</p>
              <p className="result">{this.state.resultTxt}</p>
              <div></div>
              <button className="btn" onClick={this.lancer}> Roll the Dice </button>
              <button className="btn" onClick={this.reset.bind(this)}> Reset </button>
              </center>
            
            

        )
    }
}