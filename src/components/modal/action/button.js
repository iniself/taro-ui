import Taro from '@tarojs/taro'
import { Button } from '@tarojs/components'

import _noop from 'lodash/noop'

import './index.scss'

export default class ModalButton extends Taro.Component {
  handleClick = e => {
    const { onClick } = this.props
    if (onClick) {
      return onClick(e)
    }
  }

  render () {
    const { children } = this.props
    return (
      <Button className='at-modal-action__button' onClick={this.handleClick}>
        {children}
      </Button>
    )
  }
}

ModalButton.defaultProps = {
  onClick: _noop
}
