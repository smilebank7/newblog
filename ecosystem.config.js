module.exports = {
    apps: [{
        name: "smilebank7",
        script: "./.yarn/releases/yarn-4.1.1.cjs",
        args: "start",
        exec_mode: "cluster",
        instances: "2",
        watch: true,
        listen_timeout: 50000,
        kill_timeout: 5000
    }]
};
