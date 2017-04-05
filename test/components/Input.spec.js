import React from 'react'
import { shallow } from 'enzyme'

import { expect, spy } from '../expect'
import { Input } from '../../src'

describe('Input', () => {
  let component

  beforeEach(() => {
    component = shallow(<Input />)
  })

  it('should render default Input component', () => {
    expect(component).to.exist
    expect(component.html()).to.equal('<input type="text"/>')
  })

  it('should render an input with given props', () => {
    component.setProps({
      className: 'my-custom-css-class',
      disabled: true,
      placeholder: 'Type to search...',
      type: 'url',
    })

    const props = component.props()

    expect(props).to.have.property('className', 'my-custom-css-class')
    expect(props).to.have.property('disabled', true)
    expect(props).to.have.property('placeholder', 'Type to search...')
    expect(props).to.have.property('type', 'url')
  })

  it('should handle onChange event', () => {
    const handleChange = spy()

    component.setProps({
      onChange: handleChange,
    })

    expect(handleChange).to.not.have.been.called

    const changeEvent = { target: { value: '123' } }
    component.simulate('change', changeEvent)

    expect(handleChange).to.have.been.called
    expect(handleChange).to.have.been.calledWith('123', changeEvent)
  })

  it('should handle onKeyUp event', () => {
    const handleKeyUp = spy()

    component.setProps({
      onKeyUp: handleKeyUp,
    })

    expect(handleKeyUp).to.not.have.been.called
    component.simulate('keyUp', { keyCode: 13 })
    expect(handleKeyUp).to.have.been.called
  })
})
