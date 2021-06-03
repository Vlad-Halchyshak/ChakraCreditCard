import logo from './logo.svg'
import './App.css'
import { Flex } from '@chakra-ui/layout'

import { CreditCard } from './component/creditCard'

function App() {
  return (
    <div className="App">
      <Flex justifyContent="center" alignContent="center" margin="10%">
        <CreditCard />
      </Flex>
    </div>
  )
}

export default App
