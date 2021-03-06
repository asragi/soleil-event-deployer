import path from 'path';
import * as Yaml from 'js-yaml';
import { openFileDialog, readFile, writeFile } from './FileDialog';
import { IEventObject, initMap } from '../states/IEvent';

const EVENT_SUFFIX = 'event.yaml';
const MAP_IMAGE_NAME = 'image.png';

/** 新規マップ作成時，マップ背景画像を指定する処理． */
export const createMapFromImg = async (imgPath: string, folderPath: string) => {
    const imgBin = readFile(imgPath);
    const folderName = folderPath.split('/').reverse()[0];
    // フォルダに画像とevent.yamlを生成
    writeFile(path.join(folderPath, MAP_IMAGE_NAME), imgBin);
    const initMapText = Yaml.dump(initMap.eventObjs);
    writeFile(path.join(folderPath, folderName + EVENT_SUFFIX), initMapText);
    return readDataFromPath(folderPath);
}

/** フォルダを開いてマップイベントデータとマップ画像ファイルを返す */
export const openDataFolder = async () => {
    const folderData = await openFileDialog([], ['openDirectory']);
    if (!folderData) return;
    const folderPath = folderData.filePaths[0];
    return readDataFromPath(folderPath);
};

const readDataFromPath = (fullPath: string) => {
    const folderName = fullPath.split('/').reverse()[0];
    const mapDataYamlName = folderName + EVENT_SUFFIX;
    const mapImgName = MAP_IMAGE_NAME;

    const eventObjects = readYaml(path.join(fullPath, mapDataYamlName));
    const base64img = readImg(path.join(fullPath, mapImgName));
    return { map: eventObjects, mapImg: base64img, fullPath: fullPath};
}

export const saveData = (filePath: string, data: IEventObject[]): boolean => {
    if(!filePath || data.length == 0) return false;
    const folderName = getFileName(filePath);
    const dumpedData = Yaml.dump(data);
    writeFile(path.join(filePath, folderName + EVENT_SUFFIX), dumpedData);
    return true;
}

const readYaml = (filePath: string) : IEventObject[] => {
    // TODO: checkFileExist
    const yamlData = readFile(filePath, 'utf8');
    // TODO: try parse check
    return Yaml.safeLoad(yamlData.toString()) as IEventObject[];
}

const readImg = (filePath: string) : string => {
    // TODO: checkFileExist
    const binary = readFile(filePath);
    return new Buffer(binary).toString('base64');
}

const getFileName = (filePath: string): string => {
    return filePath.split('/').reverse()[0];
}
