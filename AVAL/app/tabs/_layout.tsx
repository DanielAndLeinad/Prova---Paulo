import { AntDesign, Ionicons } from '@expo/vector-icons'; // Importando AntDesign
import { Tabs, useNavigation } from 'expo-router';

export default function Layout(props: any) {
    const nav: any = useNavigation();

    function iconeIonicons(nome: any) {
        const IconComponent = (props: any) => (
            <Ionicons name={nome} size={18} color={props.focused ? '#3A98FF' : '#000'} />
        );
        IconComponent.displayName = `Icon(${nome})`;
        return IconComponent;
    }

    function iconeAntDesign(nome: any) {
        const IconComponent = (props: any) => (
            <AntDesign name={nome} size={18} color={props.focused ? '#3A98FF' : '#000'} />
        );
        IconComponent.displayName = `Icon(${nome})`;
        return IconComponent;
    }

    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Início',
                    tabBarIcon: iconeIonicons('home-outline'),
                }}
            />
            <Tabs.Screen
                name="planilhas"
                options={{
                    title: 'Planilhas',
                    tabBarIcon: iconeAntDesign('filetext1'), // Usando AntDesign para o ícone
                }}
            />
            <Tabs.Screen
                name="config"
                options={{
                    title: 'Configurações',
                    tabBarIcon: iconeIonicons('settings-outline'),
                }}
            />
            <Tabs.Screen
                name="op"
                options={{
                    title: 'Opções',
                    tabBarIcon: iconeIonicons('menu'),
                }}
                listeners={{
                    tabPress: (e) => {
                        e.preventDefault();
                        nav?.openDrawer();
                    },
                }}
            />
        </Tabs>
    );
}
