interface UserInfo {
    you: string;
    ta: string;
    valid_month: number;
    words: string[];
}
export declare class AppService {
    getLink(userData: UserInfo): Promise<{
        code: number;
        desc: string;
        link: string;
    }>;
    createContent(wordsArr: any): any;
}
export {};
