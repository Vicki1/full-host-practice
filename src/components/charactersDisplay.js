import React,{Component} from 'react';
import axios from 'axios';

export default class CharactersDisplay extends Component{
    constructor(props){
        super(props)

        this.state={
            characters: 'no characters yet'
        }
        this.handleClick=this.handleClick.bind(this)
    }

handleClick(){
    console.log('click handled')
    axios.get('/getAllCharacters')
    .then((results)=>{
        console.log('characters recieved',results.data)
        this.setState({characters: results.data})
    })
    .catch((err)=>console.log('error see getAllCharacters axios in characterDisplay.js',err))
}





    render(){
        return(
            <div>
                <button onClick={this.handleClick}>get Characters</button><br/>
                {this.state.characters[0].display_name} says:<br/>
                "{this.state.characters[0].profile_id}"<br/><br/>
                
                {this.state.characters[1].display_name} says:<br/>
                "{this.state.characters[1].profile_id}"<br/><br/>

                {this.state.characters[2].display_name} says:<br/>
                "{this.state.characters[2].profile_id}"<br/><br/>
            </div>
        )
    }
}