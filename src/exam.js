import React,{Component, Fragment} from 'react';
import Header from './header';
import mockdata from '../mockserver/mock.json'

class Exam extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      questions:mockdata.questions,
      activeOne: 1 ,
      activeValue: 0 ,
      store:{},
      seconds:mockdata.Time
     },
     this.timer=0;
  }
  getInitialState = () =>{
    this.setState({
      questions:mockdata.questions,
      activeOne:1,
      activeValue:0,
      store:{},
      seconds:mockdata.Time
    });
  }
  componentWillMount() {
    this.style={
          marginLeft:'100px',
          marginTop:'50px'
      }
 
  }
  componentDidMount(){
    this.startTimer();
  }
  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(()=>this.countDown(this), 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    // Check if we're at zero.
    if (seconds == 0) { 
      
      this.onSubmit(true);
    }
    else{
      this.setState({
        seconds: seconds,
      });
    }
  }
  onSubmit = (opt) => {
    const {store,activeValue,activeOne}=this.state;
    store[activeOne]=opt?activeValue:0;
    if(activeOne < 4){
     this.startTimer();
    this.setState({
      store:store,
      activeValue:0,
      activeOne:activeOne+1,
      seconds:mockdata.Time
    })
  }
  else{
    clearInterval(this.timer);
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
          <div className="myDiv">{`Timer : ${this.state.seconds} seconds`}</div>
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
        </div> <button type="button" className="btn btn-sm btn-default" onClick={()=>this.onSubmit(false)}>Skip </button>
        {"      "}
        <button type="button" className="btn btn-sm btn-default" onClick={()=>this.onSubmit(true)}>Submit</button>
      </div>
      :<div><table>
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
                  {anweredResult === 0?"Not Answered":elem.answer === anweredResult ? "Correct":"Wrong"}
                </td>
            </tr>
          })}
        </table>
        <button type="button" className="btn btn-sm btn-default" onClick={()=>this.getInitialState()}>Reset</button></div>}

      </div>
    );
  }
}

export default Exam;
