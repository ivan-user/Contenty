import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 10,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgb()",
  },
  image: {
    marginLeft: "15px",
    padding: "10px",
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
        flexDirection: "column-reverse"
    }
  }
}));
