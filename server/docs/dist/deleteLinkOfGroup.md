

## 群主删除链接

### 1) 请求地址

> deleteLinkOfGroup.php

### 2) 调用方式：HTTP post

### 3) 接口描述：

* 群主 根据 链接id 在群组中删除链接 (无论是否通过审核)

### 4) 请求参数:


#### POST参数:
|字段名称       |字段说明         |类型            |必填            |备注     |
| -------------|:--------------:|:--------------:|:--------------:| ------:|
|userId|用户id(即群主id)|string|Y|-|
|id|链接id|string|Y|-|



### 5) 请求返回结果:

```
{
    "resCode": 1,
    "resData": [],
    "resInfo": "成功: 链接删除成功！"
}
```


### 6) 请求返回结果参数说明:
|字段名称       |字段说明         |类型            |必填            |备注     |
| -------------|:--------------:|:--------------:|:--------------:| ------:|
|resCode||string|Y|-|
|resData||string|Y|-|
|resInfo||string|Y|-|

