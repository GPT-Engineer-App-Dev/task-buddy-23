import { useState } from 'react';
import { Box, Input, Button, List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Box p={4}>
      <Input
        placeholder="Add a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
      />
      <Button onClick={handleAddTodo} mt={2}>Add Task</Button>
      <List spacing={3} mt={4}>
        {todos.map((todo, index) => (
          <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center">
            {todo}
            <ListIcon as={FaTrash} cursor="pointer" onClick={() => handleDeleteTodo(index)} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoApp;