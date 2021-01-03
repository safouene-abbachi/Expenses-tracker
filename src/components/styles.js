import { makeStyles } from "@material-ui/core";
import { red, green } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  income: {
    borderBottom: "10px solid rgba(0,255,0,0.5)",
  },
  expense: {
    borderBottom: "10px solid rgba(255,0,0,0.5)",
  },
  desktop: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobile: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  main: {
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "5%",
    },
  },
  last: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
      paddingBottom: "200px",
    },
  },
  grid: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  cartContent: {
    paddingTop: 0,
  },
  divider: {
    margin: "20px 0",
  },
  radioGroup: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "-10px",
  },
  button: {
    marginTop: "20px",
  },
  avatarIncome: {
    color: "#fff",
    backgroundColor: green[500],
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  list: {
    maxHeight: "150px",
    overflow: "auto",
  },
}));
