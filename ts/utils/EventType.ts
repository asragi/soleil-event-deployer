/** Unionパターンで列挙記述 */
const eventList = Object.freeze(
    {
        "message": null,
        "changeInput": null,
    }
);
type EventType = keyof typeof eventList;
export const EventTypeList = Object.keys(eventList) as EventType[];

export default EventType;
