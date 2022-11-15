import { Text, View,StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class TimerClass extends Component {
    constructor(props) {        // 1. Initialize state value
        super(props);

        this.state = {
            time: new Date()
        }
    }

    tick = () => {
        this.setState({
            time: new Date()
        })
    }

    //3. When component was mount. Use for requesting some data from server
    componentDidMount = () => {
        this.time = setInterval(() => {
            this.tick()
        }, 1000);
    }

    //4. Whenever previuos props or state changed to current state or props then componentDidUpdate is called.
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.time !== this.state.time) {
            // console.log("4 componentDidUpdate");
        }
    }

    // 5. Whenever we leave component then componentWillUnmount is called. Use for realse resourses.
    componentWillUnmount = () => {
        clearInterval(this.time);
    }

    //2. Display (Whenever state value changed);
    render() {
        console.log(this.state.time);
        return (
            <View style={StyleSheet.body}>
            
                <Text style={styles.time}>{this.state.time.toLocaleTimeString()}</Text>
            </View>
        )
    }
}


  
// import { Text, View,StyleSheet } from 'react-native'
// import React, { Component } from 'react'

// export default class TimerClass extends Component {
//     constructor(props) {
//         super(props);

//          this.state = {
//             time:new Date()
//          }
//     }

//     tick = () =>{
//         this.setState({
//             time:new Date()
//         })
//     }

//     componentDidMount = () => {
//         this.time = setInterval(()=>{
//             this.tick()
//         },1000)
//     }
    
//     componentDidUpdate = (prevProps,prevState) =>{
//        if(prevState.time !== this.state.time){

//        }
//     }

//     componentWillUnmount =()=>{
//         clearInterval(this.time) 
//     }
    
//   render() {
//     console.log(this.state.time);
//     return (
//       <View style={StyleSheet.container}>
//         <Text style={styles.time}>{this.state.time.toLocaleTimeString()}</Text>
//       </View>
//     )
//   }
// }
// let styles =StyleSheet.create({
//     time:{
//         fontSize:50,
//         margin:90,
        
//     },
    
//     })


 

    



      
