const app = require('express')();
const server = require('http').createServer(app);
const cors = require ('cors');

const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send('le serveur est démarré')
});

io.on('connection', (socket) => {
    socket.emit('me', socket.id); // connexion

    socket.on('disconnect', () => {
        socket.broadcast.emit("callended") // déconnexion
    });

    socket.on("calluser", ({userToCall, signalData, from, name}) => {
        io.to(userToCall).emit("calluser", { signal:signalData, from, name }); // passer un appel
    });

    socket.on("answercall", (data) => {
        io.to(data.to).emit("callaccepted", data.signal); // répondre à un appel
    })
})

server.listen(PORT, () => console.log('Le serveur écoute le port '+PORT));