import TodoList from '../src/components/list'
import Edit from '../src/components/edit'

export default function Home() {
  return (
    <div>
      {/* componetを表示 */}
      <Edit />
      <TodoList />
    </div>
  )
}