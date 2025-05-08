# 📱 Projeto de Prova - React Native com Expo

Este projeto foi desenvolvido como parte da prova prática da disciplina de Desenvolvimento Mobile. O aplicativo utiliza as principais formas de navegação em React Native, além de incluir formulários, armazenamento local, componentes reutilizáveis e ícones vetoriais.

## ✅ Funcionalidades Implementadas

- Navegação com Drawer (menu lateral)
- Navegação em Stack (pilha de telas)
- Navegação por Tabs (abas inferiores)
- Formulários com validação e hooks personalizados
- Armazenamento local com AsyncStorage
- Componente reutilizável de botão
- Ícones vetoriais em todas as telas
- Botão para retornar à tela inicial

## 🚀 Como executar o projeto

### 1. Criar o projeto com o Expo

```bash
npx create-expo-app@latest
```

### 2. Resetar o projeto

```bash
node ./scripts/reset-project.js
```

### 3. Instalar as dependências do Drawer Navigator

```bash
npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated
```

### 4. Configurar a navegação Drawer

Copiar o código da documentação oficial para o arquivo `_layout.tsx`.  
📄 https://docs.expo.dev/router/advanced/drawer/

### 5. Editar o menu inicial conforme as necessidades do projeto

### 6. Criar um arquivo de estilos

Criar um arquivo com os estilos básicos para os formulários (entrada e saída de dados).

### 7. Instalar a API de armazenamento local

```bash
npx expo install @react-native-async-storage/async-storage
```

### 8. Incluir navegação Stack e Tabs no projeto

### 9. Criar um componente de botão reutilizável

Criar e utilizar em pelo menos duas telas.

### 10. Adicionar opção de navegação para voltar à tela index/root

### 11. Inserir ícones vetoriais

Usar ícones do site:  
🎨 https://icons.expo.fyi/Index

## 📚 Referência

Este projeto foi baseado no exercício de revisão disponível no GitHub:  
🔗 https://github.com/prasouza/navigation

## 🛠️ Tecnologias utilizadas

- React Native
- Expo
- React Navigation
- AsyncStorage
- TypeScript
- React Native Vector Icons

---

Desenvolvido como parte da prova prática da disciplina de Desenvolvimento Mobile.
