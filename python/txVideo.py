'''
Description: 获取腾讯视频首页链接
Version: 1.0
Author: 努力才能逃离
Date: 2022-08-04 11:40:30
LastEditors: 努力才能逃离
LastEditTime: 2022-08-04 11:46:39
'''
# _*_ coding:utf-8 _*_
import requests
from bs4 import BeautifulSoup

headers = {
    "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0"
}


def getTXVideo(status):
    url = 'https://v.qq.com/channel/' + status
    html = requests.get(url, headers=headers).content.decode('UTF-8')
    soup = BeautifulSoup(html, 'html.parser')
    dataList_a = soup.find_all('div', class_='video-banner-item')  # 最近更新
    url_list = []  # 腾讯视频动漫数据
    for a in dataList_a:
        url_list.append({
            'url': a.find('a')['href'],
            'title': a.find('a', class_='banner-title').text,
            'path_img': a.find('img', class_='banner-cover')['data-src']
        })
    print(url_list)
    return url_list

#剧集详情
def getTXVideoDetails():
    url = 'https://v.qq.com/x/cover/m441e3rjq9kwpsc.html'
    html = requests.get(url, headers=headers).content.decode('UTF-8')
    soup = BeautifulSoup(html, 'html.parser')
    data_list = soup.find_all('div', class_='episode-list-rect__item')  # 剧情列表
    sourceList = []
    for a in data_list:
        sourceList.append({
            'vid': a.find('div', class_='episode-item')['data-vid'],
            'number': a.find('div', class_='episode-item').find('span').text
        })
    print(sourceList)


# getTXVideoDetails()

# getTXVideo('cartoon')
# getTXVideo('tv')
