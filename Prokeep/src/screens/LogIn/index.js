import React, { useState } from 'react'

import {
  View,
  Text
} from 'react-native'

import axios from 'axios'
import Toast from 'react-native-simple-toast'

import {
  Button,
  Input
} from '../../components'
import {
  INPUT_TYPES
} from '../../constants/ui'
import {
  LOGIN
} from '../../constants/urls'
import {
  emailVaildator,
  passwordValidator
} from '../../constants/utils'

import styles from './styles'

const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLogIn = () => {
    const data = JSON.stringify({
      email: email, // eve.holt@reqres.in   <======== correct email
      password: password // cityslicka      <======== correct password
    })

    const config = {
      method: 'post',
      url: LOGIN,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    }
    axios(config)
      .then(res => {
        console.log(res)
        Toast.showWithGravity('Log In Success', Toast.SHORT, Toast.BOTTOM)
      })
      .catch(err => {
        console.log('[Log In Error]', err)
        Toast.showWithGravity('Log In Failed, Email and Password is Incorrect', Toast.SHORT, Toast.BOTTOM)
      })
  }

  const isEnable = () => {
    if (email.length > 0 &&
      password.length > 0 &&
      emailVaildator(email) &&
      passwordValidator(password)) {
      return true
    } else return false
  }

  return (
        <View style={styles.container}>
          <Text testID='title' style={styles.title}>ProKeep Log In</Text>
          <View style={styles.content}>
            <Input
              placeholder='Email Address'
              value={email}
              onChange={setEmail}
              type={INPUT_TYPES.EMAIL}
              style={styles.input}
            />
            <Input
              placeholder='Password'
              value={password}
              onChange={setPassword}
              type={INPUT_TYPES.PASSWORD}
              style={styles.input}
            />
          </View>
          <Button
            label='Log In'
            onClick={onLogIn}
            style={styles.button}
            disable={!isEnable()}
            testID='customButton'
          />
        </View>
  )
}

export default LogIn
