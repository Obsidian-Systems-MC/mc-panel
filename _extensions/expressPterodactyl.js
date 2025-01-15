const { PteroApp } = require("@devnote-dev/pterojs");

module.exports = class expressPterodactyl {
    /**
     * 
     * @param {import("express").Application} app 
     */
    constructor(app) {
        this.app = app;
        this.ptero = new PteroApp(process.env.PTERODACTYL_URL, process.env.PTERODACTYL_KEY);
    }

    async getServerInformation(server_uuid) {
        const servers = await this.ptero.servers.fetchAll();
        const server = servers.find((as) => as.uuid == server_uuid);

        return server;
    }

    async getNodeInformation(nodeId) {
        return (await this.ptero.nodes.fetchAll()).find((node) => node.id == nodeId);
    }
}