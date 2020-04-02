import fs from 'fs';
import { remote } from 'electron';

/**
 * ダイアログで任意のファイルを開く
 * @param dialogOptions
 * @param fileOptions
 * @returns {Buffer}
 */
export const openFileDialog = async (dialogOptions: any, fileOptions = 'utf8') => {
    const win = remote.BrowserWindow.getFocusedWindow()
    if (!win) return;
    const fileNames = await remote.dialog.showOpenDialog(
      win, { ...dialogOptions, properties: ['openFile'] }
    );
    return fileNames ? readFile(fileNames.filePaths[0], fileOptions) : undefined
  }

/**
 * 指定したファイルを読み込む
 * @param path
 * @param option
 * @returns {Buffer}
*/
export const readFile = (path: string, option?: any) => {
    return fs.readFileSync(path, option)
}

/**
 * fileを保存（Pathと内容を指定）
 * @param path
 * @param data
*/
export const writeFile = (path: string, data: any) => {
    return fs.writeFileSync(path, data)
}
