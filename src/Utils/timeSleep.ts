export const TimeSleep = async (): Promise<string> => {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            const data = "Data fetched successfully";
            resolve(data);
        }, 2000);
    });
};

const sleep = (ms: number): Promise<void> => new Promise<void>((resolve) => setTimeout(resolve, ms));
await sleep(2000);
