import ajax from './ajax';
const URL = 'http://47.106.86.139:9010';
export const reqBgImg = data => ajax(data, URL + '/getRandomScreensaver.php', 'GET');
export const reqLogin = data => ajax(data, URL + '/userLogin.php', 'POST');
export const reqSaveList = data => ajax(data, URL + '/getFavoriteLinks.php', 'GET');
export const reqAddItem = data => ajax(data, URL + '/saveFavoriteLinks.php', 'GET');
export const reqUpdateItem = data => ajax(data, URL + '/updateFavoriteLinks.php', 'GET');
export const reqDeleteItem = data => ajax(data, URL + '/daleteItem.php', 'GET');
export const reqQuitGroup = data => ajax(data, URL + '/clearKEY.php', 'GET');
export const reqNewGroup = data => ajax(data, URL + '/generateKEY.php', 'GET');
export const reqJoinGroup = data => ajax(data, URL + '/submitKEY.php', 'POST');
export const reqPushGroup = data => ajax(data, URL + '/addLinkOfGroup.php', 'GET');
export const reqAgree = data => ajax(data, URL + '/agree.php', 'GET');
export const reqReject = data => ajax(data, URL + '/reject.php', 'GET');
export const reqRegUser = data => ajax(data, URL + '/userRegister.php', 'POST');
