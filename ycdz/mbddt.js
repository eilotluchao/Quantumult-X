/******************************

脚本功能：目标地图+解锁订阅
下载地址：https://apps.apple.com/cn/app/%E7%9B%AE%E6%A0%87%E5%9C%B0%E5%9B%BE-%E4%B8%AA%E4%BA%BA%E7%9B%AE%E6%A0%87%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7/id1555022550
软件版本：2.21.3
脚本作者：彭于晏
更新时间：2022-9-22
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https:\/\/api\.(revenuecat|rc-backup)\.com\/v1\/(subscribers|receipts) url script-response-body https://raw.githubusercontent.com/eilotluchao/Quantumult-X/refs/heads/main/ycdz/mbddt.js

https:\/\/api\.(revenuecat|rc-backup)\.com\/v1\/(subscribers|receipts) url script-response-header https://raw.githubusercontent.com/eilotluchao/Quantumult-X/refs/heads/main/ycdz/mbddt.js

[mitm] 

hostname = api.revenuecat.com,api.rc-backup.com
*******************************/

const guding = {};
const guding6 = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  guding.headers = $request.headers;
} else if (guding6 && guding6.subscriber) {
  guding6.subscriber.subscriptions = guding6.subscriber.subscriptions || {};
  guding6.subscriber.entitlement = guding6.subscriber.entitlement || {};
  const app = 'gd';const list = {'gd':{name: 'pro', id: 'com.happydogteam.relax.lifetimePro'}};
  const data = {
    "expires_date": "6666-06-06T06:06:06Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "2023-02-23T02:33:33Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"};
for (const i in list) { if (new RegExp(`^${i}`, `i`).test(app)) {
guding6.subscriber.subscriptions[list[i].id] = data;
guding6.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(data));
guding6.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
                break;
          }
    }
    guding.body = JSON.stringify(guding6);