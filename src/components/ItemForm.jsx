import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import AddBoxIcon from '@material-ui/icons/AddBox'
import UpdateIcon from '@material-ui/icons/Update'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
)
const ItemForm = (props) => {
    const classes = useStyles()
    const [input, setInput] = React.useState('')

    React.useEffect(() => {
        if(props.editValue){
            setInput(props.editValue)
        }
    }, [props.editValue])

    const onSubmitHandler = (event) =>{
        event.preventDefault()
        if(input){
            props.onAdd(input)
            setInput('')
        }
    }

    return(
        <Paper component='form' className={classes.root} onSubmit={onSubmitHandler}>
        <InputBase
          className={classes.input}
          placeholder='Add todo'
          inputProps={{ 'aria-label': 'add todo' }}
          type='text'
          required
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Divider className={classes.divider} orientation='vertical' />
        <IconButton
          className={classes.iconButton}
          aria-label='add button'
          type='submit'>
          {props.editValue ? <UpdateIcon /> : <AddBoxIcon />}
        </IconButton>
      </Paper>
    )
}

export default ItemForm
