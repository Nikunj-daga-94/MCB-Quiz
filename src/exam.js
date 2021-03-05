import React,{Component, Fragment} from 'react';
import Header from './header';
import mockdata from '../mockserver/mock.json'

class Exam extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      questions:mockdata.questions,
      activeOne:1,
      activeValue:0,
      store:{}
     }
  }
  getInitialState = () =>{
    this.setState({
      questions:mockdata.questions,
      activeOne:1,
      activeValue:0,
      store:{}
    });
  }
  componentWillMount() {
    this.style={
          marginLeft:'100px',
          marginTop:'50px'
      }
 
  }
  onSubmit = (opt) => {
    const {store,activeValue,activeOne}=this.state;
    store[activeOne]=opt?activeValue:0;
    if(activeOne < 4){
     
    this.setState({
      store:store,
      activeValue:0,
      activeOne:activeOne+1
    })
  }
  else{
    this.setState({
      store:store,
      activeValue:0,
      activeOne:-1
    })
  }
  }
 
  onValueChanged = (options) => {
    this.setState({
      activeValue:options
    })
  }
  render() {
    
    const {state,onValueChanged}=this,question=state.questions.filter((questions,i)=> questions.id===this.state.activeOne)[0]; 
    debugger;
    return (
      <div >
      <Header/>
      {state.activeOne > -1 ?
        <div style={this.style}>
        <div>{question.question}

        {question.options.map(function(options,i){
            return (
              <div className="radio" key={i}>
              <label>
                  <input type="radio" name="optionsRadios"
                  checked={state.activeValue === options} 
                  onChange={()=>onValueChanged(options)}/>{options}
                  </label>
              </div>
            )
        })}
        </div> <button type="button" className="btn btn-sm btn-default" onClick={()=>this.onSubmit  (false)}>Skip </button>
        {"      "}
        <button type="button" className="btn btn-sm btn-default" onClick={()=>this.onSubmit(true)}>Submit</button>
      </div>
      :<Fragment><table>
        <tr>
            <th>
              Question
            </th>
            <th>
              Answer
            </th>
         </tr>
         {state.questions.map( elem =>{
           const anweredResult=state.store[elem.id];
         return <tr>
            <td>
              {elem.id}
            </td>
            <td>
              {anweredResult === 0?"Not Answered":elem.answer === state.store[elem.id] ? "Correct":"Wrong"}
            </td>
         </tr>
  })}
        </table>
        <button type="button" className="btn btn-sm btn-default" onClick={()=>this.getInitialState()}>Reset</button></Fragment>}

      </div>
    );
  }
}

export default Exam;
