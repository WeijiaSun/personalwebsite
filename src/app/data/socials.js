import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';
import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons/faEnvelope';
import {faWeixin} from '@fortawesome/free-brands-svg-icons/faWeixin';   

const socials = [
    {
        link: 'https://www.linkedin.com/in/waikasun/',
        label: 'LinkedIn',
        icon: faLinkedinIn,
    },
    {
        link: 'https://github.com/WeijiaSun',
        label: 'Github',
        icon: faGithub,
    },
    {
        link: 'https://www.facebook.com/weijiasun0',
        label: 'Facebook',
        icon: faFacebook,
    },
    {
        link: 'https://www.instagram.com/sunwaika/',
        label: 'Instagram',
        icon: faInstagram,
    },
    {
        link: '/__files/wechatqrcode.jpg',
        label: 'Wechat',
        icon: faWeixin,
    },
    {
        link: 'mailto:contact@sunweijia.com',
        label: 'Email',
        icon: faEnvelope,
    },
];

export default socials;
