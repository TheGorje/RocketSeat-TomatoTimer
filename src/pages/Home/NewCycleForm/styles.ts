import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: transparent;
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-300']};
  }
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const MinutesAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 4.625rem;
  height: 2.875rem;
  user-select: none;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  &:focus-within {
    border-bottom-color: ${(props) => props.theme['green-500']};
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  border: 0;
  padding: 0;
  &:focus {
    outline: none;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
  text-align: center;
`
export const ButtonMinutes = styled.button`
  transition: 0.2s ease-out;
  width: 1rem;
  text-align: center;
  font-size: 1.5rem;
  height: 2.875rem;
  font-family: none;
  font-weight: 100;
  border: 0;
  background: transparent;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme['gray-100']};
  }
  color: ${(props) => props.theme['gray-500']};
`

export const ButtonLess = styled(ButtonMinutes)``
export const ButtonPlus = styled(ButtonMinutes)``
