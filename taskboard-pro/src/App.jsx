import './App.css'
import { HTML_TAGS } from "../src/shared/constants/hmtl-tags.constants.js"
import { TaskBoard } from "../src/features/task/components/taskBoard.jsx"

function App() {
  const MainTag = HTML_TAGS.MAIN
  const TitleTag = HTML_TAGS.H1

  return (
    <MainTag>
      <TitleTag>TaskBoard Hooks Lab</TitleTag>
      <TaskBoard />
    </MainTag>
  )
}

export default App