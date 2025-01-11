import { useContext, useState, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../Contexts/CyclesContext'
import {
  ButtonLess,
  ButtonPlus,
  FormContainer,
  MinutesAmountContainer,
  MinutesAmountInput,
  TaskInput,
} from './styles'

interface NewCycleFormProps {
  isSubmitDisabled: boolean
}

export function NewCycleForm({ isSubmitDisabled }: NewCycleFormProps) {
  const { activeCycle } = useContext(CyclesContext)
  const { register, setValue, getValues } = useFormContext()
  const [minutesAmount, setMinutesAmount] = useState<string | number>(
    getValues('minutesAmount') || '',
  )

  useEffect(() => {
    setValue('minutesAmount', minutesAmount || undefined)
  }, [minutesAmount, setValue])

  const handleIncrease = () => {
    if (isSubmitDisabled) {
      return
    }
    setMinutesAmount((prev) => {
      const newAmount = typeof prev === 'number' ? prev + 5 : 5
      return newAmount <= 60 ? newAmount : 60
    })
  }

  const handleDecrease = () => {
    if (isSubmitDisabled) {
      return
    }
    setMinutesAmount((prev) => {
      if (typeof prev === 'number') {
        if (prev > 60) {
          return 60
        }
        const newAmount = prev - 5
        return newAmount >= 5 ? newAmount : ''
      }
      return ''
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setMinutesAmount(value ? parseInt(value) : '')
  }

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>

      <TaskInput
        id="task"
        list="task-suggestions"
        autoComplete="off"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountContainer>
        <ButtonLess type="button" onClick={handleDecrease}>
          -
        </ButtonLess>
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          min={5}
          max={60}
          value={minutesAmount}
          disabled={!!activeCycle}
          {...register('minutesAmount', { valueAsNumber: true })}
          onChange={handleInputChange}
        />
        <ButtonPlus type="button" onClick={handleIncrease}>
          +
        </ButtonPlus>
      </MinutesAmountContainer>

      <span>minutos.</span>
    </FormContainer>
  )
}
