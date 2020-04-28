import path from 'path';
import * as Yaml from 'js-yaml';
import { openFileDialog, readFile, writeFile } from './FileDialog';
import { IEventObject, initMap } from '../states/IEvent';

const EVENT_SUFFIX = 'event.yaml';
const MAP_IMAGE_NAME = 'image.png';

/** 新規マップ作成時，マップ背景画像を指定する処理． */
export const createMapFromImg = async () => {
    // マップ画像を選ぶ
    const imgPathRead = await openFileDialog([], ['openFile']);
    if (!imgPathRead) return;
    const imgPath = imgPathRead.filePaths[0];
    const imgBin = readFile(imgPath);
    // 保存先フォルダを指定
    const directoryPathRead = await openFileDialog([], ['openDirectory']);
    if (!directoryPathRead) return;
    const folderPath = directoryPathRead.filePaths[0];
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
    return { map: eventObjects, mapImg: base64img};
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
