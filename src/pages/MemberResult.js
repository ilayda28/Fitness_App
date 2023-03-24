import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

function MemberResult ({route}) {
    const {user} = route.params;

    return (
        <SafeAreaView>
            <Text style ={styles.message}>Kayıt Tamamlandı!</Text>
            <Text style ={styles.label}>Üye Adı: {user.userName}</Text>
            <Text style ={styles.label}>Üye Soyadı: {user.userSurname}</Text>
            <Text style ={styles.label}>Üye Yaşı: {user.userAge}</Text>
            <Text style ={styles.label}>Üye E-postası: {user.userMail}</Text>
            <Text style ={styles.label}>Üye Numarası: {user.userNumber}</Text>            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    label :{
        fontWeight :'bold',
        fontSize:20,
        margin:5,
    },
    message: {
        fontSize:50,
        textAlign :'center',
        fontWeight :'bold',
    }
})

export default MemberResult;