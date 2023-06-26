import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const skills = [
  {
    name: 'GitHub',
    img: <FaGithub />,
    logoColor: '#F6F6F6',
    bgColor: '#424242',
  },

  {
    name: 'Tailwind',
    img: <SiTailwindcss />,
    logoColor: '#39c0e3',
    bgColor: '#0a2e42',
  },
  {
    name: 'NodeJS',
    img: <FaNodeJs />,
    logoColor: '#68a063',
    bgColor: '#292929',
  },
  {
    name: 'CSS',
    img: <FaCss3Alt />,
    logoColor: '#264de4',
    bgColor: '#F0F0F0',
  },
  {
    name: 'JavaScript',
    img: <SiJavascript />,
    logoColor: '#F0DB4F',
    bgColor: '#323330',
  },
  {
    name: 'React',
    img: <FaReact />,
    logoColor: '#04d8f9',
    bgColor: '#2d415c',
  },
  {
    name: 'Next.js',
    img: <SiNextdotjs />,
    logoColor: '#EDEDED',
    bgColor: '#1A1A1A',
  },
];

export default skills;
