import React, {useState} from "react";
import { StyleSheet, View, Text } from 'react-native';
import { Button, Input } from "react-native-elements";

export default function ChangeEmailForm(props){

    const { email, setShowModal, toastRef, setReloadUserInfo} = props;
    const [newEmail, setNewEmail] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = () => {
        setError(null);
        if(!newEmail){
            setError("El email no puede estar vacio");
        }else if(email === newEmail){
            setError("El email no puede ser igual al anterior");
        }else {
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
                errorMessage={error}
            />
            <Input 
                placeholder="Contraseña"
                containerStyle={styles.input}
                password={true}
                secureTextEntry={true}
                rightIcon={{
                    type: "material-community",
                    name: "eye-outline",
                    color: "#c2c2c2",
                }}
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