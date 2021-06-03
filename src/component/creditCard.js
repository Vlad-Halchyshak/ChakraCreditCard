import { Box, HStack, VStack, Stack, Input } from '@chakra-ui/react'
import { ViewIcon, SunIcon } from '@chakra-ui/icons'
import React from 'react'

export const CreditCard = () => {
  const [hide, setHide] = React.useState(false)
  const [inputValue, setInputValue] = React.useState('6421.50')
  const styleForSunIcon = {
    marginLeft: '90%',
  }

  const onBlur = () => {
    setHide(false)
  }
  const onInputChange = (event) => {
    // we can display only numbers.
    const re = /^[0-9\b]+$/
    if (event.target.value === '' || re.test(event.target.value)) {
      setInputValue(event.target.value)
    }
  }
  return (
    <>
      <Box
        bg="linear-gradient(175deg, rgba(251,248,255,1) 24%, rgba(238,174,230,1) 97%);"
        color="black"
        rounded="md"
        shadow="md"
        width="25rem"
        height="13rem"
      >
        <Stack margin="3.3rem">
          <HStack marginLeft="0.5em">
            <ViewIcon />
          </HStack>
          <HStack spacing="15rem">
            {hide ? (
              <Input
                placeholder="type"
                size="sm"
                width="19rem"
                onBlur={onBlur}
                onChange={onInputChange}
              />
            ) : (
              <p onClick={() => setHide(true)}>{`${'$'}${inputValue}`}</p>
            )}
            <p>•••</p>
          </HStack>
          <HStack>
            <p>Balance</p>
          </HStack>
          <HStack spacing="3rem">
            <p>•••• •••• ••••</p>
            <p>2749</p>
          </HStack>
          <div style={styleForSunIcon}>
            <SunIcon />
          </div>
        </Stack>
      </Box>
    </>
  )
}
