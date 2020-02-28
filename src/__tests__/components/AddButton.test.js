import React from 'react'
import { render } from '@testing-library/react'
import AddButton from '../../components/AddButton'

describe('AddButton', () => {
  let addButton

  beforeEach(() => {
    addButton = render(<AddButton visible={true} showTodoForm={jest.fn()}/>)
  })

  it('renders', () => {
    // arrange
    const { queryByTestId } = addButton
    // act
    const addButtonElement = queryByTestId('add-button')
    // assert
    expect(addButtonElement).not.toBeNull()
    expect(addButtonElement.tagName).toBe('BUTTON')
  })
})