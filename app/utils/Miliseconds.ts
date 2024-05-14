export default function MilisecondsToSeconds(miliseconds: number, roundPlaces: number = 3): number {
    return parseFloat((miliseconds / 1000).toFixed(roundPlaces));
}