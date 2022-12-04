
import styled from '@emotion/styled'

const Text = styled.div`
background-color: #b7442c;
color: #FFF;
padding: 15px;
font-size: 22px;
text-transform: 'Lato', sans-serif;
font-weight: 700;
text-align: center;
border-radius: 20px;
`
const Error = ({children}) => {
  return (
    <Text>{children}</Text>
  )
}

export default Error