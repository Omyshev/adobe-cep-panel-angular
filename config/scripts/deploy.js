const fs = require("fs-extra");
const os = require("os");
const path = require("path");
const chalk = require("chalk");
const utils = require("./utils.js");
const pluginConfig = require("../../pluginrc.js");
const buildFolder = path.join(
  pluginConfig.destinationFolder,
  pluginConfig.extensionBundleId
);
const isWindows = utils.resolveWindows();
const extensionBundleId = pluginConfig.extensionBundleId;
const resolvedTargetFolder = resolveDeploymentFolder();
const ora = require("ora");

const startTime = Date.now();

deploy();

function deploy() {
  console.log(chalk.hex("6bb9f0")(`\nDEPLOY IN FOLDER`));
  cleanTarget(resolvedTargetFolder);
  devMode()

  printDeploymentFolder();

  const endTime = Date.now();
  let timeDiff = endTime - startTime;
  timeDiff /= 1000;
  console.log(chalk.hex("23D18B")(`Time: ${timeDiff}s`));
}

function printDeploymentFolder() {
  console.log(
    chalk.hex("f7ca18")(`Deployed to folder ${resolvedTargetFolder}`)
  );
}

function resolveDeploymentFolder() {
  return path.join(resolveExtensionFolder(), extensionBundleId);
}

function resolveExtensionFolder() {
  if (isWindows) {
    const extensionsPath =
      os.userInfo().homedir + "\\AppData\\Roaming\\Adobe\\CEP\\extensions";
    if (!fs.existsSync(extensionsPath))
      fs.mkdirSync(extensionsPath, { recursive: true });

    return extensionsPath;
  } else {
    return path.join(
      os.homedir(),
      "Library/Application Support/Adobe/CEP/extensions"
    );
  }
}

function cleanTarget(target) {
  let spinner = ora("Clean target");
  try {
    if (fs.existsSync(target) && fs.lstatSync(target).isSymbolicLink())
      fs.unlinkSync(target);
    fs.removeSync(target);
    spinner.succeed();
  } catch (err) {
    utils.log_error(err);
  }
}


function devMode() {
  let spinner = ora("copying into extensions folder...").start();
  try {
    var type = isWindows ? "junction" : "dir";

    fs.symlinkSync(buildFolder, resolvedTargetFolder, type);
    spinner.succeed();
  } catch (err) {
    utils.log_error(err);
  }
}