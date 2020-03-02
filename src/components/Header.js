import React from 'react'
import { Icon } from '@iconify/react'

import checkBold from '@iconify/icons-mdi/check-bold'

import '../styles/components/Header.sass'

const Header = () => (
  <header>
    <h2>Todos</h2>
    <Icon icon={checkBold}/>
  </header>
)

export default Header