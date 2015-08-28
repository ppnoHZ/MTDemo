#!/usr/bin/env bash
# Author : zhoudd
# Copyright (c)
# Script follows here:

#------------------------------------------------------------------------
#暂时未实现
#echo ${dirname}

#echo please input project name...
#read project

#cd "$DIR"

#projectName=${project}

projectName=${project}

apkName=${projectName}.apk

buildPath=/Users/ID/Build/${projectName}

buildApkPath=${buildPath}/android/unaligned.apk

apkPath=${buildPath}/android/${apkName}

serverUrl=192.168.3.104:3000

keyName=Demo

androidBuildToolpath=~/.meteor/android_bundle/android-sdk/build-tools/20.0.0/
#-----------------------------------------------------------------------------


echo "------building...."
echo "------buildPath" ${buildPath}
echo "------apkPath"  ${apkPath}
echo "------apkName"  ${apkName}
echo "------serverUrl" ${serverUrl}

#read d
#echo "$d"

meteor build --directory  ${buildPath} --server ${serverUrl}

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 ${apkPath} ${keyName}




#if [-f ${apkPath}]; then
#    rm -rf ${apkPath}
#fi

rm -rf ${apkPath}


${androidBuildToolpath}zipalign 4   ${buildApkPath} ${apkPath}

echo "done!"