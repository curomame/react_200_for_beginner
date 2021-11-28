import React, {Component} from 'react';

class R008_LifecycleEx extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps Call'+props.prop_value);
    return {tmp_state : props.prop_value}
  }

  constructor(props) {
    super(props);
    this.state = {};
    console.log('1. constructor Call');
  }
  
  componentDidMount(){
    console.log('4. componentDidMount Call');
    console.log('5. tmp_state : '+this.state.tmp_state);
    this.setState({tmp_state2 : true});
  }
  //가장 마지막에 실행되는 함수
  //setState함수는 변수의 선언과 초기화를 동시에 실행
  
  shouldComponentUpdate(props, state){
    console.log('6. shouldComponentupdate Call / tmp_state2 = '+ state.tmp_state2);
    return state.tmp_state2
  }
  //state의 변경이 발생했기 때문에 실행된 함수이며
  //return이 true이기 때문에 실행이 되며
  //render()함수를 한 번 더 호출하는 역할을 함

  // => 나중에 useEffect로 변경해보기!

  render(){
    console.log(('3. render Call'));
    return (
      <h2>[THIS IS shouldComponentUpdate FUNCTION]</h2>
    )
  }
}

export default R008_LifecycleEx;
