// @flow
import * as React from 'react'
import SetPublicName from '.'
import {action, storiesOf} from '../../stories/storybook'

const props = {
  deviceName: 'MobilePhone',
  deviceNameError: '',
  onBack: action('onBack'),
  onChange: action('onChange'),
  onSubmit: action('onSubmit'),
}

const load = () => {
  storiesOf('Provision/SetPublicName', module)
    .add('Normal', () => <SetPublicName {...props} />)
    .add('Error', () => <SetPublicName {...props} deviceNameError={'Name taken'} />)
}

export default load
