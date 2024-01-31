// const { PythonShell } = require("python-shell");

// let option = {
//     scriptpath: "C:/Users/USER/OneDrive/Desktop/MusicWorldAI/server",
// };
// PythonShell.run("inference.py", options, (err, res) => {
//     if (err) console.log(err);
//     if (res) console.log(res);
// });

const { PythonShell } = require("python-shell");

let option = {
    scriptPath: "C:/Users/USER/OneDrive/Desktop/MusicWorldAI/server",
};

PythonShell.run("inference.py", option, (err, res) => {
    if (err) console.error(err);
    if (res) console.log(res);
});
