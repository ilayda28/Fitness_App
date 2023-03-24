import React, {useState} from 'react';
import { SafeAreaView, Alert} from 'react-native';

import Input from '../components/Input'
import Button from '../components/Button';

function MemberSign ({navigation}) {
    const [userName, setUserName] = useState(null);
    const [userSurname, setUserSurname] = useState(null);
    const [userAge, setAge] = useState(null);
    const [userMail, setUserMail] = useState(null);
    const [userNumber, setUserNumber] = useState(null);

    function handleSubmit() {
        if (!userName ||!userSurname ||!userAge || !userMail||!userNumber){
                Alert.alert('Kebap Fitness Salonu', 'Bilgiler boş bırakılamaz!');
                return;
            } 
        
        const user = {
            userName,
            userSurname,
            userAge,
            userMail,
            userNumber,
        };

            navigation.navigate ('MemberResultScreen',{user} );
    }

    return (
        <SafeAreaView>
            <Input label = "Üye Adı" 
            placeholder="Üyenin ismini giriniz.."
            onChangeText={setUserName}
            />
            <Input label = "Üye Soyadı" 
            placeholder="Üyenin soyismini giriniz.."
            onChangeText={setUserSurname}
            />
            <Input label = "Üye Yaşı" 
            placeholder="Üyenin yaşını giriniz.."
            onChangeText={setAge}
            />
            <Input label = "Üye e-posta" 
            placeholder="Üyenin e-posta giriniz.."
            onChangeText={setUserMail}
            />
            <Input label = "Üye Telefonu" 
            placeholder="Üyenin telefon numarasını giriniz.."
            onChangeText={setUserNumber}
            />
            <Button text = "Kaydı Tamamla" 
            onPress={handleSubmit}/>
        </SafeAreaView>
    );
};

export default MemberSign;