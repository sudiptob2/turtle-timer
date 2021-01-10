import React, { createContext, useState } from 'react';

export const TimerContext = createContext();

export const TimerProvider = (props) => {

    const [time, setTime] = useState(-1);

    return (
        <TimerContext.Provider value={[time, setTime]}>
            {props.children}
        </TimerContext.Provider>
    )

}