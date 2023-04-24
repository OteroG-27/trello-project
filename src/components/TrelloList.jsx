import { Paper, CssBaseline, makeStyles} from "@mui/material"
import ListTitle from "./ListTitle"
import TrelloCard from "./TrelloCard"
import AddNewList from "./AddNewList"
const useStyle = makeStyles(theme => ({
  root: {
    Width: "300px",
    background: "#ebecf0"
  }
}))
const TrelloList = () => {
  const classes = useStyle();
  return (
    <Paper className={classes.root}>
      <CssBaseline />
      <ListTitle />
      <TrelloCard />
      <TrelloCard />
      <TrelloCard />
      <AddNewList />
    </Paper>
  )
}

export default TrelloList