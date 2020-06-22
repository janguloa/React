import React, {useState} from "react";
import { StyleSheet, View, ScrollView, Alert, Dimensions } from "react-native";
import { Icon, Avatar, Image, Input, Button } from "react-native-elements";

export default function AddRestaurantsForm (props) {
    const { toastRef,setIsLoading,navigation } = props;
    const [restaurantName, setRestaurantName] = useState("");
    const [restaurantAddress, setRestaurantAddres] = useState("");
    const [restaurantDescription, setRestaurantDescription] = useState("");
    
    const addRestaurant = () => {
        console.log('OK');
        console.log(restaurantName);
        console.log(restaurantAddress);
        console.log(restaurantDescription);

    };

    return (
        <ScrollView style={styles.scrollView}>
            <FormAdd 
                setRestaurantName={setRestaurantName}
                setRestaurantAddres={setRestaurantAddres} 
                setRestaurantDescription={setRestaurantDescription}
                />
            <Button 
                title="Crear restaurante"
                onPress={addRestaurant}
                buttonStyle={styles.btnAddRestaurant}
            />
        </ScrollView>
    );
}

function FormAdd(props){

    const {setRestaurantName,setRestaurantAddres,setRestaurantDescription} = props;

    return(
        <View style={styles.viewForm}>
            <Input 
                placeholder="Nombre del restaurante"
                containerStyle={styles.input}
                onChange={(e) => setRestaurantName(e.nativeEvent.text)}
            />
            <Input 
                placeholder="Dirección"
                containerStyle={styles.input}
                onChange={(e) => setRestaurantAddres(e.nativeEvent.text)}
            />
            <Input 
                placeholder="Descripción del restaurante"
                multiline={true}
                inputContainerStyle={styles.textArea}
                onChange={(e) => setRestaurantDescription(e.nativeEvent.text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView:{
        height: "100%",
    },
    viewForm:{
        marginLeft: 10,
        marginRight: 10,
    },
    input:{
        marginBottom: 10,
    },  
    textArea:{
        height: 100,
        width: "100%",
        padding: 0,
        margin: 0,
    },
    btnAddRestaurant:{
        backgroundColor: "#00a680",
        margin: 20,
    },
});