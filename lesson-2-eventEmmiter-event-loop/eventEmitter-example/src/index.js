import EventEmitter  from "node:events";

const emitter = new EventEmitter();

// emitter.addListener("welcome", ()=> {
//     console.log("Welcome to server");
// })

// регистрация события
// emitter.on("welcome", (username)=> {
//     console.log(`Welcome to server, ${username}`);
// })

// setTimeout(()=> emitter.emit("welcome", "Bohdan"), 3000);
// setTimeout(()=> emitter.emit("welcome", "Nastya"), 4000);
// setTimeout(()=> emitter.emit("welcome", "Olya"), 5000);

// emitter.once("start-server", ()=> {
//     console.log("start server")
// })

// setTimeout(()=> emitter.emit("start-server"), 1000);
// setTimeout(()=> emitter.emit("start-server"), 2000);

// emitter.on("welcome", ({name, role})=> {
//     console.log(`Welcome to server, ${name}. Your role - ${role}`);
// })

// setTimeout(()=> emitter.emit("welcome", {name: "Bohdan", role: "superadmin"}), 3000);
// setTimeout(()=> emitter.emit("welcome", {name: "Nastya", role: "admin"}), 4000);
// setTimeout(()=> emitter.emit("welcome", {name: "Olya", role: "manager"}), 5000);


emitter.on("welcome", ()=> {
    console.log("Welcome first emitter")
})

const welcomeMessage = name => {
    console.log(`Welcome to server, ${name}`);
};

emitter.on("welcome", welcomeMessage);

setTimeout(()=> {
    emitter.emit("welcome", "Bohdan");
    emitter.removeListener("welcome", welcomeMessage)
}, 3000);

setTimeout(()=> {
    emitter.emit("welcome", "Nastya");
    emitter.removeAllListeners("welcome");
}, 4000);

setTimeout(()=> {
    emitter.emit("welcome", "Olya");
}, 5000);


