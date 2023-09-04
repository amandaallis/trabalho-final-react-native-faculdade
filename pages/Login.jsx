/*eslint-disable*/
import { useState } from "react";
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput } from "react-native";

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 4,
        padding: 16,
        margin: 8,
      },
      textError: {
        color: "#ff0000",
        margin: 4
      },
      image: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderRadius: 4,
        marginLeft: 80,
        marginRight: 0,
        padding: 80,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
})
const Login = ({navigation}) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [avisoInput, setAvisoInput] = useState()
    const [avisoInputPass, setAvisoInputPass] = useState()
    const [correctDataPass, setCorrectDataPass] = useState(false)
    const [correctDataEmail, setCorrectDataEmail] = useState(false)

/*    const [existEmail, setExistEmail] = useState(true)
    const [existPassword, setExistPassword] = useState(true)*/


    const onChangeValue = (value) => {
        if(value.length >= 10) {
            console.log("Valor válido")
            setAvisoInput("")
            setCorrectDataEmail(true)
        } else {
            setAvisoInput("* O email precisa ter mais de 10 caracteres")
        }
        setEmail(value)
    }

    const onChangePassword = (value) => {
        if(value) {
            setAvisoInputPass("")
            setCorrectDataPass(true)
        } else {
            setAvisoInput("Senha inválida")
        }
        setPassword(value)
    }
    
    return (
        <SafeAreaView>
            <TextInput 
                style={styles.input}
                placeholder="Login"
                value={email}
                onChangeText={onChangeValue}
            />
            
            {avisoInput? <Text style={styles.textError}>{avisoInput}</Text> : ""}

            <TextInput 
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={onChangePassword}
            />

            {avisoInputPass? <Text style={styles.textError}>{avisoInputPass}</Text> : ""}
            <Button 
                title="Login"
                onPress={() => {
                    if(correctDataPass && correctDataEmail){
                        navigation.navigate('Pagination')
                    }
                } }

                
            />


        </SafeAreaView>
    );
}

export default Login;