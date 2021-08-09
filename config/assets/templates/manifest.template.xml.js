module.exports = (props) => {

const PHXS = props.extensionHosts.vPHXS
let responsePHXS = ''
if(PHXS.include){
  responsePHXS = `<Host Name="PHXS" Version="${props.extensionHosts.vPHXS.version}"/>`
}
const PHSP = props.extensionHosts.vPHSP
let responsePHSP = ''
if(PHSP.include){
  responsePHSP = `<Host Name="PHSP" Version="${props.extensionHosts.vPHSP.version}"/>`
}
const IDSN = props.extensionHosts.vIDSN
let responseIDSN = ''
if(IDSN.include){
  responseIDSN = `<Host Name="IDSN" Version="${props.extensionHosts.vIDSN.version}"/>`
}
const AICY = props.extensionHosts.vAICY
let responseAICY = ''
if(AICY.include){
  responseAICY = `<Host Name="AICY" Version="${props.extensionHosts.vAICY.version}"/>`
}
const ILST = props.extensionHosts.vILST
let responseILST = ''
if(ILST.include){
  responseILST = `<Host Name="ILST" Version="${props.extensionHosts.vILST.version}"/>`
}
const PPRO = props.extensionHosts.vPPRO
let responsePPRO = ''
if(PPRO.include){
  responsePPRO = `<Host Name="PPRO" Version="${props.extensionHosts.vPPRO.version}"/>`
}
const AEFT = props.extensionHosts.vAEFT
let responseAEFT = ''
if(AEFT.include){
  responseAEFT = `<Host Name="AEFT" Version="${props.extensionHosts.vAEFT.version}"/>`
}
const PRLD = props.extensionHosts.vPRLD
let responsePRLD = ''
if(PRLD.include){
  responsePRLD = `<Host Name="PRLD" Version="${props.extensionHosts.vPRLD.version}"/>`
}
const FLPR = props.extensionHosts.vFLPR
let responseFLPR = ''
if(FLPR.include){
  responseFLPR = `<Host Name="FLPR" Version="${props.extensionHosts.vFLPR.version}"/>`
}
const DRWV = props.extensionHosts.vDRWV
let responseDRWV = ''
if(DRWV.include){
  responseDRWV = `<Host Name="DRWV" Version="${props.extensionHosts.vDRWV.version}"/>`
}

  return(
    `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <!--Copyright 2018 Adobe. All rights reserved.This file is licensed to you under the Apache License, Version 2.0 (the "License");you may not use this file except in compliance with the License. You may obtain a copyof the License at http://www.apache.org/licenses/LICENSE-2.0Unless required by applicable law or agreed to in writing, software distributed underthe License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONSOF ANY KIND, either express or implied. See the License for the specific languagegoverning permissions and limitations under the License. -->
    <ExtensionManifest xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                       ExtensionBundleId="${props.extensionBundleId}"
                       ExtensionBundleVersion="${props.extensionBundleVersion}"
                       ExtensionBundleName="${props.extensionBundleName}"
                       Version="${props.cepVersion}">
      <ExtensionList>
        <Extension Id="${props.extensionBundleId}" Version="${props.extensionBundleVersion}">
        </Extension>
      </ExtensionList>
      <ExecutionEnvironment>
        <HostList>
            ${responsePHXS}
            ${responsePHSP}
            ${responseIDSN}
            ${responseAICY}
            ${responseILST}
            ${responsePPRO}
            ${responseAEFT}
            ${responsePRLD}
            ${responseFLPR}
            ${responseDRWV}
        </HostList>
        <LocaleList>
          <Locale Code="${props.localeCode}" />
        </LocaleList>
        <RequiredRuntimeList>
          <RequiredRuntime Name="CSXS" Version="${props.cepVersion}" />
        </RequiredRuntimeList>
      </ExecutionEnvironment>
      <DispatchInfoList>
        <Extension Id="${props.extensionBundleId}">
          <DispatchInfo>
            <Resources>
              <MainPath>./client/index.html</MainPath>
              <CEFCommandLine>
                <Parameter>--allow-file-access-from-files</Parameter>
                <Parameter>--allow-file-access</Parameter>
                <Parameter>--enable-nodejs</Parameter>
                <Parameter>--mixed-context</Parameter>
              </CEFCommandLine>
            </Resources>
            <Lifecycle>
              <AutoVisible>true</AutoVisible>
            </Lifecycle>
            <UI>
              <Type>${props.panelType}</Type>
              <Menu>${props.panelName}</Menu>
              <Geometry>
                <Size>
                  <Width>${props.sizes.normal.width}</Width>
                  <Height>${props.sizes.normal.height}</Height>
                </Size>
                <MinSize>
                  <Width>${props.sizes.minimum.width}</Width>
                  <Height>${props.sizes.minimum.height}</Height>
                </MinSize>
                <MaxSize>
                  <Width>${props.sizes.maximum.width}</Width>
                  <Height>${props.sizes.maximum.height}</Height>
                </MaxSize>
              </Geometry>
              <Icons>
                  <Icon Type="Normal">./icons/favicon.ico</Icon>
                  <Icon Type="RollOver">./icons/favicon.ico</Icon>
                  <Icon Type="DarkNormal">./icons/favicon.ico</Icon>
                  <Icon Type="DarkRollOver">./icons/favicon.ico</Icon>
              </Icons>
            </UI>
          </DispatchInfo>
        </Extension>
      </DispatchInfoList>
    </ExtensionManifest>
    `
  )

}

 

    