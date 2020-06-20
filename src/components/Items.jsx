import React from 'react'
import Item from './Item'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
  })
)

const Items = (props) => {
    const classes = useStyles()
    return( 
      <div className={classes.root}>
      <List>
        {props.todos.map((todo, i) => (
          <Item
            key={i}
            index={i+1}
            value={todo}
            onEdit={() => props.onEdit(i)}
            onDelete={() => props.onDelete(i)}
          />
        ))}
      </List>
    </div>
    )
}

export default Items