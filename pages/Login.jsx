/*eslint-disable*/
import { useEffect, useState } from "react";
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View,   TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
    input: {
        borderColor: "#2f903d",
        borderWidth: 1,
        borderRadius: 4,
        padding: 16,
        margin: 8,
        width: "75%",
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
    styleArea: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    loginButton: {
        height: 80,
        width: 8000,
    },
    imageLogin: {
        margin: "10%",
        marginTop: 20,
        width: "75%",
        height: "50%",
        justifyContent: "center",
        alignItems: "center"

    },
    backGround: {
        padding: 0,
    }

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
    const validateEmail = (email) => {

        if (!email) {
          return false;
        } else {
          return true;
        }
      };

    const validatePassword = (password) => {
        if(!password) {
            password = ""
        }
        if (!password && password.length < 8) {
          return false;
        } else {
          return true;
        }
      };
    useEffect(() => {
        {password? setCorrectDataPass(true) : setCorrectDataPass(false)}
    
    },[])

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
    const handleLogin = () => {
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
    
        if (isEmailValid && isPasswordValid) {
          // As duas validações passaram, você pode prosseguir com o login
          navigation.navigate('Pagination');
        }
      };
    
    return (
        <View style={styles.backGround}>
            <Image 
        source={require('../images/rick-and-mortyLogin.png')} 
        style={styles.imageLogin}
      />
        <SafeAreaView style={styles.styleArea}>
        
            <TextInput 
                style={styles.input}
                placeholder="Login"
                value={email}
                onChangeText={onChangeValue}
                placeholderTextColor="#20522a"
            />

            <TextInput 
                placeholderTextColor="#20522a"
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={onChangePassword}
            />

            {avisoInput? <Text style={styles.textError}>{avisoInput}</Text> : ""}

            {avisoInputPass? <Text style={styles.textError}>{avisoInputPass}</Text> : ""}
            <Button 
                title="Login"
                color="#2f903d"
                onPress={handleLogin}

            /> 
        <TouchableOpacity onPress={() => navigation.navigate('Episodes')}>
            <Text style={{ color: "#2f903d", margin: 10 }}>Confira aqui os episodios</Text>
        </TouchableOpacity>
        </SafeAreaView>
        </View>
    );
}

export default Login