import React, { useState } from "react"
import { Text, TextInput, View, Button } from 'react-native'
import * as S from './styles'
import { ResultImc } from '@components'

export default function Form () {

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMesageImc] = useState('preencha o peso e altura')
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState('Calcular')

  function imcCalculator () {
    return setImc((weight / (height * height)).toFixed(2))
  }

  function validationImc () {
    if (!!weight && !!height) {
      imcCalculator()
      setMesageImc('Seu IMC é igual: ')
      setTextButton('Calcular Novamente')
      setHeight(null)
      setWeight(null)
      return
    }
    setImc(null)
    setTextButton('Calcular')
    setMesageImc('preencha o peso e altura')
  }

  return (
    <S.FormContext>
      <S.Form>
        
        <S.FormLabel>Altura</S.FormLabel>
        <S.Input
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />          
        
        <S.FormLabel>Peso</S.FormLabel>
        <S.Input
          placeholder="Ex. 75.735"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />

        <S.ButtonCalculator onPress={validationImc}>
          <S.TextButtonCalculator>{textButton}</S.TextButtonCalculator>
        </S.ButtonCalculator>
      </S.Form>

      <ResultImc
        messageResultImc={messageImc}
        resultImc={imc}
      />
    </S.FormContext>
  )
}