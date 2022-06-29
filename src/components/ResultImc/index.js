import React from 'react'
import { Text, View } from 'react-native'
import * as S from './styles'

export default function ResultImc (props) {
  return (
    <S.ResultImc>
      <S.Information>{props.messageResultImc}</S.Information>
      <S.NumberImc>{props.resultImc}</S.NumberImc>
    </S.ResultImc>
  )
}