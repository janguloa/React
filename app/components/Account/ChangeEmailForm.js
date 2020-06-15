import React, {useState} from "react";
import { StyleSheet, View, Text } from 'react-native';
import { Button, Input } from "react-native-elements";

export default function ChangeEmailForm(props){

    const { email, setShowModal, toastRef, setReloadUserInfo} = props;
    const [formData, setFormData] = useState(defaultValue);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const onChange = (e, type) => {
        setFormData({...formData, [type]: e.nativeEvent.text});
    };

    const onSubmit = () => {

        console.log(formData);
        // setError(null);
        // if(!formData.email){
        //     setError("El email no puede estar vacio");
        // }else if(email === formData.email){
        //     setError("El email no puede ser igual al anterior");
        // }else {
        //     console.log('OK');
        // }
    }
    
    return(
        <View style={styles.view}>
            <Input 
                placeholder="correo"
                containerStyle={styles.input}
                rightIcon={{
                    type: "material-community",
                    name: "at",
                    color: "#c2c2c2",
                }}
                defaultValue={email || ""}
                errorMessage={error}
                onChange={(e) => {onChange(e,"email")}}
            />
            <Input 
                placeholder="Contraseña"
                containerStyle={styles.input}
                password={true}
                secureTextEntry={showPassword ? false: true}
                rightIcon={{
                    type: "material-community",
                    name: showPassword ? "eye-off-outline" : "eye-outline",
                    color: "#c2c2c2",
                    onPress: () => setShowPassword(!showPassword)
                }}
                onChange={(e) => {onChange(e,"password")}}
            />
            <Button 
                title="Cambiar correo"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={onSubmit}
            />
        </View>
    )
};

function defaultValue(){
    return {
        email: "",
        password: "",
    }
};

const styles = StyleSheet.create({
    view: {
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
    },
    input: {
        marginBottom: 10,
    },
    btnContainer: {
        marginTop: 20,
        width: "95%",
    },
    btn: {
        backgroundColor: "#00a680",
    },
});