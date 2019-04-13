const { spawn } = require('child_process');
const { join } = require('path');

console.log('spawn: ', process.pid);
const py = spawn('python3', [join(__dirname, 'cpu-intensive.py')]);
py.stdout.on('data', data => console.log(`\nstdout: ${data}`));
setInterval(() => console.log('interval... (2 sec)'), 2000);
