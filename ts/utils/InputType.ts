/** Union列挙 */
const focusList = [
    'None',
    'Player',
    'Window',
    'Menu',
] as const;

type InputFocus = typeof focusList[number];
export const FocusList: InputFocus[] = focusList.map(s => s as InputFocus);

export default InputFocus;
