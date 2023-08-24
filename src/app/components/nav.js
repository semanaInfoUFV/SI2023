import { SvgIcon } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import PropTypes from 'prop-types';
import * as Info from '../info'

export default function NavBar() {
    const { window } = PropTypes.func
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box className="p-5 flex flex-col text-white space-y-4 justify-center items-center" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <SvgIcon className=' w-10 h-10 md:w-14 md:h-14 svg-icon-si-menu' >
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_37_233)">
                        <path d="M30.0001 57.4391C45.1542 57.4391 57.4391 45.1542 57.4391 30.0001C57.4391 14.8459 45.1542 2.56104 30.0001 2.56104C14.8459 2.56104 2.56104 14.8459 2.56104 30.0001C2.56104 45.1542 14.8459 57.4391 30.0001 57.4391Z" stroke="black" stroke-width="3" />
                        <path d="M30 59.2685C46.1644 59.2685 59.2683 46.1647 59.2683 30.0002C59.2683 13.8358 46.1644 0.731934 30 0.731934C13.8356 0.731934 0.731689 13.8358 0.731689 30.0002C0.731689 46.1647 13.8356 59.2685 30 59.2685Z" stroke="black" stroke-width="2" />
                        <path d="M25.6098 19.0244C25.6098 19.0244 17.561 23.1774 17.561 31.1372C17.561 39.0969 23.294 44.6342 30.3659 44.6342C37.4379 44.6342 43.1708 39.443 43.1708 31.1372C43.1708 22.8313 34.3903 19.0244 34.3903 19.0244" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M30 13.9023V24.878" stroke="black" stroke-width="3" stroke-linecap="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_37_233">
                            <rect width="60" height="60" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </SvgIcon>
            <Divider></Divider>
            <Link href="#evento" className=''>EVENTO</Link>
            <Link href="#programacao" className=''>PROGRAMAÇÃO</Link>
            <Link href="#maratona" className=''>MARATONA</Link>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <AppBar position="static" className='py-4 px-7 bg-transparent' elevation={0}>
                <Toolbar className='flex justify-between'>
                    <SvgIcon className=' w-10 h-10 md:w-14 md:h-14 svg-icon-si' >
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_37_233)">
                                <path d="M30.0001 57.4391C45.1542 57.4391 57.4391 45.1542 57.4391 30.0001C57.4391 14.8459 45.1542 2.56104 30.0001 2.56104C14.8459 2.56104 2.56104 14.8459 2.56104 30.0001C2.56104 45.1542 14.8459 57.4391 30.0001 57.4391Z" stroke="black" stroke-width="3" />
                                <path d="M30 59.2685C46.1644 59.2685 59.2683 46.1647 59.2683 30.0002C59.2683 13.8358 46.1644 0.731934 30 0.731934C13.8356 0.731934 0.731689 13.8358 0.731689 30.0002C0.731689 46.1647 13.8356 59.2685 30 59.2685Z" stroke="black" stroke-width="2" />
                                <path d="M25.6098 19.0244C25.6098 19.0244 17.561 23.1774 17.561 31.1372C17.561 39.0969 23.294 44.6342 30.3659 44.6342C37.4379 44.6342 43.1708 39.443 43.1708 31.1372C43.1708 22.8313 34.3903 19.0244 34.3903 19.0244" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M30 13.9023V24.878" stroke="black" stroke-width="3" stroke-linecap="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_37_233">
                                    <rect width="60" height="60" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </SvgIcon>
                    <Stack spacing={5} direction="row" className='text-black font-bold hidden md:flex'>
                        <Link href="#evento" className='relative'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="134" height="38" viewBox="0 0 134 38" fill="none" className="opacity-0 hover:opacity-100 relative z-20">
                                <path d="M132.35 16.8243C132.841 17.4989 133.156 17.9623 133.324 18.5096C133.489 19.0498 133.5 19.6397 133.5 20.5305C133.5 21.4388 133.489 22.0301 133.309 22.5784C133.129 23.1275 132.788 23.6026 132.256 24.3193C130.213 27.0848 125.838 29.5179 119.872 31.4781C113.878 33.4476 106.183 34.9695 97.3855 35.8496L97.3844 35.8497C94.7975 36.1027 91.0374 36.5503 89.0577 36.8414V36.8414L89.0556 36.8417C82.3034 37.8058 76.0457 37.7231 62.8623 36.5131C34.1398 33.9006 17.4102 30.0744 7.73715 23.7972L7.73688 23.797C4.42406 21.6441 2.34986 19.4485 1.71045 17.2292C1.0508 14.9397 1.95295 12.7819 4.18502 10.8499L4.18645 10.8486C6.10101 9.20405 8.166 8.20408 12.2598 6.90935C24.0216 3.18346 37.1589 1.44577 59.4222 0.626144L59.4225 0.626133C72.3425 0.156918 86.113 1.02185 97.9828 2.8034C109.83 4.58158 119.857 7.28318 125.239 10.5266L125.242 10.5285C126.406 11.2414 127.855 12.3635 129.167 13.5225C130.475 14.6774 131.683 15.9009 132.35 16.8243ZM132.35 16.8243C132.35 16.8246 132.35 16.8248 132.35 16.8251L131.945 17.1176L132.349 16.8231C132.349 16.8235 132.35 16.8239 132.35 16.8243ZM109.844 9.00159L109.843 9.00145C101.293 6.80831 90.0211 5.2315 76.1377 4.2379C70.9706 3.8882 54.8926 3.71288 49.3642 3.96554C39.0086 4.45241 30.7698 5.45457 24.646 6.96461C18.4957 8.48119 14.5824 10.4863 12.7484 12.8959L12.7461 12.8988C12.2305 13.566 11.9906 13.9201 11.851 14.2975C11.7111 14.6756 11.6593 15.111 11.6138 15.9738L11.6139 15.9738L11.6134 15.9812C11.4191 18.8535 12.8589 21.2817 16.4945 23.8056L16.4949 23.8059C22.7976 28.1894 33.3784 30.8367 51.3768 32.4944C66.4105 33.8782 69.9216 34.072 80.9959 34.072C92.1351 34.072 94.3129 33.9362 102.183 32.8868C109.994 31.8374 119.793 29.2147 124.277 27.0052L124.279 27.0047C127.124 25.6112 129.082 23.7398 129.908 21.8066L129.062 22.3861L129.06 22.3872C127.859 23.2034 126.618 23.9719 125.639 24.5188C125.151 24.7914 124.718 25.0143 124.384 25.1605C124.219 25.2328 124.063 25.293 123.928 25.3296C123.862 25.3476 123.784 25.3646 123.704 25.3699C123.639 25.3742 123.492 25.3779 123.345 25.2934L123.333 25.2869L123.322 25.2798C123.207 25.2052 123.127 25.0879 123.099 24.9536C123.075 24.8378 123.097 24.7429 123.112 24.6935C123.141 24.5991 123.191 24.5307 123.211 24.5044C123.26 24.4387 123.324 24.3749 123.381 24.3223C123.501 24.2098 123.675 24.066 123.882 23.9047C124.3 23.5793 124.89 23.1534 125.545 22.7102L125.546 22.7093C127.097 21.6669 127.913 21.0479 128.356 20.5119C128.566 20.2576 128.684 20.0306 128.753 19.7904C128.825 19.5428 128.852 19.2576 128.852 18.8728C128.852 18.3948 128.809 18.0895 128.709 17.8156C128.608 17.5379 128.435 17.2556 128.116 16.8423C127.094 15.5772 125.057 14.2527 121.968 12.918C118.892 11.5891 114.834 10.2754 109.844 9.00159ZM8.18123 17.5027C7.71685 15.0394 8.50429 12.7228 10.4981 10.4281C10.392 10.475 10.2835 10.5233 10.1733 10.5726L10.1733 10.5727L10.1687 10.5747C8.05875 11.4943 6.71737 12.3271 5.92155 13.2186C5.15354 14.0789 4.86852 15.0225 4.95063 16.262C5.08489 17.9337 6.02525 19.3587 8.70051 21.3585C9.45627 21.922 10.4122 22.5468 11.2959 23.0732C9.49073 21.2752 8.59946 19.6672 8.18165 17.505L8.18123 17.5027Z" fill="#38124A" stroke="#38124A" />
                            </svg>
                            <span className='font-bold z-10 absolute inset-y-2 inset-x-9'>EVENTO</span>
                        </Link>
                        <Link href="#programacao" className='relative'>
                            <svg width="199" height="44" viewBox="0 0 199 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-0 hover:opacity-100 relative z-20">
                                <g clip-path="url(#clip0_1_12)">
                                    <path d="M196.441 19.4808C197.17 20.2619 197.637 20.7984 197.887 21.4322C198.132 22.0577 198.148 22.7407 198.148 23.7722C198.148 24.8239 198.132 25.5085 197.864 26.1434C197.597 26.7792 197.091 27.3293 196.301 28.1592C193.269 31.3613 186.776 34.1786 177.92 36.4483C169.024 38.7288 157.603 40.491 144.545 41.5101L144.543 41.5102C140.704 41.8031 135.123 42.3214 132.184 42.6585L132.181 42.6588C122.159 43.7751 112.871 43.6794 93.3036 42.2783C50.6721 39.2533 25.8412 34.823 11.4839 27.5546C6.56683 25.0618 3.48779 22.5193 2.53874 19.9496C1.55965 17.2986 2.89867 14.8001 6.21163 12.563L6.21375 12.5615C9.05545 10.6573 12.1204 9.49946 18.1967 8.0003C35.6542 3.68611 55.1532 1.67405 88.1976 0.725006C107.374 0.181704 127.814 1.18319 145.431 3.24604C163.016 5.30498 177.898 8.43315 185.886 12.1887L185.891 12.1909C187.619 13.0164 189.769 14.3156 191.717 15.6576C193.658 16.9949 195.451 18.4116 196.441 19.4808ZM196.441 19.4808V19.4808L195.84 19.8204L196.44 19.4794L196.441 19.4808ZM163.036 10.4229L163.035 10.4227C150.345 7.8833 133.614 6.05752 113.008 4.90704C105.338 4.50212 81.4746 4.29912 73.269 4.59167C57.8987 5.15542 45.6702 6.31581 36.5809 8.06428C27.4523 9.82032 21.644 12.142 18.9219 14.9321L18.9184 14.9354C18.1532 15.708 17.7971 16.118 17.5899 16.555C17.3822 16.9928 17.3054 17.4969 17.2378 18.496L17.2372 18.5045C16.9488 21.8304 19.0859 24.642 24.482 27.5644C33.8368 32.64 49.542 35.7056 76.2562 37.6251C98.57 39.2274 103.781 39.4518 120.218 39.4518C136.752 39.4518 139.984 39.2945 151.666 38.0794C163.259 36.8644 177.803 33.8275 184.459 31.2692L184.462 31.2686C188.684 29.6551 191.59 27.4882 192.816 25.2497L191.561 25.9207L191.558 25.922C189.775 26.8671 187.933 27.7569 186.48 28.3902C185.756 28.7058 185.113 28.9639 184.617 29.1332C184.373 29.2169 184.141 29.2866 183.941 29.329C183.843 29.3498 183.727 29.3695 183.608 29.3757C183.512 29.3806 183.293 29.3849 183.075 29.2871L183.057 29.2796L183.041 29.2713C182.87 29.185 182.752 29.0491 182.71 28.8936C182.675 28.7596 182.707 28.6497 182.729 28.5925C182.772 28.4832 182.847 28.404 182.876 28.3735C182.949 28.2974 183.044 28.2236 183.129 28.1627C183.307 28.0324 183.565 27.8659 183.872 27.6791C184.493 27.3023 185.368 26.8092 186.341 26.296L186.342 26.295C188.644 25.088 189.855 24.3712 190.513 23.7506C190.825 23.4562 191 23.1933 191.102 22.9152C191.209 22.6285 191.249 22.2983 191.249 21.8527C191.249 21.2992 191.185 20.9457 191.037 20.6286C190.887 20.307 190.63 19.9802 190.157 19.5016C188.64 18.0368 185.616 16.5031 181.031 14.9577C176.466 13.419 170.443 11.8978 163.036 10.4229ZM12.143 20.2663C11.4538 17.414 12.6225 14.7317 15.5818 12.0746C15.4244 12.1289 15.2633 12.1849 15.0998 12.242L15.0929 12.2444C11.9612 13.3092 9.97028 14.2735 8.78908 15.3057C7.64916 16.3019 7.22612 17.3945 7.34799 18.8297C7.54727 20.7653 8.943 22.4153 12.9138 24.7309C14.0355 25.3834 15.4543 26.1068 16.766 26.7163C14.0867 24.6344 12.7638 22.7725 12.1436 20.2689L12.143 20.2663Z" fill="#38124A" />
                                    <path d="M196.441 19.4808C197.17 20.2619 197.637 20.7984 197.887 21.4322C198.132 22.0577 198.148 22.7407 198.148 23.7722C198.148 24.8239 198.132 25.5085 197.864 26.1434C197.597 26.7792 197.091 27.3293 196.301 28.1592C193.269 31.3613 186.776 34.1786 177.92 36.4483C169.024 38.7288 157.603 40.491 144.545 41.5101L144.543 41.5102C140.704 41.8031 135.123 42.3214 132.184 42.6585L132.181 42.6588C122.159 43.7751 112.871 43.6794 93.3036 42.2783C50.6721 39.2533 25.8412 34.823 11.4839 27.5546C6.56683 25.0618 3.48779 22.5193 2.53874 19.9496C1.55965 17.2986 2.89867 14.8001 6.21163 12.563L6.21375 12.5615C9.05545 10.6573 12.1204 9.49946 18.1967 8.0003C35.6542 3.68611 55.1532 1.67405 88.1976 0.725006C107.374 0.181704 127.814 1.18319 145.431 3.24604C163.016 5.30498 177.898 8.43315 185.886 12.1887L185.891 12.1909C187.619 13.0164 189.769 14.3156 191.717 15.6576C193.658 16.9949 195.451 18.4116 196.441 19.4808ZM196.441 19.4808V19.4808ZM196.441 19.4808L195.84 19.8204L196.44 19.4794L196.441 19.4808ZM163.036 10.4229L163.035 10.4227C150.345 7.8833 133.614 6.05752 113.008 4.90704C105.338 4.50212 81.4746 4.29912 73.269 4.59167C57.8987 5.15542 45.6702 6.31581 36.5809 8.06428C27.4523 9.82032 21.644 12.142 18.9219 14.9321L18.9184 14.9354C18.1532 15.708 17.7971 16.118 17.5899 16.555C17.3822 16.9928 17.3054 17.4969 17.2378 18.496L17.2372 18.5045C16.9488 21.8304 19.0859 24.642 24.482 27.5644C33.8368 32.64 49.542 35.7056 76.2562 37.6251C98.57 39.2274 103.781 39.4518 120.218 39.4518C136.752 39.4518 139.984 39.2945 151.666 38.0794C163.259 36.8644 177.803 33.8275 184.459 31.2692L184.462 31.2686C188.684 29.6551 191.59 27.4882 192.816 25.2497L191.561 25.9207L191.558 25.922C189.775 26.8671 187.933 27.7569 186.48 28.3902C185.756 28.7058 185.113 28.9639 184.617 29.1332C184.373 29.2169 184.141 29.2866 183.941 29.329C183.843 29.3498 183.727 29.3695 183.608 29.3757C183.512 29.3806 183.293 29.3849 183.075 29.2871L183.057 29.2796L183.041 29.2713C182.87 29.185 182.752 29.0491 182.71 28.8936C182.675 28.7596 182.707 28.6497 182.729 28.5925C182.772 28.4832 182.847 28.404 182.876 28.3735C182.949 28.2974 183.044 28.2236 183.129 28.1627C183.307 28.0324 183.565 27.8659 183.872 27.6791C184.493 27.3023 185.368 26.8092 186.341 26.296L186.342 26.295C188.644 25.088 189.855 24.3712 190.513 23.7506C190.825 23.4562 191 23.1933 191.102 22.9152C191.209 22.6285 191.249 22.2983 191.249 21.8527C191.249 21.2992 191.185 20.9457 191.037 20.6286C190.887 20.307 190.63 19.9802 190.157 19.5016C188.64 18.0368 185.616 16.5031 181.031 14.9577C176.466 13.419 170.443 11.8978 163.036 10.4229ZM12.143 20.2663C11.4538 17.414 12.6225 14.7317 15.5818 12.0746C15.4244 12.1289 15.2633 12.1849 15.0998 12.242L15.0929 12.2444C11.9612 13.3092 9.97028 14.2735 8.78908 15.3057C7.64916 16.3019 7.22612 17.3945 7.34799 18.8297C7.54727 20.7653 8.943 22.4153 12.9138 24.7309C14.0355 25.3834 15.4543 26.1068 16.766 26.7163C14.0867 24.6344 12.7638 22.7725 12.1436 20.2689L12.143 20.2663Z" stroke="#38124A" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_12">
                                        <rect width="198.89" height="44" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <span className='font-bold z-10 absolute inset-y-2 inset-x-9'>PROGRAMAÇÃO</span></Link>
                        <Link href="#maratona" className='relative'>
                            <svg width="165" height="44" viewBox="0 0 165 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-0 hover:opacity-100 relative z-20">
                                <g clip-path="url(#clip0_1_12)">
                                    <path d="M162.445 19.4808C163.047 20.2619 163.434 20.7984 163.64 21.4322C163.843 22.0577 163.856 22.7407 163.856 23.7722C163.856 24.8239 163.843 25.5085 163.622 26.1434C163.401 26.7792 162.982 27.3293 162.329 28.1592C159.822 31.3613 154.452 34.1786 147.129 36.4483C139.772 38.7288 130.328 40.491 119.53 41.5101L119.528 41.5102C116.353 41.8031 111.738 42.3214 109.308 42.6585L109.306 42.6588C101.018 43.7751 93.3376 43.6794 77.1564 42.2783C41.9028 39.2533 21.3691 34.823 9.49648 27.5546C5.43037 25.0618 2.88419 22.5193 2.09938 19.9496C1.28974 17.2986 2.39703 14.8001 5.13664 12.563L5.1384 12.5615C7.48831 10.6573 10.0228 9.49946 15.0475 8.0003C29.4838 3.68611 45.6084 1.67405 72.9341 0.725006C88.7919 0.181704 105.694 1.18319 120.263 3.24604C134.804 5.30498 147.111 8.43315 153.717 12.1887L153.721 12.1909C155.149 13.0164 156.928 14.3156 158.538 15.6576C160.143 16.9949 161.626 18.4116 162.445 19.4808ZM162.445 19.4808V19.4808L161.948 19.8204L162.444 19.4794L162.445 19.4808ZM134.821 10.4229L134.82 10.4227C124.326 7.8833 110.491 6.05752 93.4505 4.90704C87.1085 4.50212 67.3745 4.29912 60.589 4.59167C47.8787 5.15542 37.7665 6.31581 30.2502 8.06428C22.7014 9.82032 17.8983 12.142 15.6472 14.9321L15.6444 14.9354C15.0116 15.708 14.7171 16.118 14.5458 16.555C14.3741 16.9928 14.3105 17.4969 14.2546 18.496L14.2541 18.5045C14.0157 21.8304 15.7829 24.642 20.2451 27.5644C27.981 32.64 40.9682 35.7056 63.0593 37.6251C81.5115 39.2274 85.8209 39.4518 99.4134 39.4518C113.086 39.4518 115.759 39.2945 125.418 38.0794C135.005 36.8644 147.032 33.8275 152.536 31.2692L152.539 31.2686C156.03 29.6551 158.434 27.4882 159.448 25.2497L158.409 25.9207L158.407 25.922C156.933 26.8671 155.409 27.7569 154.208 28.3902C153.609 28.7058 153.077 28.9639 152.667 29.1332C152.465 29.2169 152.273 29.2866 152.108 29.329C152.027 29.3498 151.931 29.3695 151.833 29.3757C151.753 29.3806 151.573 29.3849 151.392 29.2871L151.377 29.2796L151.364 29.2713C151.223 29.185 151.125 29.0491 151.09 28.8936C151.061 28.7596 151.088 28.6497 151.106 28.5925C151.142 28.4832 151.203 28.404 151.228 28.3735C151.288 28.2974 151.366 28.2236 151.436 28.1627C151.584 28.0324 151.797 27.8659 152.051 27.6791C152.564 27.3023 153.288 26.8092 154.092 26.296L154.094 26.295C155.997 25.088 156.999 24.3712 157.543 23.7506C157.8 23.4562 157.945 23.1933 158.03 22.9152C158.118 22.6285 158.151 22.2983 158.151 21.8527C158.151 21.2992 158.099 20.9457 157.976 20.6286C157.852 20.307 157.64 19.9802 157.248 19.5016C155.994 18.0368 153.493 16.5031 149.702 14.9577C145.927 13.419 140.946 11.8978 134.821 10.4229ZM10.0415 20.2663C9.47157 17.414 10.4381 14.7317 12.8852 12.0746C12.755 12.1289 12.6218 12.1849 12.4866 12.242L12.4809 12.2444C9.89121 13.3092 8.24482 14.2735 7.26804 15.3057C6.32539 16.3019 5.97556 17.3945 6.07634 18.8297C6.24113 20.7653 7.39532 22.4153 10.6789 24.7309C11.6065 25.3834 12.7798 26.1068 13.8645 26.7163C11.6488 24.6344 10.5549 22.7725 10.0421 20.2689L10.0415 20.2663Z" fill="#38124A" />
                                    <path d="M162.445 19.4808C163.047 20.2619 163.434 20.7984 163.64 21.4322C163.843 22.0577 163.856 22.7407 163.856 23.7722C163.856 24.8239 163.843 25.5085 163.622 26.1434C163.401 26.7792 162.982 27.3293 162.329 28.1592C159.822 31.3613 154.452 34.1786 147.129 36.4483C139.772 38.7288 130.328 40.491 119.53 41.5101L119.528 41.5102C116.353 41.8031 111.738 42.3214 109.308 42.6585L109.306 42.6588C101.018 43.7751 93.3376 43.6794 77.1564 42.2783C41.9028 39.2533 21.3691 34.823 9.49648 27.5546C5.43037 25.0618 2.88419 22.5193 2.09938 19.9496C1.28974 17.2986 2.39703 14.8001 5.13664 12.563L5.1384 12.5615C7.48831 10.6573 10.0228 9.49946 15.0475 8.0003C29.4838 3.68611 45.6084 1.67405 72.9341 0.725006C88.7919 0.181704 105.694 1.18319 120.263 3.24604C134.804 5.30498 147.111 8.43315 153.717 12.1887L153.721 12.1909C155.149 13.0164 156.928 14.3156 158.538 15.6576C160.143 16.9949 161.626 18.4116 162.445 19.4808ZM162.445 19.4808V19.4808ZM162.445 19.4808L161.948 19.8204L162.444 19.4794L162.445 19.4808ZM134.821 10.4229L134.82 10.4227C124.326 7.8833 110.491 6.05752 93.4505 4.90704C87.1085 4.50212 67.3745 4.29912 60.589 4.59167C47.8787 5.15542 37.7665 6.31581 30.2502 8.06428C22.7014 9.82032 17.8983 12.142 15.6472 14.9321L15.6444 14.9354C15.0116 15.708 14.7171 16.118 14.5458 16.555C14.3741 16.9928 14.3105 17.4969 14.2546 18.496L14.2541 18.5045C14.0157 21.8304 15.7829 24.642 20.2451 27.5644C27.981 32.64 40.9682 35.7056 63.0593 37.6251C81.5115 39.2274 85.8209 39.4518 99.4134 39.4518C113.086 39.4518 115.759 39.2945 125.418 38.0794C135.005 36.8644 147.032 33.8275 152.536 31.2692L152.539 31.2686C156.03 29.6551 158.434 27.4882 159.448 25.2497L158.409 25.9207L158.407 25.922C156.933 26.8671 155.409 27.7569 154.208 28.3902C153.609 28.7058 153.077 28.9639 152.667 29.1332C152.465 29.2169 152.273 29.2866 152.108 29.329C152.027 29.3498 151.931 29.3695 151.833 29.3757C151.753 29.3806 151.573 29.3849 151.392 29.2871L151.377 29.2796L151.364 29.2713C151.223 29.185 151.125 29.0491 151.09 28.8936C151.061 28.7596 151.088 28.6497 151.106 28.5925C151.142 28.4832 151.203 28.404 151.228 28.3735C151.288 28.2974 151.366 28.2236 151.436 28.1627C151.584 28.0324 151.797 27.8659 152.051 27.6791C152.564 27.3023 153.288 26.8092 154.092 26.296L154.094 26.295C155.997 25.088 156.999 24.3712 157.543 23.7506C157.8 23.4562 157.945 23.1933 158.03 22.9152C158.118 22.6285 158.151 22.2983 158.151 21.8527C158.151 21.2992 158.099 20.9457 157.976 20.6286C157.852 20.307 157.64 19.9802 157.248 19.5016C155.994 18.0368 153.493 16.5031 149.702 14.9577C145.927 13.419 140.946 11.8978 134.821 10.4229ZM10.0415 20.2663C9.47157 17.414 10.4381 14.7317 12.8852 12.0746C12.755 12.1289 12.6218 12.1849 12.4866 12.242L12.4809 12.2444C9.89121 13.3092 8.24482 14.2735 7.26804 15.3057C6.32539 16.3019 5.97556 17.3945 6.07634 18.8297C6.24113 20.7653 7.39532 22.4153 10.6789 24.7309C11.6065 25.3834 12.7798 26.1068 13.8645 26.7163C11.6488 24.6344 10.5549 22.7725 10.0421 20.2689L10.0415 20.2663Z" stroke="#38124A" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_12">
                                        <rect width="164.47" height="44" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className='font-bold z-10 absolute inset-y-2 inset-x-9'>MARATONA</span></Link>
                    </Stack>
                    <Button target='_blank' href={Info.EVENT_SALE_URL} variant="contained" disableElevation className='bt-tickets bg-[#38124A] rounded-3xl py-4 px-7 hover:bg-[#E4E7E5] text-[#F6F6F6] font-bold border-2 border-solid hover:border-[#38124A] hover:text-[#38124A]'>
                        <Stack spacing={1} direction="row">
                            <span>INSCRIÇÕES</span>
                            <SvgIcon>
                                <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 0H16.6667V4H12.5V0Z" fill="#FFFFFF" />
                                    <path d="M16.6667 4H20.8333V8H16.6667V4Z" fill="#FFFFFF" />
                                    <path d="M16.6667 12H20.8333V16H16.6667V12Z" fill="#FFFFFF" />
                                    <path d="M12.5 16H16.6667V20H12.5V16Z" fill="#FFFFFF" />
                                    <path d="M16.6667 8H20.8333V12H16.6667V8Z" fill="#FFFFFF" />
                                    <path d="M12.5 8H16.6667V12H12.5V8Z" fill="#FFFFFF" />
                                    <path d="M8.33333 8H12.5V12H8.33333V8Z" fill="#FFFFFF" />
                                    <path d="M4.16667 8H8.33333V12H4.16667V8Z" fill="#FFFFFF" />
                                    <path d="M0 8H4.16667V12H0V8Z" fill="#FFFFFF" />
                                    <path d="M20.8333 8H25V12H20.8333V8Z" fill="#FFFFFF" />
                                </svg>
                            </SvgIcon>
                        </Stack>
                    </Button>
                    <IconButton onClick={handleDrawerToggle} className='block md:hidden  '>
                        <SvgIcon>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 2H20" stroke="black" stroke-width="3" />
                                <path d="M0 10H20" stroke="black" stroke-width="3" />
                                <path d="M0 18H20" stroke="black" stroke-width="3" />
                            </svg>
                        </SvgIcon>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    className='w-1/2'
                    anchor='right'
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 225, background: '#38124A' },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </div>
    )
}
