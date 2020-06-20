import React from 'react';
import './App.css';
import ItemForm from './components/ItemForm';
import Items from './components/Items';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) =>
  createStyles({
    grid: {
      display: 'grid',
      gridGap: theme.spacing(5),
      margin: theme.spacing(5, 0),
    },
  })
)

function App() {
  const classes = useStyles();
  const [todos, setTodos] = React.useState([]);
  const [editIndex, setEditIndex] = React.useState(-1);


  const onDeleteHandler = (i) => {
    setTodos((todos) =>[...todos.slice(0,i), ...todos.slice(i + 1)])
  }

  const onAddHandler = (todo) =>{
    if(editIndex === -1){
      setTodos(todos => [...todos,todo])
    }else{
      setTodos((todos) =>[...todos.slice(0,editIndex),todo, ...todos.slice(editIndex + 1)]);
      setEditIndex(-1)
    }
  }

  const onEditHandler =(i) =>{
    setEditIndex(i)
  }

  return (
    <Container maxWidth='sm'>
      <Box className={classes.grid}>
        <Typography variant='h2'>Todos</Typography>
        <ItemForm onAdd={onAddHandler} editValue={todos[editIndex]}/>
          <Items 
          todos={todos} 
          onDelete={onDeleteHandler} 
          onEdit={onEditHandler}
        />
      </Box>
    </Container>
  )
}

export default App;
