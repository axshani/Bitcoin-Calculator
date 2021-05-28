import React, { useEffect,useState } from "react";
import {
  makeStyles,
  TextField,
  Button,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "60ch",
  },
}));

const SignUp = () => {
  // function validateForm() {
  //   return values.username.length > 0 && values.password.length > 0 && values.email.length > 0;
  // }

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
  }

  function calculate() {
    setResult(
      ((1 - values.fee/100)*values.amount) / values.usd / values.btc)
  }

  const [values, setValues] = useState({
    amount: 0,
    fee: 0,
    usd: 3.3170,
    btc: 0,
  });
  const [result, setResult] = useState(0)

  useEffect(() => {
    fetch('https://www.binance.com/api/v3/depth?symbol=BTCUSDT&limit=1000')
      .then(response => response.json())
      .then(data => setValues({ ...values, btc: parseInt(data.asks[999][0]) }));
  }, [])

  const handleChange = (prop: string) => (event: {
    target: { value: any };
  }) => {
    setValues({ ...values, [prop]: event.target.value.replace(/,/g, '') });
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField
        style={{ width: "35%", marginRight: "5px" }}
        id="outlined-size-normal"
        label="Amount"
        // value={values.amount}
        onChange={handleChange("amount")}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <br></br>
      <TextField
        style={{ width: "35%", marginRight: "5px" }}
        id="outlined-size-normal"
        label="Fee"
        value={values.fee}
        onChange={handleChange("fee")}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <br></br>
      <TextField
        style={{ width: "35%", marginRight: "5px" }}
        id="outlined-size-normal"
        label="USD"
        value={values.usd}
        onChange={handleChange("usd")}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <br></br>
      <TextField
        style={{ width: "35%", marginRight: "5px" }}
        id="outlined-size-normal"
        label="BTC"
        value={values.btc}
        onChange={handleChange("btc")}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <br></br>
      <br></br>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        // disabled={!validateForm()}
        onClick={() => calculate()}
      >
        חשב
      </Button>
      <br></br>
      {result !== 0 && (<Typography variant="h6">
      BTC: {result}
      </Typography>)}
    </div>
  );
};

export default SignUp;
