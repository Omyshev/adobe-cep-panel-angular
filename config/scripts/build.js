// console.log('BUILD')
const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");
const jsxbin = require("jsxbin");
const webpack = require("webpack");
const ora = require("ora");
const { execSync } = require("child_process");
const pluginConfig = require("../../pluginrc");
const utils = require("./utils.js");
const buildFolder = pluginConfig.destinationFolder;
const pluginFolder = path.join(buildFolder, pluginConfig.extensionBundleId);
const rootFolder = pluginConfig.root;
const templatesFolder = path.join(__dirname, "../assets/templates");


const startTime = Date.now();

const inBuildPath = (val) => {
    return path.join(pluginFolder, val);
  };
  
  const inRootDir = (val) => {
    return path.join(rootFolder, val);
  };
  const inRootBuild = (val) => {
    return path.join(__dirname, "../../build", val);
  };

console.log(chalk.hex("6bb9f0")(`BUILDING`));

build();

async function mainBuild(){
    spinner = ora("Starting Building Angular").start();
    execSync(`npm run build`);
    spinner.succeed();
}


async function build() {
    try {
    await mainBuild();
    spinner = ora("Copying client folder").start();
    fs.copySync(inRootBuild("client"), inBuildPath("client"));
    spinner.succeed();

    spinner = ora("Del client folder").start();
    fs.removeSync(inRootBuild("client"));
    spinner.succeed();


    spinner = ora("Render manifest.xml").start();
    const manifest_template = require(path.join(
      templatesFolder,
      "manifest.template.xml.js"
    ));
    const rendered_xml = manifest_template(pluginConfig);
    var xml_out_dir = path.join(pluginFolder, "CSXS");
    const xml_out_file = path.join(pluginFolder, "CSXS", "manifest.xml");
    fs.mkdirSync(xml_out_dir, { recursive: true }, (err) => {
      if (err) throw err;
    });
    fs.writeFileSync(xml_out_file, rendered_xml, "utf-8");
    spinner.succeed();
  

    const endTime = Date.now();
    let timeDiff = endTime - startTime;
    timeDiff /= 1000;
    console.log(chalk.hex("23D18B")(`Time: ${timeDiff}s`));

    } catch (err) {
      utils.log_error(err);
    }
  }