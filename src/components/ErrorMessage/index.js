import React from 'react'

import PropTypes from 'prop-types'

import { ErrorMessageAlert } from './styles'

export function ErrorMessage({ children }) {
  return <ErrorMessageAlert>{children}</ErrorMessageAlert>
}

ErrorMessage.propTypes = {
  children: PropTypes.string
}
