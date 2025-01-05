require("dotenv").config()

module.exports = {
    apps: [
        {
            name: "portfolio",
            script: "npm",
            args: "start",
            env: process.env,
        },
    ],
}
