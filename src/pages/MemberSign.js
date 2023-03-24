import React from 'react';
import { SafeAreaView,Text, View, Button} from 'react-native';

import Input from '../components/Input'

function MemberSign () {
    return (
        <SafeAreaView>
            <Input label = "Üye Adı" placeholder="Üyenin ismini giriniz.."/>
            <Input label = "Üye Soyadı" placeholder="Üyenin soyismini giriniz.."/>
            <Input label = "Üye Yaşı" placeholder="Üyenin yaşını giriniz.."/>
            <Input label = "Üye e-posta" placeholder="Üyenin e-posta giriniz.."/>
            <Input label = "Üye Telefonu" placeholder="Üyenin telefon numarasını giriniz.."/>
            <Button text = "Kaydı Tamamla" onPress={null}/>
        </SafeAreaView>
    );
};

export default MemberSign;