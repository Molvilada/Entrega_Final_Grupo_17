const compareImages = require("resemblejs/compareImages");
const config = require("../reporte.json");
const fs = require("fs");

const { viewportHeight, viewportWidth, browsers, options } = config;

const regexIdScenario = /\bP[0-9][0-9]*\b/;
const regexScreenshots = /\bP[0-9][0-9]\.\d+\s+(.*?)\s+v\d+\.\d+\.\d+\.png\b/;

async function executeTest() {
  let resultInfo = [];
  const screenshotFolderPath = "cypress/screenshots_10_scenarios";
  const screenshotFiles = fs
    .readdirSync(screenshotFolderPath)
    .filter((file) => file.endsWith(".png"));

  for (let i = 0; i < screenshotFiles.length - 1; i += 2) {
    console.log("screenshotFiles[i]", screenshotFiles[i]);
    const image3_41 = `${screenshotFolderPath}/${screenshotFiles[i]}`;
    const image4_44 = `${screenshotFolderPath}/${screenshotFiles[i + 1]}`;
    const scenario = screenshotFiles[i].match(regexIdScenario)[0];
    const stepName = screenshotFiles[i].match(regexScreenshots)[1];

    // const data = await compareImages(
    //   fs.readFileSync(image3_41),
    //   fs.readFileSync(image4_44),
    //   options
    // );
    // resultInfo[scenario][stepName] = {
    //   isSameDimensions: data.isSameDimensions,
    //   dimensionDifference: data.dimensionDifference,
    //   rawMisMatchPercentage: data.rawMisMatchPercentage,
    //   misMatchPercentage: data.misMatchPercentage,
    //   diffBounds: data.diffBounds,
    //   analysisTime: data.analysisTime,
    // };
    // fs.writeFileSync(`./results/${datetime}/compare-${b}.png`, data.getBuffer());
    console.log(screenshotFiles[i].match(regexScreenshots));
  }

  // console.log(
  //   "------------------------------------------------------------------------------------"
  // );
  // console.log("Execution finished. Check the report under the results folder");
  // return resultInfo;
}
(async () => console.log(await executeTest()))();
