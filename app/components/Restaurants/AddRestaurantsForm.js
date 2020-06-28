import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Alert, Dimensions, Text } from "react-native";
import { Icon, Avatar, Image, Input, Button } from "react-native-elements";
import { map, size, filter } from "lodash";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import Modal from "../Modal";

const widthScreen = Dimensions.get("window").width;

export default function AddRestaurantsForm (props) {
    const { toastRef,setIsLoading,navigation } = props;
    const [restaurantName, setRestaurantName] = useState("");
    const [restaurantAddress, setRestaurantAddres] = useState("");
    const [restaurantDescription, setRestaurantDescription] = useState("");
    const [imageSelected, setImageSelected] = useState([]);
    const [isVisibleMap, setIsVisibleMap] = useState(false);
    
    const addRestaurant = () => {
        console.log('OK');
     //   console.log(restaurantName);
     //   console.log(restaurantAddress);
     //   console.log(restaurantDescription);
    //    console.log(imageSelected);

    };

    return (
        <ScrollView style={styles.scrollView}>
            <ImageRestaurant  
                ImagenRestaurant={imageSelected[0]} />
            <FormAdd 
                setRestaurantName={setRestaurantName}
                setRestaurantAddres={setRestaurantAddres} 
                setRestaurantDescription={setRestaurantDescription}
                setIsVisibleMap={setIsVisibleMap}
                />
            <UploadImage 
                toastRef={toastRef}
                setImageSelected={setImageSelected}
                imageSelected={imageSelected}
                />
            <Button 
                title="Crear restaurante"
                onPress={addRestaurant}
                buttonStyle={styles.btnAddRestaurant}
            />
            <Map 
                isVisibleMap={isVisibleMap}
                setIsVisibleMap={setIsVisibleMap}
            />
        </ScrollView>
    );
}

function ImageRestaurant (props){
    const { ImagenRestaurant } = props;

    return (
        <View style={styles.viewPhoto}> 
            <Image 
                 source={
                     ImagenRestaurant 
                     ? { uri : ImagenRestaurant} 
                     : require("../../../assets/img/no_found.png")
                 }
                 style={{ width: widthScreen, height: 200 }}
            />
        </View>
    );
}

function FormAdd(props){

    const {setRestaurantName,
        setRestaurantAddres,
        setRestaurantDescription,
        setIsVisibleMap} 
        = props;

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
                rightIcon={{
                    type: "material-community",
                    name: "google-maps",
                    color: "#c2c2c2",
                    onPress: () => setIsVisibleMap(true)
                }}
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

function Map(props) {
    const { isVisibleMap, setIsVisibleMap } = props;
    const [locaton, setLocaton] = useState(null);

    useEffect(() => {
        (async() => {
            const resultPermission = await Permissions.askAsync(
                Permissions.LOCATION
                );

            const statusPermissions = resultPermission.permissions.location.status;

            if (statusPermissions !== "granted") {
                toastRef.current.show(
                    "Tienes que aceptar los permisos de localización para crear un restaurante", 
                    3000
                );
            } else {
                const loc = await Location.getCurrentPositionAsync({});
                setLocaton({
                    latitude: loc.coords.latitude,
                    longitude: loc.coords.longitude,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.0001
                });
            }
        })();
    }, []);

    return (
        <Modal isVisible={isVisibleMap} setIsVisible={setIsVisibleMap}> 
            <Text>Hola mapa</Text>
        </Modal>   
    );
}

function UploadImage(props){

    const { toastRef, setImageSelected, imageSelected } = props;

    const imageSelect = async () => {

        const resultPermissions = await Permissions.askAsync(
            Permissions.CAMERA_ROLL
        );

        if(resultPermissions === "denied"){
            toastRef.current.show(
                "Es necesario aceptar los permisos de la galeria, si los has rechazado tienes que activarlos manualmente", 
                3000
            );
        } else {
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4,3]
            });

            if(result.cancelled) {
                toastRef.current.show(
                    "Has cerrado la galeria sin seleccionar ninguna imagen",
                    2000
                )
            } else {
                setImageSelected([...imageSelected, result.uri]);
            }
        }
    };

    const removeImage = (image) => {

        Alert.alert(
            "Eliminar imagen",
            "¿Estas seguro de que quieres eliminar la imagen?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Eliminar",
                    onPress: () => {
                        setImageSelected(filter(imageSelected, (imageUrl) => imageUrl !== image)
                        );
                    }
                }
            ],
            {cancelable: false}
        )

    };

    return (
        <View style={styles.viewImages}>
          {size(imageSelected) < 4 && (
            <Icon
              type="material-community"
              name="camera"
              color="#7a7a7a"
              containerStyle={styles.containerIcon}
              onPress={imageSelect}
            />
          )}
          {map(imageSelected, (imageRestaurant, index) => (
            <Avatar
              key={index}
              style={styles.miniatureStyle}
              source={{ uri: imageRestaurant }}
              onPress={() => removeImage(imageRestaurant)}
            />
          ))}
        </View>
      );
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
    viewImages: {
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30,
    },
    containerIcon: {
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        height: 70,
        width: 70,
        backgroundColor: "#e3e3e3",
    },  
    miniatureStyle:{
        width: 70,
        height: 70,
        marginRight: 10,
    },
    viewPhoto:{
        alignItems: "center",
        height: 200, 
        marginBottom: 20,
    },  
});