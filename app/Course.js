// Employee:  Manager 100000, Team Leader 80000, Developer 50000, Tester 30000
// Salary:  Count Gross Salary < 50000     10% Bounus    Basic Salary, Bonus, Total Salary

// import { View, Text, TouchableOpacity ,StyleSheet} from 'react-native'
// import React, { useState } from 'react'
// import Sub_course from './Sub_course';

// export default function salary() {
//     const [salary, setsalary] = useState('');

//     const handlesalary = (value) => {
//         console.log(value);
//         setsalary(value)
//     }


//     return (
//         <View  style={StyleSheet.container}>
//             <TouchableOpacity onPress={() => handlesalary(100000)}>
//                 <Text   style={styles.salary} >Manager</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handlesalary(80000)}>
//                 <Text    style={styles.salary}>TeamLeader</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handlesalary(50000)}>
//                 <Text   style={styles.salary} >Developer</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handlesalary(30000)}>
//                 <Text    style={styles.salary}>Tester</Text>
//             </TouchableOpacity>

//             <Text style={styles.salary}>Basic salary : {salary}</Text>
           

//             <Sub_course s={salary} /> 

//         </View>
//     )
// }


import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Sub_course from './Sub_course';

export default function Course() {
    const [Course, setcourse] = useState('');

    const handlecourse = (v) => {
        setcourse(v);

    }
    return (

        <View style={StyleSheet.container}>
            <View style={styles.body}>
            <TouchableOpacity onPress={() => handlecourse('PROGRAMING')} style={styles.btn}>
                <Text  style={styles.Text}>PROGRAMING</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handlecourse('DISINING')} style={styles.btn1}>
                <Text style={styles.Text}>DISINING</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handlecourse('ANIMATION')} style={styles.btn2}>
                <Text style={styles.Text}>ANIMATION</Text>
            </TouchableOpacity>


            <Text style={styles.Text1}>Course : {Course}</Text>
            <Sub_course course={Course} />
            </View>
        </View>
    )
}
let styles = StyleSheet.create({
    body:{
         padding:20,
        //  backgroundColor:'#ddd',
        
       
      
    },
    salary:{
        padding:20,
        backgroundColor:'#58D68D' ,
        fontSize: 20,
        margin:20
    },
    Text: {
        padding:20,
        backgroundColor:'#58D68D' ,
        fontSize: 20,
    
        
       

    },
    Text1:{
        padding:20,
        backgroundColor:'#58D68D' ,
        fontSize: 20,
        marginTop:30
    },
    btn: {
        backgroundColor: 'violet',
        padding:20,
        fontSize: 80,
        
    },
    btn1: {
        backgroundColor: 'skyblue',
        padding:20,
        fontSize: 20,
    },
    btn2: {
        backgroundColor: 'coral',
        padding:20,
        fontSize: 20,
    }

})