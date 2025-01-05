require("dotenv").config()

console.log(process.env)

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
