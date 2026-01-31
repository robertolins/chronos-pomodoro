import './styles/global.css';
import './styles/theme.css';
import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessageContainer } from './components/MessageContainer';

export default function App() {
  return (
    <TaskContextProvider>
      <MessageContainer>
        <Home />
      </MessageContainer>
    </TaskContextProvider>
  );
}
