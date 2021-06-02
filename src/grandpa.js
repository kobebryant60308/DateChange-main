import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useState } from "react";
import './App.css';
import zhLocale from "date-fns/locale/zh-TW";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import addYears from "date-fns/addYears";
import { format } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';


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
var setValue = function (x, y) {
    return x - y
}

export default function DatePickers() {
    const [currentTime, handledate] = useState(new Date());
    const year = setValue(currentTime.getFullYear(), 1911)
    console.log(year)

    const classes = useStyles();
    return (
        <div>
            <form className={classes.container} noValidate>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={zhLocale}>
                    <KeyboardDatePicker
                        variant="inline"
                        value={currentTime}
                        label="阿公店開店日選擇"
                        onChange={onClick}
                        format={"民國" + year + "年" + " - MM月 - dd號"}
                        autoOk="true"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </form>
        </div>
    )
}