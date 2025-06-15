module.exports = {
  token: process.env.token || "", // Ensure this env variable is set
  channelId: process.env.channelId || "",

  webMonitor: true, // Set to false if you don't want a website
  expressPort: process.env.expressPort || 3000,

  nodes: [
    {
      host: "eu-ro-01.wisp.uno", // Your lavalink host address 
      password: "limapuluh", // Your lavalink password
      port: 9380, // Your lavalink port
      identifier: "Node", // Name for your lavalink
      secure: false, // set to true if your lavalink has SSL
      reconnectTimeout: 300000,
      reconnectTries: 100,
    },
  ],
};
