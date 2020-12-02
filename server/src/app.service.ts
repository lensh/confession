import { Injectable } from '@nestjs/common';
import { UserInfoModel } from './db'
const moment = require('moment')
const path = require('path')
const fs = require('fs-extra')
const uuid = require('node-uuid')

const fromPath = path.join(__dirname, '../template', 'index.html')

// 定义UserInfo
interface UserInfo {
  you: string;
  ta: string;
  valid_month: number;
  words: string[];
}

@Injectable()
export class AppService {
  async getLink(userData: UserInfo) {
    // 目录名
    const dirname = moment().format('YYYY-MM-DD');
    // 文件名，生成唯一的字符串
    const filename: string = uuid.v1();
    // 目标路径
    const toPath = path.join(__dirname, '../confession', dirname, filename + '.html')
    // 最终可以访问的地址
    const link = `http://localhost:3000/confession/${dirname}/${filename}.html`

    let error
    try {
      // 读取文件
      let data = await fs.readFile(fromPath, 'utf8')
      // 替换数据
      data = data.replace('{{You}}', userData.you).replace('{{Ta}}', userData.ta)
      data = data.replace('{{content}}', this.createContent(userData.words))
      // 写文件
      await fs.outputFile(toPath, data)

      // 现在的时间戳
      const now = Date.now()
      // 入库
      await UserInfoModel.create({
        uuid: filename,  // 用户的uuid
        filepath: link,  // 文件路径
        create_time: now,  // 开通服务时间，时间戳
        from_user: userData.you,  // 谁写的
        to_user: userData.ta,   // 写給谁的
        valid_month: userData.valid_month,  // 有效期
        words: JSON.stringify(userData.words),  // 表白文字
        expire_time: (now / 1000 + userData.valid_month * 30 * 24 * 3600) * 1000
      })
    } catch (err) {
      error = err
      console.log(err)
    }
    if (error) {
      return { code: -1, desc: '生成链接失败', link: '' }
    }
    return {
      code: 0,
      desc: '生成链接成功',
      link
    }
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
      `
    }).join('')
  }
}
