import FsEx from "fs-extra";
import OS from 'os';
import Path from 'path';


const dataFilePath = Path.join(OS.homedir(), 'todo.json');

/*
export const loadTask = async () => {
    const exist = await FsEx.pathExists(dataFilePath);
    if (!exist) {
        FsEx.ensureFileSync(dataFilePath);
        await FsEx.writeJson(dataFilePath, { data: [] });
    }
    const jsonData = await FsEx.readJSON(dataFilePath, {
        reviver: (key: string, value: any) => {
            if (key === 'deadline') {
                return new Date(value as number);
            } else {
                return value;
            }
        }
    });
    await setTimeoutPromise(1000);
    return jsonData;
};

export const saveState = async (taskList: ITask[]) => {
    await setTimeoutPromise(1000);
    await FsEx.writeJSON(dataFilePath, { data: taskList }, {
        replacer: (key: string, value: any) => {
            if (key !== 'deadline') { return value; }
            return new Date((value as string)).getTime();
        },
        spaces: 2,
    });
};

const setTimeoutPromise = (count: number) => {
    return new Promise((resolve) =>{
        setTimeout(() => { resolve(); }, count);
    });
};
*/
