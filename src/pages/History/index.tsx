import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CyclesContext } from '../../Contexts/CyclesContext'
import { EmptyList, HistoryContainer, HistoryList, Status } from './styles'
import { BookOpen } from 'phosphor-react'

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          {cycles.length >= 1 && (
            <tbody>
              {cycles.map((cycle) => {
                return (
                  <tr key={cycle.id}>
                    <td>{cycle.task}</td>
                    <td>{cycle.minutesAmount} minutos</td>
                    <td>
                      {formatDistanceToNow(new Date(cycle.startDate), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </td>
                    <td>
                      {cycle.finishedDate && (
                        <Status statusColor="green"> Concluído </Status>
                      )}
                      {cycle.interruptedDate && (
                        <Status statusColor="red"> Interrompido </Status>
                      )}
                      {!cycle.finishedDate && !cycle.interruptedDate && (
                        <Status statusColor="yellow"> Em andamento </Status>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          )}
        </table>
        {cycles.length <= 0 && (
          <EmptyList>
            <BookOpen size={54} />
            <strong>Nenhuma tarefa por aqui... ainda!</strong>
            <span> Que tal começar uma nova?</span>
          </EmptyList>
        )}
      </HistoryList>
    </HistoryContainer>
  )
}
