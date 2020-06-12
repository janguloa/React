import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar } from "react-native-elements";

export default function InfoUser(props) {

    const { userInfo: {photoUrl, displayName, email}, 
        } = props;

    console.log(photoUrl);
    console.log(displayName);
    console.log(email);

    return (
        <View style={styles.viewUserInfo}>
          <Avatar
            rounded
            size="large"
            showEditButton
            source={{
                uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            }}
            containerStyle={styles.userInfoAvatar}
            showAccessory
         />
         <View>
             <Text style={styles.displayName}>
                 Jesús Angulo Alvarado
             </Text>
             <Text>
                 jesus@gmail.com
             </Text>
         </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewUserInfo: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#f2f2f2",
        paddingTop: 30,
        paddingBottom: 30,
    },
    userInfoAvatar: {
        marginRight: 20,
    },
    displayName: {
        fontWeight: "bold",
        paddingBottom: 5,
    },
}); 