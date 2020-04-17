import path from 'path';
import * as Yaml from 'js-yaml';
import { openFileDialog, readFile } from './FileDialog';
import { IEventObject } from 'ts/states/IEvent';


export const openDataFolder = async () => {
    const folderData = await openFileDialog([], ['openDirectory']);
    if (!folderData) {
        return;
    }
    const folderPath = folderData.filePaths[0];
    const folderName = folderPath.split('/').reverse()[0];
    const mapDataYamlName = folderName + 'event.yaml';
    const mapImgName = 'image.png';

    const eventObjects = readYaml(path.join(folderPath, mapDataYamlName));
    const base64img = readImg(path.join(folderPath, mapImgName));
    return { map: eventObjects, mapImg: base64img};
};

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
