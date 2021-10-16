import React, { useEffect, useState } from 'react'

import {
  View,
  Text,
  TextInput
} from 'react-native'

import _ from 'lodash'
import PropTypes from 'prop-types'

import { INPUT_TYPES } from '../../constants/ui'
import {
  emailVaildator,
  passwordValidator
} from '../../constants/utils'

import styles from './styles'

const Input = (props) => {
  const { value, placeholder, style, onChange, type } = props

  const [validationString, setValidationString] = useState('')

  const isPasswordInput = type === INPUT_TYPES.PASSWORD

  useEffect(() => {
    if (value.length === 0) {
      setValidationString('')
      return
    }
    if (isPasswordInput) {
      const passwordValidationResult = passwordValidator(value)
      if (!passwordValidationResult) {
        setValidationString('Password Should be long than 8')
      } else {
        setValidationString('')
      }
    } else {
      const isValidEmail = emailVaildator(value)
      if (!isValidEmail) {
        setValidationString('Invaild Email')
      } else {
        setValidationString('')
      }
    }
  }, [value])

  return (
    <View style={[styles.container, style]}>
      <TextInput
        secureTextEntry={isPasswordInput}
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        style={styles.textInput}
        testID='input'
      />
      {validationString.length > 0 &&
        <View style={styles.validationContainer}>
          <Text testID='validation' style={styles.validation}>{validationString}</Text>
        </View>
      }
    </View>

  )
}

Input.defaultProps = {
  value: '',
  placeholder: '',
  style: {},
  onChange: _.noop,
  type: INPUT_TYPES.EMAIL
}

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  type: PropTypes.number
}

export default Input
