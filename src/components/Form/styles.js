import { Text, TextInput, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

export const FormContext = styled(View)`
  width: 100%;
  height: 100%;
  bottom: 0;
  background-color: #fff;
  align-items: center;
  margin-top: 30px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`

export const Form = styled(View)`
  width: 100%;
  height: auto;
  margin-top: 30px;
  padding: 10px;
`

export const FormLabel = styled(Text)`
  color: #000;
  font-size: 18px;
  padding-left: 20px;
`

export const Input = styled(TextInput)`
  width: 90%;
  border-radius: 50px;
  background-color: #f6f6f6;
  height: 40px;
  margin: 12px;
  padding-left: 10px;
`

export const ButtonCalculator = styled(TouchableOpacity)`
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  width: 90%;
  background-color: #ff0043;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-left: 12px;
  margin-top: 30px;
`

export const TextButtonCalculator = styled(Text)`
  font-size: 20px;
  color: #fff;
`
 