import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Input } from "react-native-elements";

export default function ChangePasswordForm(){

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [formData, setFormData] = useState(defaultValue);

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text});
    };

    const onSubtmit = () => {
        console.log(formData);
    };

    return (
        <View style={styles.view}>
            <Input
                placeholder="Contraseña actual"
                containerStyle={styles.input}
                password={true}
                secureTextEntry={showPassword ? false : true}
                rightIcon={{
                    type:"material-community",
                    name: showPassword ? "eye-off-outline" : "eye-outline",
                    color: "#c2c2c2",
                    onPress: () => setShowPassword(!showPassword)
                }}
                onChange={(e) => onChange(e, "password")}
            />
            <Input 
                placeholder="Nueva contraseña"
                containerStyle={styles.input}
                password={true}
                secureTextEntry={showPassword1 ? false: true}
                rightIcon={{
                    type:"material-community",
                    name: showPassword1 ? "eye-off-outline" :"eye-outline",
                    color: "#c2c2c2",
                    onPress: () => setShowPassword1(!showPassword1)
                }}
                onChange={(e) => onChange(e, "newPassword")}
            />
            <Input 
                placeholder="Repetir nueva contraseña"
                containerStyle={styles.input}
                password={true}
                secureTextEntry={showPassword2 ? false : true}
                rightIcon={{
                    type:"material-community",
                    name: showPassword2 ? "eye-off-outline" : "eye-outline",
                    color: "#c2c2c2",
                    onPress: () => setShowPassword2(!showPassword2)
                }}
                onChange={(e) => onChange(e, "repeatNewPassword")}
            />
            <Button 
                title="Cambiar contraseña"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={onSubtmit}
            />
        </View>
    )
}

function defaultValue(){
    return {
        password:"",
        newPassword: "",
        repeatNewPassword: ""
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