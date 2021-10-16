/* eslint-disable no-undef */
/**
 * @format
 */

import 'react-native'
import React from 'react'

import LogIn from '../src/screens/LogIn'

// Note: test renderer must be required after react-native.
import renderer, { act } from 'react-test-renderer'

describe('Login Screen Render Test', () => {
  it('include title', () => {
    const loginComponentInstance = renderer.create(<LogIn />).root
    const textElement = loginComponentInstance.findAll(el => { return el.props.testID === 'title' && el.type === 'Text' })
    expect(textElement.length).toBe(1)
  })
  it('include input', () => {
    const loginComponentInstance = renderer.create(<LogIn />).root
    const inputElement = loginComponentInstance.findAll(el => { return el.props.testID === 'input' && el.type === 'TextInput' })
    expect(inputElement.length).toBe(2)
  })
  it('include button', () => {
    const loginComponentInstance = renderer.create(<LogIn />).root
    const buttonElement = loginComponentInstance.findAll(el => { return el.props.testID === 'customButton' })
    expect(buttonElement.length).toBe(1)
  })
})

describe('Login Screen Function Test', () => {
  it('button is Disable', () => {
    const loginComponentInstance = renderer.create(<LogIn />).root
    const buttonElement = loginComponentInstance.find(el => { return el.props.testID === 'customButton' })
    expect(buttonElement.props.disable).toBe(true)
  })
  it('button is enable', () => {
    const loginComponentInstance = renderer.create(<LogIn />).root
    const inputElement = loginComponentInstance.findAll(el => { return el.props.testID === 'input' && el.type === 'TextInput' })
    const email = 'example@gmail.com'
    const password = '123456789'
    act(() => {
      inputElement[0].props.onChangeText(email)
      inputElement[1].props.onChangeText(password)
    })
    const buttonElement = loginComponentInstance.find(el => { return el.props.testID === 'customButton' })
    expect(buttonElement.props.disable).toBe(false)
  })
  it('validation check', () => {
    const loginComponentInstance = renderer.create(<LogIn />).root
    const inputElement = loginComponentInstance.findAll(el => { return el.props.testID === 'input' && el.type === 'TextInput' })
    const email = 'example'
    const password = '123'
    act(() => {
      inputElement[0].props.onChangeText(email)
      inputElement[1].props.onChangeText(password)
    })
    const validationElement = loginComponentInstance.findAll(el => { return el.props.testID === 'validation' && el.type === 'Text' })
    expect(validationElement.length).toBe(2)
  })
})
