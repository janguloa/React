import React, {useState} from "react";
import { StyleSheet, View, Text } from 'react-native';
import { Button, Input } from "react-native-elements";
import { validateEmail } from "../../utils/validation";

export default function ChangeEmailForm(props){

    const { email, setShowModal, toastRef, setReloadUserInfo} = props;
    const [formData, setFormData] = useState(defaultValue);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const onChange = (e, type) => {
        setFormData({...formData, [type]: e.nativeEvent.text});
    };

    const onSubmit = () => {
        setErrors({});

         if(!formData.email || email === formData.email){
             setErrors({
                 email: "EL email no ha cambiado"
             });
         }else if(!validateEmail(formData.email)){
            setErrors({
                email: "EL email es incorrecto"
            });
         }else if(!formData.password){
            setErrors({
                password: "La contraseña no puede estar vacia"
            });  
         }else{
             console.log('OK');
         }
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
                errorMessage={errors.email}
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
                errorMessage={errors.password}
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