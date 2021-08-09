const path = require("path");
const root = __dirname;
const buildFolder = path.join(__dirname, "build");
const certPath = path.join(buildFolder, "cert.p12");

module.exports = {
    extensionBundleId: "com.starter.demo",
    extensionBundleName: "starter",
    extensionBundleVersion: "1.0.0",
    extensionHosts:{
        vPHXS: { include: true, version: "[0.0,99.9]"},
        vPHSP: { include: true, version: "[0.0,99.9]"},
        vAICY: { include: true, version: "[0.0,99.9]"},
        vILST: { include: true, version: "[0.0,99.9]"},
        vIDSN: { include: false, version: "[0.0,99.9]"},
        vPPRO: { include: false, version: "[0.0,99.9]"},
        vAEFT: { include: false, version: "[0.0,99.9]"},
        vPRLD: { include: false, version: "[0.0,99.9]"},
        vFLPR: { include: false, version: "[0.0,99.9]"},
        vDRWV: { include: false, version: "[0.0,99.9]"},
    },
    localeCode: "All",
    panelType: "Panel",
    cepVersion: "7.0", // minimum version 5.0
    panelName: "React App",
    sizes: {
        normal:{
            width: "400",
            height: "400",
        },
        minimum:{
            width: "200",
            height: "200",
        },
        maximum:{
            width: "1000",
            height: "1000",
        },
    },
    root: root,
    destinationFolder: buildFolder,
    certificate: {
        customCert: {
            path: "",
            password: "password"
        },
        selfSign: {
            country: "US",
            province: "CA",
            org: "org",
            name: "name",
            password: "password",
            locality: "locality",
            orgUnit: "orgUnit",
            email: "starter@gmail.com",
            output: certPath
        }
    }
};