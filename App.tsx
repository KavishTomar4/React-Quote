import React from "react";
import {View ,Text} from 'react-native'
import Home from "./android/app/src/screen/Home";


const App = ()=>{

  return(
    <View style = {{flex: 1}}>
        <Home/>
    </View>
  )

}


export default App;