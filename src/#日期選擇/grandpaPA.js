import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useState } from "react";
import './App.css';
import zhLocale from "date-fns/locale/zh-TW";
import addYears from "date-fns/addYears";
import { format } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";


const useStyles = makeStyles((thehe) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',

    },
    TextField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

function DatePickers() {
    const [selectedDate, handleDateChange] = useState(new Date());
    const Taiwan_Date=addYears(selectedDate,-1911);
    const nowStr = format(Taiwan_Date, 'yyy');
    console.log(year)

    const classes = useStyles();
    return (
        <div> 
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={zhLocale}>
            <KeyboardDatePicker
              variant="inline"
              value={selectedDate}
              label="阿公店開店日選擇"
              onChange={handleDateChange}
              format={"民國"+nowStr+"年"+" - M月 - d號"}
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
export default DatePickers;