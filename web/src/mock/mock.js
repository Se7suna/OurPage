import Mock from 'mockjs'
const Random = Mock.Random
// 获取背景图片
Mock.mock(
    /getRandomScreensaver.php/g,
    {
        resCode: 1,
        resData: {
            dataSize: 10,
            dataNum: 1,
            dataTotal: 100,
            dataList: [
                {
                    imgSrc: '/static/img/timg.jpg',
                    imgName: '图片名,图片标题,可以用,可以不用',
                    imgDesc: '图片说明,图片详情,图片介绍,这是某某国家某某地区, 很丑的一个公考拉'
                },
                {
                    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536037451062&di=5bde77c8b86d8aab045d21551fd820ff&imgtype=0&src=http%3A%2F%2Fp17.qhimg.com%2Fbdr%2F__%2Ft012005ed71d9ce021e.jpg',
                    imgName: '图片名,图片标题,可以用,可以不用',
                    imgDesc: '图片说明,图片详情,图片介绍,这是某某国家某某地区, 很丑的一个公考拉'
                },
                {
                    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536037496754&di=794c0d9cae2e2c5d686e3fc8ef4ac7db&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fb58f8c5494eef01f3277a7d3e3fe9925bc317d40.jpg',
                    imgName: '图片名,图片标题,可以用,可以不用',
                    imgDesc: '图片说明,图片详情,图片介绍,这是某某国家某某地区, 很丑的一个公考拉'
                },
                {
                    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536037506413&di=5763fa90c199ea4a9be5f550a1f0dd4b&imgtype=0&src=http%3A%2F%2Fuploads.xuexila.com%2Fallimg%2F1706%2F28-1F61G10152.jpg',
                    imgName: '图片名,图片标题,可以用,可以不用',
                    imgDesc: '图片说明,图片详情,图片介绍,这是某某国家某某地区, 很丑的一个公考拉'
                },
                {
                    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536013047967&di=76e76aa52d8f198f9024cb2195a492d1&imgtype=0&src=http%3A%2F%2Fbbsfiles.vivo.com.cn%2Fvivobbs%2Fattachment%2Fforum%2F201604%2F30%2F210252b00au3507q094uua.jpg',
                    imgName: '图片名,图片标题,可以用,可以不用',
                    imgDesc: '图片说明,图片详情,图片介绍,这是某某国家某某地区, 很丑的一个公考拉'
                }
            ]
        }
    }
)
// 请求收藏夹列表
Mock.mock(
    /getFavoriteLinks.php/g,
    {
        resCode: 1,
        resData: {
          dataSize: 10,
          dataNum: 1,
          dataTotal: 100,
          dataList: [
            {
              id: '',
              linkId: Random.integer(10000),
              linkIco: Random.dataImage('100x100', 'logo!'),
              linkToSrc: 'https://www.baidu.com/s?wd=' + Random.cname(),
              linkName: Random.cword(3, 5)
            },
            {
              id: '',
              linkId: Random.integer(10000),
              linkIco: Random.dataImage('100x100', 'logo!'),
              linkToSrc: 'https://www.baidu.com/s?wd=' + Random.cname(),
              linkName: Random.cword(3, 5)
            },
            {
              id: '',
              linkId: Random.integer(10000),
              linkIco: Random.dataImage('100x100', 'logo!'),
              linkToSrc: 'https://www.baidu.com/s?wd=' + Random.cname(),
              linkName: Random.cword(3, 5)
            },
            {
              id: '',
              linkId: Random.integer(10000),
              linkIco: Random.dataImage('100x100', 'logo!'),
              linkToSrc: 'https://www.baidu.com/s?wd=' + Random.cname(),
              linkName: Random.cword(3, 5)
            },
            {
              id: '',
              linkId: Random.integer(10000),
              linkIco: Random.dataImage('100x100', 'logo!'),
              linkToSrc: 'https://www.baidu.com/s?wd=' + Random.cname(),
              linkName: Random.cword(3, 5)
            },
            {
              id: '',
              linkId: Random.integer(10000),
              linkIco: Random.dataImage('100x100', 'logo!'),
              linkToSrc: 'https://www.baidu.com/s?wd=' + Random.cname(),
              linkName: Random.cword(3, 5)
            },
            {
                id: '',
                linkId: Random.integer(10000),
                linkIco: Random.dataImage('100x100', 'logo!'),
                linkToSrc: 'https://www.baidu.com/s?wd=' + Random.cname(),
                linkName: Random.cword(3, 5)
              },
              {
                id: '',
                linkId: Random.integer(10000),
                linkIco: Random.dataImage('100x100', 'logo!'),
                linkToSrc: 'https://www.baidu.com/s?wd=' + Random.cname(),
                linkName: Random.cword(3, 5)
              },
              {
                id: '',
                linkId: Random.integer(10000),
                linkIco: Random.dataImage('100x100', 'logo!'),
                linkToSrc: 'https://www.baidu.com/s?wd=' + Random.cname(),
                linkName: Random.cword(3, 5)
              },
              {
                id: '',
                linkId: Random.integer(10000),
                linkIco: Random.dataImage('100x100', 'logo!'),
                linkToSrc: 'https://www.baidu.com/s?wd=' + Random.cname(),
                linkName: Random.cword(3, 5)
              },
              {
                id: '',
                linkId: Random.integer(10000),
                linkIco: Random.dataImage('100x100', 'logo!'),
                linkToSrc: 'https://www.baidu.com/s?wd=' + Random.cname(),
                linkName: Random.cword(3, 5)
              },
              {
                id: '',
                linkId: Random.integer(10000),
                linkIco: Random.dataImage('100x100', 'logo!'),
                linkToSrc: 'https://www.baidu.com/s?wd=' + Random.cname(),
                linkName: Random.cword(3, 5)
              }
          ]
        }
    }
)
// 登录注册
Mock.mock(
    /usersLogin.php/g,
    {
        resCode: 1,
        resData: {
          id: '1',
          userId: 10010,
          useName: '1234',
          usePass: '5678',
          key: '123456'
        }
    }
)
// 更新收藏夹
Mock.mock(
    /updateFavoriteLinks.php/g,
    {
        resCode: 1,
        resData: {
            id: '',
            linkId: Random.integer(10000),
            linkIco: Random.dataImage('100x100', 'logo!'),
            linkToSrc: 'https://www.baidu.com/s?wd=' + Random.cname(),
            linkName: Random.cword(3, 5)
        }
      }
)
