import React, { createContext, useState, useRef, useEffect} from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createContext();

const socket = io('http://localhost:5000');

const ContextProvider = ({ children }) => {
const [stream, setStream] = useState(null);
const [me, setMe] = useState('');

const myVideo = useRef();
    // demande les autorisations d'accès au micro et à la caméra
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({video: true, audio: true})
        .then((currentStream) => {
            setStream(currentStream);

            myVideo.current.srcObject = currentStream; // populate vidéo object avec le stream
        })

        socket.on('moi', (id) => setMe(id));

        
    });

    const aswerCall = () => {
        
    }

    const callUser = () => {

    }

    const leaveCall() => {

    }

}