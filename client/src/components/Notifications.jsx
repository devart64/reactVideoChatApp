import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../SocketContext';

const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return(
        <>
           {call.isReceivedCall && !callAccepted && (
               <div style={{display: 'flex', justifyContent: 'center'}}>
                   <h1>{call.name} est en train de vous appeler...</h1>
                   <Button variant="contained" color="primary" onClick={answerCall}>
                        Décrocher
                   </Button>
               </div>
           )}
        </>
    )
}

export default Notifications;