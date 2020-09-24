import React from 'react';
import './Header.css'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img
                    className="header__logo"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAABVCAMAAABzYYb0AAAAmVBMVEX/////AAAjIyMAAAAeHh5CQkIXFxcbGxu5ubns7Ox2dnYRERH29vbo6Oj7+/uHh4djY2P/5uY4ODiTk5P/U1Nvb2//3t5RUVHKysqsrKz/QkLX19doaGgJCQlWVlYzMzP/7e3/w8P/iYmhoaH/sbH/9fX/k5P/dHT/amr/WVn/SEj/Nzf/KCj/EBD/ISH/ZGT+zc3/nZ3/paVWxVnpAAAERklEQVRoge2YDXObOBCGZa1AYIHtmDgyJYAT4kubtLne/f8fd7uS/EFssKGe6d2N3klG4kOrR9JqWZkxLy8vLy8vLy8vLy8vL6//h7bb7WZzZ/RgZKqbzWa7/U1Em6c/Xr9+e3v//mNyqh8f71/u/3x9frm7baezBNX7xvMZmnP6uiObkU6qZzs/VvtRVAdBkPZgvV2JNZl8OLBMa12ZWhJoHUSdpnN8vFewbnOBkKKH69rZIt0fTKp0V4Oi03YGci8Bbf4IOOfdXLMBWJPJT9MmRpNgRp8pLmT3mBsQQnASlsO4ngZxPduxaMHLjGqV5Grew8Xremm4lnUtPq9jL9dfg7jcQs4Vl5oAaeK63csqEDycnt6+wPU6iOvdNloDFxzLgrj6N/tYri+DuD42plGiOFcF+Q+XwQWskVynfb/1TeGDbfUozfpNQ142dB3nWZbH9hnFy5krkyOu3bUrHRe2jHaRLYmaLC+6uO7ZQ/ck2g1JE0X+vhScokSyAFAKYEWPUkDNadOipgeuJMTrBZYcS+244hygBG5HlGG9BFimXVyMvVzgStHBlixB0yVecVxWifGgpL1AQUThZo0lt3t1x4WDCFcUigWXC8tVYyBBOrUgm3O8IUP8B5y/7XmuznDruGbYiUjQ/anHjPCqILR78xqu0HFxkEtFYLEZKlfVlGxlPVzs7ts5rifnCuRZRVMaErRMHdM8VMO4qMSYY6xkNvY0GKlrTCU6uRj7+f304cthN0FEcLEZKEV/pOQwjIv2NMUa2jwYoqkwoQdnpYeLsb87uRJyfC3QyUwHkO7LQeuYGkv03kwd3ADiC1xs+9HBhcMTgXUFM0+xCbY0b4O5KBZO7acjt5g4urHzZb7Ydv0ydcQVDefCIny08xQ5rmK0fxk/wI7ZDbjEMRezXGP3o/EHY/+Xueo9FwY0TDv6ufrjF2oVWoe4JZeg/BEztWJsvGfW3cvitly1lerguvx9ROXUf3pT/yqPUrnTrq/JJ27JhQ6F95NPKeao/KvFZeJX6riKcXH1EL9Y1kSU+IzKV1tckeWxZTyYK3bfIVxOw4V5D6XAo/L7FlcK+w/v/vuIPGl4ykX5jeFzXHR+zF3zR3uESez3kT0N4no+w0UjlTpJXVpBgVHURaHLNhfTlGqt05XLI2w+UawpYJGdhtKvNJkre3QYc378xEW10CSG5oiLiQEGIgWYbbS45ggqwhCm6rCOqiyx2f5sJUJKMc1yjjlvOy4pwZ4bKpN1YqJpcv01XQloCpCl4QplSVx4TfenKUhluKSqcrrnTuwRhNbKwnYw/PcJo0hXlXbnmUZjzq4WbpvnNUCQsxifE+gKS3MIXi8B6oYlj5VG3rWudI5W8F134C0WAq1U+a6Hwb/nWM3Mn6vHqP2TJI7PHirb92emObacHb8QH73/W37/ulr/vt8Lvby8vLy8vLy8vLy8vLz+m/oHaLtdnJLeIWcAAAAASUVORK5CYII="
                    alt="yt-logo">
                </img>
            </div>
            <div className="header__input">
                <input type="text" />
                <SearchIcon className="header__inputButton"/>
            </div>
            <div className="header__icons">
                <VideoCallIcon  className="header__icon"/>
                <AppsIcon  className="header__icon"/>
                <NotificationsIcon className="header__icon" />
                <Avatar className="header__icon"
                    src="https://avatars2.githubusercontent.com/u/44577841?s=460&u=e115b67975f0527aacf02b2a1a83b81f38a59711&v=4"
                    alt="avatar"
                />
            </div>
        </div>
    )
}

export default Header
