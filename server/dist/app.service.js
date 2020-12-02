"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("./db");
const moment = require('moment');
const path = require('path');
const fs = require('fs-extra');
const uuid = require('node-uuid');
const fromPath = path.join(__dirname, '../template', 'index.html');
let AppService = class AppService {
    async getLink(userData) {
        const dirname = moment().format('YYYY-MM-DD');
        const filename = uuid.v1();
        const toPath = path.join(__dirname, './confession', dirname, filename + '.html');
        const link = `http://confession.lenshen.com/confession/${dirname}/${filename}.html`;
        let error;
        try {
            let data = await fs.readFile(fromPath, 'utf8');
            data = data.replace('{{You}}', userData.you).replace('{{Ta}}', userData.ta);
            data = data.replace('{{content}}', this.createContent(userData.words));
            await fs.outputFile(toPath, data);
            const now = Date.now();
            await db_1.UserInfoModel.create({
                uuid: filename,
                filepath: link,
                create_time: now,
                from_user: userData.you,
                to_user: userData.ta,
                valid_month: userData.valid_month,
                words: JSON.stringify(userData.words),
                expire_time: (now / 1000 + userData.valid_month * 30 * 24 * 3600) * 1000
            });
        }
        catch (err) {
            error = err;
            console.log(err);
        }
        if (error) {
            return { code: -1, desc: '生成链接失败', link: '' };
        }
        return {
            code: 0,
            desc: '生成链接成功',
            link
        };
    }
    createContent(wordsArr) {
        return wordsArr.map((item, index) => {
            return `
        <div class="title" id="t-${index + 1}">
          <table>
            <tbody>
              <tr>
                <td>${item}</td>
              </tr>
            </tbody>
          </table>
        </div>
      `;
        }).join('');
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map