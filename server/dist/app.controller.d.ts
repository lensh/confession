import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getLink(body: any, res: any): Promise<void>;
}
