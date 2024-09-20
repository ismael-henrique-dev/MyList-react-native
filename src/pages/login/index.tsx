import { Text, View, Image, TextInput, Button, Alert } from "react-native"
import logo from "../../assets/logo.png"
import { style } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { themas } from "../../global/themas"
import { useState } from "react"

export function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function getLogin() {
    try {
      if (!email || !password) {
        return Alert.alert("Atenão","Informe os campos obrigatórios")
      }

      return Alert.alert("Logado com sucesso!")
    } catch (error) {
      Alert.alert('Error', "adsasas")
    }
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={logo} style={style.logo} resizeMode="contain" />
        <Text style={style.text}>Bem-vindo de volta!</Text>
      </View>
      <View style={style.boxMid}>
        <Text style={style.titleInput}>ENDEREÇO DE EMAIL</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            value={email}
            onChangeText={setEmail}
          />
          <MaterialIcons name="email" size={20} color={themas.Colors.gray} />
        </View>
        <Text style={style.titleInput}>SENHA</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            value={password}
            onChangeText={setPassword}
          />
          <MaterialIcons
            name="remove-red-eye"
            size={20}
            color={themas.Colors.gray}
          />
        </View>
      </View>
      <View style={style.boxBottom}>
        <Button title="ENTRAR" onPress={() => getLogin} />
      </View>
      <Text style={style.textBottom}>
        Não tem conta? <Text style={style.textBottomCreate}>Crie agora</Text>
      </Text>
    </View>
  )
}
