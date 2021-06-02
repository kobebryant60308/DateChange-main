import DateFnsUtils from '@date-io/date-fns';
import zhLocale from "date-fns/locale/zh-TW";
import React, { useState } from "react";
import {KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import addYears from "date-fns/addYears";
import { format } from 'date-fns';
import './App.css';
// import { makeStyles } from '@material-ui/core/styles'; 不會安裝
// const useStyles = makeStyles((thehe) => ({
//   container: {
//       display: 'flex',
//       flexWrap: 'wrap',

//   },
//   TextField: {
//       marginLeft: theme.spacing(1),
//       marginRight: theme.spacing(1),
//       width: 200,
//   },
// }));

function DateLocalization() {
  
  const [selectedDate, handleDateChange] = useState(new Date());
  const Taiwan_Date=addYears(selectedDate,-1911);
  const nowStr = format(Taiwan_Date, 'yyy');
  //Taiwan_Date.getDate.toString
  
  return (
    <div> 
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={zhLocale}>
        <KeyboardDatePicker
          variant="inline"
          value={selectedDate}
          label="阿公的萬華茶館開張日期"
          onChange={handleDateChange}
          format={"民國"+nowStr+"年"+"MM月"+"dd號"}
          autoOk = "true"
          InputLabelProps={{
            shrink: true,
          }}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>

    </div>
  );

}

export default DateLocalization;