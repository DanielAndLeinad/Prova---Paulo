import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Início',
            title: 'Bem-vindo',
            drawerIcon: () => (
              <Ionicons name="home-outline" size={18} color="#3A98FF" />
          ),
          }}
        />
         <Drawer.Screen
                    name="form"
                    options={{
                        drawerLabel: 'Produtos',
                        title: 'Cadastro de Produtos',
                        drawerIcon: () => (
                            <Ionicons name="desktop-outline" size={18} color="#3A98FF" />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="tabs"
                    options={{
                        drawerLabel: 'Informações',
                        title: 'Informações Gerais', 
                        drawerIcon: () => (
                            <Ionicons name="albums-outline" size={18} color="#3A98FF" />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="stack"
                    options={{
                        drawerLabel: 'Planilhas',
                        title: 'Baixar Planilhas',
                        drawerIcon: () => (
                            <Ionicons name="download-outline" size={18} color="#3A98FF" />
                        ),
                    }}
                />
        
      </Drawer>
    </GestureHandlerRootView>
  );
}
