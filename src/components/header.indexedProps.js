import React from "react"
import headerStyles from "./header.module.css"
console.log(headerStyles)
const Header = () => {
  return (
<div className={headerStyles['western-header']}>
  <div className={headerStyles['wrap']}>
    <div className={headerStyles['western-logo']}>
      <a className={headerStyles['western-home-link']} href="https://wwu.edu">
      <div className={headerStyles['logo']}>
  <span className={headerStyles['visually-hidden']}>Western Washington University</span>
  <svg role="presentation" aria-hidden="true" x="0px" y="0px" viewBox="0 0 282.4 142.3">
    <title id="logo-sub-text">Western Washington University</title>
    <path fill="#FFFFFF" d="M0.3,72.8c3.3,0,5.9,0.3,10.3,0.3c4.7-0.1,6.9-0.2,8.8-0.2c0.2,0.2,0.2,1.1,0,1.3
    c-2.1,0.4-2.7,0.5-3.4,0.8c-1.1,0.5-1.4,1.4-0.8,3.6c2,8.3,7.1,25.6,9.9,35c0,0,0.2-0.1,0.2-0.2c2.9-8.1,11.4-32.2,13-38.4
    c0.6,0.1,2.6,0,3.1-0.1c1.5,6.3,10.8,32.1,13.4,38.9c0.1,0,0.2-0.1,0.3-0.1c2.1-6.6,8.1-26.4,9.5-33.3c0.5-2.6,0.7-4.8-1.5-5.4
    c-1.3-0.3-2.3-0.6-4.7-0.9c-0.2-0.3-0.3-1.1,0-1.3c1.8,0,5.8,0.2,9,0.2c4.5,0,6.7-0.2,8.3-0.2c0.3,0.2,0.3,1.1,0,1.3
    c-2,0.4-3.2,0.7-4,1c-1.8,0.8-2.6,2.1-3.8,5.4c-3.3,9.6-11.3,35.5-13.6,44c-0.4,0-2.7-0.1-3.2,0.1c-2.1-7.3-9.6-28.7-13.4-39.2
    c-0.1,0-0.2,0-0.3,0.2c-3,8.7-11.3,31.9-13.3,38.9c-0.3-0.1-2.9-0.1-3.4,0.1C18.4,114.4,11.2,88.8,8.5,81
    c-1.4-4.3-2.3-5.4-4.6-6.1c-1.3-0.3-2.2-0.5-3.8-0.8C-0.1,74-0.1,73,0.3,72.8z"/>
    <path fill="#FFFFFF" d="M69.9,87.6c1.4,0,4.8,0.2,8,0.2h12.5c3.4,0,5.4-0.1,6.6-0.3c0,0,0.2,0.2,0.2,0.2c-0.6,1.8-1.2,5.9-1.2,8.6
    c-0.2,0.2-1.1,0.2-1.3,0c-0.2-1.3-0.4-3-0.8-3.8c-0.4-1.7-0.8-2.4-3.1-2.6c-1.5-0.2-8.1-0.1-8.9,0c-0.4,0.1-0.7,0.8-0.7,1.1
    c-0.1,4.1-0.2,11.5-0.1,12.8c0,0.2,0.2,0.4,0.3,0.4c2.8,0,7.1,0,8.8-0.1c1.8-0.1,2.2-1.2,2.6-2.4c0.2-0.8,0.4-1.6,0.5-2.3
    c0.2-0.1,1.3-0.1,1.3,0.1c-0.1,0.8-0.3,4.3-0.3,5.9c0,1.2,0.2,4.5,0.2,5.9c-0.2,0.2-1.2,0.2-1.4,0c-0.2-1.2-0.3-1.9-0.5-2.5
    c-0.3-0.9-0.7-1.9-2.3-2.1c-1.8-0.2-6.4-0.2-8.9-0.2c-0.1,0-0.3,0.4-0.3,0.5c0,1.5,0,8.1,0.1,11.7c0.1,1.9,1,2.7,1.4,2.8
    c1.4,0.3,4.1,0.4,8,0.4c3.4,0,4.2-0.8,5.1-1.8c1.3-1.5,2.5-3.7,3.4-6c0.2-0.1,1.2,0.2,1.2,0.5c-0.2,1.4-1.8,6.8-2.9,8.9
    c-0.2,0.4-0.7,0.6-2.3,0.6c-3.2,0-8.4-0.2-17.4-0.2c-3.8,0-6.8,0.3-9.4,0.3c-0.2-0.2-0.2-1.2,0-1.3c1.6-0.1,3.5-0.3,4.6-0.7
    c1.4-0.4,1.9-0.9,2-3.3c0.1-2.2,0.1-7.9,0.1-14.8c0-5.7-0.1-10.6-0.1-11.7c-0.2-1.9-0.5-2.5-1.9-3c-0.8-0.2-2.3-0.5-3.3-0.6
    C69.7,88.7,69.7,87.7,69.9,87.6z"/>
    <path fill="#FFFFFF" d="M110.4,121.7c1.5,1.2,3.8,1.8,5.9,1.8c3.7,0,6.9-1.9,6.9-6.3c0-3.4-1.6-5.7-8.2-9.1c-6.1-3.3-9-6.1-9-11.3
    c0-6.6,6-10,12.5-10c2.8,0,4.2,0.2,5.7,0.4c1.3,0.2,2.9,0.4,3.5,0.4c-0.3,1.8-0.8,5.7-1,8.8c-0.2,0.2-1.2,0.2-1.3,0
    c-0.2-3.7-1.1-5.5-2.4-6.6c-1.2-1-3.2-1.5-5.4-1.5c-4.3,0-6.3,2.9-6.3,6.1c0,3.2,1.7,5.2,4.1,6.6c2.8,1.7,5.1,2.8,7.6,4.3
    c3.1,1.8,6,4.3,6,8.9c0,5.8-5.3,10.9-13.8,10.9c-3.4,0-7.9-1.1-9.2-1.8c-0.5-0.8-1.2-7.2-1.3-9.3c0.1-0.2,1-0.4,1.2-0.3
    C107,117.8,108.5,120.4,110.4,121.7z"/>
    <path fill="#FFFFFF" d="M143.7,122.4c1.8-0.3,2.3-1.3,2.4-4.2c0.2-2.6,0.3-18.6,0.3-28c0-0.2-0.3-0.4-0.4-0.4
    c-1.1-0.1-5.8,0-7,0.1c-1.3,0.1-2.3,0.8-3.1,2.2c-0.8,1.3-1.5,3.3-2.4,5.7c-0.2,0-1.2-0.2-1.3-0.3c0.5-2.4,1-7.8,1.2-10.3
    c0-0.1,0.2-0.2,0.3-0.1c1.6,0.7,3.2,0.8,4.6,0.8h23c2,0,3.3,0.1,5.3-0.7c0.1,0,0.3,0.1,0.3,0.2c-0.6,2.1-0.9,7.4-1.2,10.5
    c-0.2,0.2-1.3,0.3-1.3,0c-0.3-2.4-0.7-4.3-1.2-5.4c-0.7-1.7-1.6-2.2-2.9-2.3c-2.2-0.2-6.4-0.2-7.7-0.2c-0.2,0.1-0.2,0.3-0.2,0.5
    c0,8.4,0,26.3,0.2,29.4c0.1,1.3,0.6,2.3,1.9,2.7c0.9,0.2,2,0.3,3.6,0.6c0.2,0.1,0.2,1.2-0.1,1.3c-1.8,0-5.4-0.3-9.3-0.3
    c-4.3,0-7.5,0.3-9.1,0.3c-0.2-0.2-0.2-1.2,0-1.3C141.6,122.8,142.8,122.7,143.7,122.4z"/>
    <path fill="#FFFFFF" d="M169.9,87.6c1.4,0,4.8,0.2,8,0.2h12.5c3.4,0,5.4-0.1,6.6-0.3c0,0,0.2,0.2,0.2,0.2
    c-0.6,1.8-1.2,5.9-1.2,8.6c-0.2,0.2-1.1,0.2-1.3,0c-0.2-1.3-0.4-3-0.7-3.8c-0.4-1.7-0.8-2.4-3.1-2.6c-1.5-0.2-8.1-0.1-8.9,0
    c-0.4,0.1-0.7,0.8-0.7,1.1c-0.1,4.1-0.2,11.5-0.1,12.8c0,0.2,0.2,0.4,0.3,0.4c2.8,0,7.1,0,8.8-0.1c1.8-0.1,2.2-1.2,2.6-2.4
    c0.3-0.8,0.4-1.6,0.5-2.3c0.2-0.1,1.3-0.1,1.3,0.1c-0.1,0.8-0.3,4.3-0.3,5.9c0,1.2,0.2,4.5,0.2,5.9c-0.3,0.2-1.2,0.2-1.4,0
    c-0.2-1.2-0.3-1.9-0.5-2.5c-0.3-0.9-0.7-1.9-2.3-2.1c-1.8-0.2-6.4-0.2-8.9-0.2c-0.1,0-0.2,0.4-0.2,0.5c0,1.5,0,8.1,0.1,11.7
    c0.1,1.9,1,2.7,1.4,2.8c1.4,0.3,4.1,0.4,8,0.4c3.4,0,4.2-0.8,5.1-1.8c1.3-1.5,2.5-3.7,3.4-6c0.3-0.1,1.2,0.2,1.2,0.5
    c-0.2,1.4-1.8,6.8-2.9,8.9c-0.2,0.4-0.7,0.6-2.3,0.6c-3.2,0-8.4-0.2-17.3-0.2c-3.8,0-6.8,0.3-9.4,0.3c-0.2-0.2-0.2-1.2,0-1.3
    c1.6-0.1,3.5-0.3,4.6-0.7c1.4-0.4,1.9-0.9,2-3.3c0.1-2.2,0.1-7.9,0.1-14.8c0-5.7-0.1-10.6-0.1-11.7c-0.2-1.9-0.5-2.5-1.9-3
    c-0.8-0.2-2.3-0.5-3.3-0.6C169.6,88.7,169.6,87.7,169.9,87.6z"/>
    <path fill="#FFFFFF" d="M203.7,87.6c1.4,0,5.3,0.2,7.8,0.2h10.4c7.3,0,10.6,3.9,10.6,8.8c0,4.8-3.8,7.8-7.5,9.3
    c-0.1,0.1,0,0.3,0.1,0.4c2,3.3,7.4,11.3,10.4,14.1c2.2,2.3,3.3,2.3,5.8,2.7c0.1,0,0,1.3-0.2,1.3c-2.5,0.2-8,0-9.8-0.8
    c-0.9-0.3-1.8-1-2.8-2.2c-2.3-2.6-6.4-9.3-8.7-12.7c-0.5-0.8-0.9-1-1.9-1.2c-0.8-0.1-1.9-0.1-2.8-0.1c-0.2,0-0.2,0.3-0.2,0.4
    c0,3.3,0.1,8.9,0.2,11.2c0.2,2.5,0.7,2.9,1.8,3.3c0.8,0.2,1.8,0.4,3.3,0.6c0.2,0.2,0.1,1.2-0.1,1.3c-1.3,0-4.8-0.3-8.8-0.3
    c-4.3,0-7.1,0.3-8.3,0.3c-0.2-0.1-0.2-1.3,0-1.3c1.3-0.2,3-0.3,3.6-0.5c1.4-0.3,2-1.1,2.2-3.3c0.1-1.6,0.1-9.3,0.1-12.4
    c0-4.8,0.1-12.8-0.1-14.8c-0.1-1.6-0.8-2-1.8-2.3c-0.8-0.2-2.3-0.5-3.6-0.6C203.4,88.7,203.5,87.7,203.7,87.6z M215.1,90.6
    c-0.1,1.8-0.2,9.7-0.2,14.5c0,0.3,0.1,0.5,0.4,0.5c1.3,0.1,5.1,0.1,6.6-0.2c2.2-0.6,4.3-2.3,4.3-7.2c0-5.4-2.8-8.6-8.8-8.6
    c-0.6,0-1.4,0.1-1.9,0.2C215.3,89.9,215.1,90.3,215.1,90.6z"/>
    <path fill="#FFFFFF" d="M240.1,87.5c1.1,0,5.1,0.2,7.8,0.2c1.3,0,3.3,0,3.9-0.1c0.2,0.5,0.6,1.3,2.1,3.2
    c6.3,7.9,18.2,22.2,20.9,25.3c0.1,0.1,0.2-0.1,0.2-0.2c0-7.8-0.2-19.4-0.4-23.3c-0.1-1.8-0.8-3-2.5-3.3c-0.8-0.2-1.4-0.3-3.1-0.5
    c-0.1-0.2-0.1-1.2,0-1.3c1.5,0,3.9,0.2,7.1,0.2c1.9,0,5.6-0.2,6.3-0.2c0.1,0.2,0.1,1.1,0,1.2c-1,0.2-2.3,0.3-2.9,0.6
    c-1.5,0.4-1.7,1.6-1.8,3c-0.3,4.5-0.4,16.7-0.4,24.1c0,2.7,0.1,6.1,0.2,7.9c-1.3-0.1-3.3,0-4.4,0.1c-2.6-3.8-21-26.8-23.8-30.1
    c-0.1-0.1-0.2-0.1-0.2,0c-0.1,6,0,20.9,0.1,24.3c0.2,2.8,0.9,3.2,2.2,3.8c0.8,0.3,2.6,0.6,3.8,0.7c0.2,0.1,0.2,1.2,0,1.3
    c-1.2,0-4.8-0.3-7.8-0.3c-2.9,0-5.4,0.3-6.7,0.3c-0.2-0.2-0.2-1.3,0-1.3c0.8-0.1,2.4-0.2,3.7-0.7c1.4-0.5,1.7-1.8,1.8-3.6
    c0.3-2.7,0.5-12.9,0.5-25.7c0-1.1-0.3-2-1.3-2.8c-1.1-0.9-2.2-1.3-5.3-1.5C239.9,88.7,239.9,87.7,240.1,87.5z"/>
    <path fill="#FFFFFF" d="M16.6,133.4c0.3,0,1,0.1,1.8,0.1c1.1,0,1.6-0.1,1.9-0.1c0,0,0,0.3,0,0.3l-0.7,0.1c-0.1,0-0.2,0.2-0.2,0.4
    c0.1,0.7,1.6,5.3,1.8,5.9c0,0,0,0,0,0c0.2-0.5,0.7-2,1.3-4c0.3-0.9,0.5-1.5,0.6-2.2c0.2,0,0.6,0,0.8,0c0.1,0.2,0.2,0.6,0.4,1.3
    c0.5,1.3,1.7,4.5,1.9,5c0,0,0,0,0.1,0c0.2-0.5,1.5-4.6,1.7-5.5c0.1-0.5,0-0.7-0.3-0.8c-0.2-0.1-0.5-0.1-0.8-0.2
    c-0.1-0.1,0-0.3,0-0.3c0.1,0,1,0.1,1.7,0.1c0.8,0,1.3-0.1,1.5-0.1c0.1,0,0.1,0.3,0,0.3l-0.6,0.1c-0.4,0.1-0.6,0.3-1,1.2
    c-0.3,0.9-1.2,3.6-1.8,5.4c-0.2,0.7-0.3,1.1-0.5,1.7c-0.2,0-0.7,0-0.9,0c-0.6-1.8-1.8-4.7-2.3-6.2h-0.1c-0.5,1.5-1.6,4.7-2,6.2
    c-0.1,0-0.7,0-0.9,0c-0.1-0.5-0.3-1.2-0.5-1.9c-0.6-1.8-1.3-4.1-1.8-5.5c-0.2-0.7-0.4-0.9-0.8-0.9c-0.2-0.1-0.4-0.1-0.7-0.1
    C16.6,133.7,16.6,133.4,16.6,133.4z"/>
    <path fill="#FFFFFF" d="M34.3,140.6c0.6-1.3,2.2-5.3,2.6-6.4c0.1-0.3,0.2-0.6,0.2-0.8c0,0,0.2,0,0.5,0c0.3,0,0.4,0,0.5,0
    c0,0.1,0.1,0.4,0.2,0.7c0.3,0.9,1.9,5.5,2.4,6.6c0.4,0.9,0.5,1,1.5,1.1c0,0,0,0.3,0,0.3c-0.3,0-1-0.1-1.7-0.1
    c-0.9,0-1.6,0.1-2,0.1c0,0,0-0.3,0-0.3c0.3,0,0.5-0.1,0.7-0.1c0.3-0.1,0.3-0.3,0.2-0.4c-0.2-0.7-0.6-1.8-0.9-2.5
    c0,0-0.1-0.1-0.1-0.1c-0.1,0-0.5,0-1.3,0c-0.9,0-1.1,0-1.2,0c-0.1,0-0.2,0.1-0.2,0.1c-0.3,0.7-0.8,1.9-0.9,2.3
    c0,0.2,0,0.5,0.4,0.6c0.2,0.1,0.4,0.1,0.7,0.1c0,0,0,0.3,0,0.3c-0.3,0-1.2-0.1-1.8-0.1c-0.7,0-1.2,0.1-1.5,0.1c0,0,0-0.3,0-0.3
    C33.6,141.7,33.8,141.6,34.3,140.6z M36,138C36,138,36,138,36,138c0.2,0.1,0.2,0.1,0.9,0.1c0.4,0,1,0,1.2,0c0,0,0.1,0,0-0.1
    c-0.3-1-0.8-2.4-1-3h-0.1L36,138z"/>
    <path fill="#FFFFFF" d="M48.3,141.5c0.4,0.3,0.9,0.4,1.4,0.4c0.9,0,1.6-0.5,1.6-1.5c0-0.8-0.4-1.3-1.9-2.2
    c-1.4-0.8-2.1-1.4-2.1-2.7c0-1.6,1.4-2.4,3-2.4c0.7,0,1,0.1,1.3,0.1c0.3,0,0.7,0.1,0.8,0.1c-0.1,0.4-0.2,1.3-0.2,2.1
    c0,0-0.3,0.1-0.3,0c-0.1-0.9-0.3-1.3-0.6-1.6c-0.3-0.2-0.8-0.4-1.3-0.4c-1,0-1.5,0.7-1.5,1.4c0,0.8,0.4,1.2,1,1.6
    c0.7,0.4,1.2,0.7,1.8,1c0.7,0.4,1.4,1,1.4,2.1c0,1.4-1.3,2.6-3.3,2.6c-0.8,0-1.9-0.3-2.2-0.4c-0.1-0.2-0.3-1.7-0.3-2.2
    c0,0,0.2-0.1,0.3-0.1C47.5,140.6,47.9,141.2,48.3,141.5z"/>
    <path fill="#FFFFFF" d="M57.9,133.4c0.4,0,1.2,0.1,1.9,0.1c0.8,0,1.7-0.1,2-0.1c0.1,0,0,0.3,0,0.3l-0.7,0.1
    c-0.3,0.1-0.4,0.2-0.4,0.6c0,0.5,0,1.4,0,2.7c0,0,0,0.1,0.1,0.1c0.1,0,0.6,0,2.2,0c1.3,0,1.9,0,2.2,0c0.1,0,0.1,0,0.1-0.1
    c0-0.7,0-2.2,0-2.7c0-0.4-0.2-0.6-0.5-0.7c-0.2,0-0.5-0.1-0.8-0.1c0,0,0-0.3,0-0.3c0.4,0,1,0.1,1.9,0.1c1.1,0,1.7-0.1,2-0.1
    c0.1,0,0.1,0.3,0,0.3c-0.3,0-0.6,0.1-0.7,0.1c-0.3,0.1-0.5,0.2-0.5,0.7c0,0.6,0,1.4,0,3.2c0,1.2,0,2.7,0.1,3.2
    c0,0.4,0.1,0.6,0.4,0.7c0.3,0.1,0.4,0.1,0.9,0.1c0,0,0,0.3,0,0.3c-0.5,0-1.2-0.1-2.1-0.1c-0.8,0-1.4,0-1.8,0.1c0,0,0-0.3,0-0.3
    c0.3,0,0.6-0.1,0.7-0.1c0.3-0.1,0.4-0.3,0.4-0.7c0-0.4,0-2.1,0-2.9c0-0.1,0-0.1-0.1-0.1c-0.2,0-1.3,0-2.1,0c-1.1,0-2.2,0-2.3,0
    c0,0-0.1,0.1-0.1,0.1c0,0.8,0,2.4,0,2.8c0,0.5,0.1,0.8,0.4,0.9c0.2,0.1,0.4,0.1,0.8,0.2c0,0,0,0.3,0,0.3c-0.6,0-1.2-0.1-2-0.1
    c-1.1,0-1.6,0.1-2,0.1c0,0-0.1-0.3,0-0.3c0.3,0,0.7-0.1,0.9-0.1c0.4-0.1,0.4-0.3,0.5-1c0-0.5,0-1.8,0-3.1c0-1.3,0-2.9,0-3.2
    c0-0.4-0.2-0.5-0.4-0.6c-0.3-0.1-0.5-0.1-0.9-0.1C57.8,133.7,57.8,133.5,57.9,133.4z"/>
    <path fill="#FFFFFF" d="M72.9,133.4c0.3,0,1.2,0.1,1.9,0.1c0.7,0,1.6-0.1,2-0.1c0.1,0,0.1,0.3,0,0.3c-0.2,0-0.6,0.1-0.7,0.1
    c-0.3,0.1-0.4,0.3-0.4,0.7c0,0.6,0,1.9,0,3.1c0,1.5,0,2.8,0,3.3c0,0.4,0.1,0.6,0.4,0.8c0.2,0.1,0.5,0.1,0.9,0.2c0,0,0,0.3,0,0.3
    c-0.3,0-1.2-0.1-2-0.1c-0.9,0-1.4,0.1-2,0.1c0,0-0.1-0.3,0-0.3c0.3,0,0.6-0.1,0.8-0.1c0.3-0.1,0.4-0.3,0.5-0.7c0-0.4,0-2.4,0-3.7
    c0-1.1,0-2.2,0-2.8c0-0.4-0.1-0.6-0.4-0.7c-0.2-0.1-0.5-0.1-0.9-0.1C72.9,133.7,72.9,133.4,72.9,133.4z"/>
    <path fill="#FFFFFF" d="M81.8,133.4c0.3,0,1.2,0.1,1.8,0.1c0.3,0,0.8,0,0.9,0c0,0.1,0.1,0.3,0.5,0.8c1.5,1.9,4.3,5.3,5,6
    c0,0,0,0,0.1,0c0-1.8,0-4.6-0.1-5.5c0-0.4-0.2-0.7-0.6-0.8c-0.2-0.1-0.3-0.1-0.7-0.1c0-0.1,0-0.3,0-0.3c0.4,0,0.9,0.1,1.7,0.1
    c0.5,0,1.3-0.1,1.5-0.1c0,0,0,0.3,0,0.3c-0.2,0-0.5,0.1-0.7,0.1c-0.4,0.1-0.4,0.4-0.4,0.7c-0.1,1.1-0.1,4-0.1,5.7
    c0,0.6,0,1.4,0,1.9c-0.3,0-0.8,0-1.1,0c-0.6-0.9-5-6.4-5.7-7.2c0,0,0,0,0,0c0,1.4,0,4.9,0,5.7c0,0.7,0.2,0.8,0.5,0.9
    c0.2,0.1,0.6,0.1,0.9,0.2c0.1,0,0,0.3,0,0.3c-0.3,0-1.1-0.1-1.8-0.1c-0.7,0-1.3,0.1-1.6,0.1c-0.1,0-0.1-0.3,0-0.3
    c0.2,0,0.6-0.1,0.9-0.2c0.3-0.1,0.4-0.4,0.4-0.9c0.1-0.6,0.1-3,0.1-6.1c0-0.3-0.1-0.5-0.3-0.7c-0.3-0.2-0.5-0.3-1.2-0.4
    C81.7,133.7,81.7,133.4,81.8,133.4z"/>
    <path fill="#FFFFFF" d="M105.2,141.8c-0.4,0.1-1.9,0.5-3.2,0.5c-3.2,0-4.9-1.6-4.9-4.6c0-1.8,0.9-3.3,2.5-4c0.8-0.4,1.7-0.5,3-0.5
    c0.5,0,1.3,0.1,1.7,0.1c0.4,0.1,0.8,0.1,1,0.1c-0.1,0.6-0.2,1.6-0.3,2.3c0,0-0.2,0.1-0.3,0c-0.2-1.1-0.3-1.5-0.8-1.8
    c-0.5-0.3-1.1-0.4-1.8-0.4c-2.2,0-3.3,1.6-3.3,4c0,2.6,1.3,4.3,3.7,4.3c0.4,0,0.7-0.1,0.9-0.2c0.1-0.1,0.2-0.3,0.3-0.5
    c0-0.4,0.1-1.2,0-1.7c0-0.5-0.2-0.6-0.5-0.7l-0.8-0.1c0-0.1,0-0.3,0-0.3c0.5,0,1.4,0,2,0c0.7,0,1.2,0,1.5,0c0,0,0.1,0.3,0,0.3
    l-0.5,0.1c-0.3,0.1-0.3,0.2-0.3,0.8c0,0.5,0,1.3,0,1.6c0,0.2,0.1,0.3,0.3,0.4C105.3,141.6,105.3,141.8,105.2,141.8z"/>
    <path fill="#FFFFFF" d="M113,141.7c0.4-0.1,0.6-0.3,0.6-1c0-0.6,0.1-4.4,0.1-6.7c0,0-0.1-0.1-0.1-0.1c-0.3,0-1.4,0-1.7,0
    c-0.3,0-0.6,0.2-0.7,0.5c-0.2,0.3-0.4,0.8-0.6,1.3c0,0-0.3,0-0.3-0.1c0.1-0.6,0.2-1.9,0.3-2.5c0,0,0,0,0.1,0
    c0.4,0.2,0.8,0.2,1.1,0.2h5.5c0.5,0,0.8,0,1.3-0.2c0,0,0.1,0,0.1,0.1c-0.1,0.5-0.2,1.8-0.3,2.5c0,0-0.3,0.1-0.3,0
    c-0.1-0.6-0.2-1-0.3-1.3c-0.2-0.4-0.4-0.5-0.7-0.6c-0.5,0-1.5-0.1-1.8,0c0,0-0.1,0.1-0.1,0.1c0,2,0,6.2,0.1,7
    c0,0.3,0.1,0.5,0.5,0.6c0.2,0.1,0.5,0.1,0.9,0.1c0.1,0,0,0.3,0,0.3c-0.4,0-1.3-0.1-2.2-0.1c-1,0-1.8,0.1-2.2,0.1
    c-0.1,0-0.1-0.3,0-0.3C112.6,141.8,112.8,141.7,113,141.7z"/>
    <path fill="#FFFFFF" d="M124.6,141c-0.9-0.9-1.2-2.2-1.2-3.3c0-1,0.3-1.9,0.8-2.7c0.8-1.2,2.4-1.9,3.9-1.9c2.9,0,4.4,2.1,4.4,4.4
    c0,1.2-0.3,2.1-0.9,2.9c-0.8,1.2-2.2,1.8-3.8,1.8C126.5,142.3,125.4,141.8,124.6,141z M130.9,138c0-2.1-1-4.4-3.3-4.4
    c-2,0-2.7,1.8-2.7,3.7c0,2.1,1,4.5,3.4,4.5C130.4,141.8,130.9,139.9,130.9,138z"/>
    <path fill="#FFFFFF" d="M137.6,133.4c0.3,0,1.2,0.1,1.8,0.1c0.3,0,0.8,0,0.9,0c0,0.1,0.1,0.3,0.5,0.8c1.5,1.9,4.3,5.3,5,6
    c0,0,0,0,0.1,0c0-1.8,0-4.6-0.1-5.5c0-0.4-0.2-0.7-0.6-0.8c-0.2-0.1-0.3-0.1-0.7-0.1c0-0.1,0-0.3,0-0.3c0.4,0,0.9,0.1,1.7,0.1
    c0.5,0,1.3-0.1,1.5-0.1c0,0,0,0.3,0,0.3c-0.2,0-0.5,0.1-0.7,0.1c-0.4,0.1-0.4,0.4-0.4,0.7c-0.1,1.1-0.1,4-0.1,5.7
    c0,0.6,0,1.4,0,1.9c-0.3,0-0.8,0-1.1,0c-0.6-0.9-5-6.4-5.7-7.2c0,0,0,0,0,0c0,1.4,0,4.9,0,5.7c0,0.7,0.2,0.8,0.5,0.9
    c0.2,0.1,0.6,0.1,0.9,0.2c0.1,0,0,0.3,0,0.3c-0.3,0-1.1-0.1-1.8-0.1c-0.7,0-1.3,0.1-1.6,0.1c-0.1,0-0.1-0.3,0-0.3
    c0.2,0,0.6-0.1,0.9-0.2c0.3-0.1,0.4-0.4,0.4-0.9c0.1-0.6,0.1-3,0.1-6.1c0-0.3-0.1-0.5-0.3-0.7c-0.3-0.2-0.5-0.3-1.2-0.4
    C137.6,133.7,137.6,133.4,137.6,133.4z"/>
    <path fill="#FFFFFF" d="M159.5,133.4c0.3,0,0.8,0.1,1.9,0.1c1,0,1.6-0.1,1.9-0.1c0.1,0.1,0,0.2,0,0.3c-0.3,0-0.5,0.1-0.7,0.1
    c-0.3,0.1-0.4,0.2-0.4,0.8c0,1.1,0,3.4,0,4.1c0.1,1,0.2,1.5,0.5,1.9c0.4,0.7,1.2,1,2.1,1c1.2,0,2.2-0.4,2.4-2.5
    c0.1-1.1,0.1-2.8,0-4.3c0-0.8-0.3-0.9-0.7-1c-0.2,0-0.4-0.1-0.7-0.1c-0.1-0.1-0.1-0.3,0-0.3c0.2,0,0.9,0.1,1.7,0.1
    c0.6,0,1.2-0.1,1.4-0.1c0.1,0,0.1,0.2,0,0.3c-0.2,0-0.5,0.1-0.7,0.1c-0.3,0.1-0.5,0.3-0.5,1.1c-0.1,3.2-0.1,4-0.3,5
    c-0.4,1.9-1.9,2.5-3.4,2.5c-2.1,0-3.2-0.9-3.4-2.6c-0.1-0.9,0-4.2-0.1-5.1c0-0.4-0.1-0.7-0.4-0.7c-0.2,0-0.6-0.1-0.8-0.1
    C159.5,133.7,159.5,133.4,159.5,133.4z"/>
    <path fill="#FFFFFF" d="M173.5,133.4c0.3,0,1.2,0.1,1.8,0.1c0.3,0,0.8,0,0.9,0c0,0.1,0.1,0.3,0.5,0.8c1.5,1.9,4.3,5.3,5,6
    c0,0,0,0,0.1,0c0-1.8,0-4.6-0.1-5.5c0-0.4-0.2-0.7-0.6-0.8c-0.2-0.1-0.3-0.1-0.7-0.1c0-0.1,0-0.3,0-0.3c0.4,0,0.9,0.1,1.7,0.1
    c0.5,0,1.3-0.1,1.5-0.1c0,0,0,0.3,0,0.3c-0.2,0-0.5,0.1-0.7,0.1c-0.4,0.1-0.4,0.4-0.4,0.7c-0.1,1.1-0.1,4-0.1,5.7
    c0,0.6,0,1.4,0,1.9c-0.3,0-0.8,0-1.1,0c-0.6-0.9-5-6.4-5.7-7.2c0,0,0,0,0,0c0,1.4,0,4.9,0,5.7c0,0.7,0.2,0.8,0.5,0.9
    c0.2,0.1,0.6,0.1,0.9,0.2c0.1,0,0,0.3,0,0.3c-0.3,0-1.1-0.1-1.8-0.1c-0.7,0-1.3,0.1-1.6,0.1c-0.1,0-0.1-0.3,0-0.3
    c0.2,0,0.6-0.1,0.9-0.2c0.3-0.1,0.4-0.4,0.4-0.9c0.1-0.6,0.1-3,0.1-6.1c0-0.3-0.1-0.5-0.3-0.7c-0.3-0.2-0.5-0.3-1.2-0.4
    C173.5,133.7,173.5,133.4,173.5,133.4z"/>
    <path fill="#FFFFFF" d="M188.5,133.4c0.3,0,1.2,0.1,1.9,0.1c0.7,0,1.6-0.1,2-0.1c0.1,0,0.1,0.3,0,0.3c-0.2,0-0.6,0.1-0.7,0.1
    c-0.3,0.1-0.4,0.3-0.4,0.7c0,0.6,0,1.9,0,3.1c0,1.5,0,2.8,0,3.3c0,0.4,0.1,0.6,0.4,0.8c0.2,0.1,0.5,0.1,0.9,0.2c0,0,0,0.3,0,0.3
    c-0.3,0-1.2-0.1-2-0.1c-0.9,0-1.4,0.1-2,0.1c0,0-0.1-0.3,0-0.3c0.3,0,0.6-0.1,0.8-0.1c0.3-0.1,0.4-0.3,0.5-0.7c0-0.4,0-2.4,0-3.7
    c0-1.1,0-2.2,0-2.8c0-0.4-0.1-0.6-0.4-0.7c-0.2-0.1-0.5-0.1-0.9-0.1C188.4,133.7,188.4,133.4,188.5,133.4z"/>
    <path fill="#FFFFFF" d="M196.9,133.4c0.3,0,1.2,0.1,1.8,0.1c1,0,1.6-0.1,1.9-0.1c0,0,0,0.3,0,0.3c-0.3,0-0.5,0.1-0.7,0.2
    c-0.1,0-0.2,0.2-0.2,0.4c0.3,0.9,2.1,5.5,2.4,6c0,0,0,0,0.1,0c0.2-0.5,1.8-4.4,2.2-5.6c0.2-0.5,0.1-0.7-0.3-0.8
    c-0.2-0.1-0.5-0.1-0.9-0.2c-0.1-0.1,0-0.3,0-0.3c0.3,0,1.1,0.1,1.7,0.1c0.8,0,1.3-0.1,1.5-0.1c0,0,0,0.3,0,0.3
    c-0.2,0-0.4,0.1-0.6,0.1c-0.4,0.1-0.6,0.3-1,1.2c-0.4,0.9-1.6,3.7-2.3,5.4c-0.3,0.7-0.5,1.1-0.6,1.7c-0.2,0-0.7,0-0.8,0
    c-0.1-0.5-0.4-1.2-0.6-1.9c-0.7-1.8-1.8-4.5-2.2-5.5c-0.3-0.7-0.5-0.9-0.9-1c-0.2-0.1-0.4-0.1-0.6-0.1
    C196.8,133.7,196.8,133.4,196.9,133.4z"/>
    <path fill="#FFFFFF" d="M211,133.4c0.3,0,1.1,0.1,1.9,0.1h3c0.8,0,1.3,0,1.6-0.1c0,0,0.1,0,0.1,0.1c-0.1,0.4-0.3,1.4-0.3,2
    c0,0-0.3,0-0.3,0c0-0.3-0.1-0.7-0.2-0.9c-0.1-0.4-0.2-0.6-0.7-0.6c-0.4,0-1.9,0-2.1,0c-0.1,0-0.2,0.2-0.2,0.3c0,1,0,2.7,0,3.1
    c0,0.1,0,0.1,0.1,0.1c0.7,0,1.7,0,2.1,0c0.4,0,0.5-0.3,0.6-0.6c0.1-0.2,0.1-0.4,0.1-0.6c0,0,0.3,0,0.3,0c0,0.2-0.1,1-0.1,1.4
    c0,0.3,0,1.1,0,1.4c-0.1,0.1-0.3,0.1-0.3,0c0-0.3-0.1-0.5-0.1-0.6c-0.1-0.2-0.2-0.5-0.6-0.5c-0.4,0-1.5,0-2.1,0
    c0,0-0.1,0.1-0.1,0.1c0,0.4,0,1.9,0,2.8c0,0.5,0.2,0.6,0.3,0.7c0.3,0.1,1,0.1,1.9,0.1c0.8,0,1-0.2,1.2-0.4
    c0.3-0.4,0.6-0.9,0.8-1.4c0.1,0,0.3,0,0.3,0.1c0,0.3-0.4,1.6-0.7,2.1c0,0.1-0.2,0.1-0.5,0.1c-0.8,0-2,0-4.1,0
    c-0.9,0-1.6,0.1-2.2,0.1c0,0,0-0.3,0-0.3c0.4,0,0.8-0.1,1.1-0.2c0.3-0.1,0.5-0.2,0.5-0.8c0-0.5,0-1.9,0-3.5c0-1.3,0-2.5,0-2.8
    c0-0.5-0.1-0.6-0.5-0.7c-0.2-0.1-0.5-0.1-0.8-0.1C210.9,133.7,210.9,133.4,211,133.4z"/>
    <path fill="#FFFFFF" d="M223,133.4c0.3,0,1.3,0.1,1.8,0.1h2.5c1.7,0,2.5,0.9,2.5,2.1c0,1.1-0.9,1.9-1.8,2.2c0,0,0,0.1,0,0.1
    c0.5,0.8,1.8,2.7,2.5,3.4c0.5,0.5,0.8,0.6,1.4,0.6c0,0,0,0.3,0,0.3c-0.6,0.1-1.9,0-2.3-0.2c-0.2-0.1-0.4-0.2-0.7-0.5
    c-0.6-0.6-1.5-2.2-2.1-3c-0.1-0.2-0.2-0.2-0.5-0.3c-0.2,0-0.5,0-0.7,0c0,0-0.1,0.1-0.1,0.1c0,0.8,0,2.1,0.1,2.7
    c0,0.6,0.2,0.7,0.4,0.8c0.2,0.1,0.4,0.1,0.8,0.1c0.1,0,0,0.3,0,0.3c-0.3,0-1.1-0.1-2.1-0.1c-1,0-1.7,0.1-2,0.1c0,0,0-0.3,0-0.3
    c0.3,0,0.7-0.1,0.9-0.1c0.3-0.1,0.5-0.3,0.5-0.8c0-0.4,0-2.2,0-3c0-1.2,0-3.1,0-3.5c0-0.4-0.2-0.5-0.4-0.6c-0.2,0-0.6-0.1-0.9-0.1
    C222.9,133.7,222.9,133.4,223,133.4z M225.7,134.1c0,0.4,0,2.3,0,3.4c0,0.1,0,0.1,0.1,0.1c0.3,0,1.2,0,1.6-0.1
    c0.5-0.1,1-0.6,1-1.7c0-1.3-0.7-2-2.1-2c-0.1,0-0.3,0-0.5,0.1C225.7,134,225.7,134.1,225.7,134.1z"/>
    <path fill="#FFFFFF" d="M237.7,141.5c0.4,0.3,0.9,0.4,1.4,0.4c0.9,0,1.6-0.5,1.6-1.5c0-0.8-0.4-1.3-1.9-2.2
    c-1.4-0.8-2.1-1.4-2.1-2.7c0-1.6,1.4-2.4,3-2.4c0.7,0,1,0.1,1.3,0.1c0.3,0,0.7,0.1,0.8,0.1c-0.1,0.4-0.2,1.3-0.2,2.1
    c0,0-0.3,0.1-0.3,0c-0.1-0.9-0.3-1.3-0.6-1.6c-0.3-0.2-0.8-0.4-1.3-0.4c-1,0-1.5,0.7-1.5,1.4c0,0.8,0.4,1.2,1,1.6
    c0.7,0.4,1.2,0.7,1.8,1c0.7,0.4,1.4,1,1.4,2.1c0,1.4-1.2,2.6-3.3,2.6c-0.8,0-1.9-0.3-2.2-0.4c-0.1-0.2-0.3-1.7-0.3-2.2
    c0,0,0.2-0.1,0.3-0.1C236.9,140.6,237.3,141.2,237.7,141.5z"/>
    <path fill="#FFFFFF" d="M247.2,133.4c0.3,0,1.2,0.1,1.9,0.1c0.7,0,1.6-0.1,2-0.1c0.1,0,0.1,0.3,0,0.3c-0.2,0-0.6,0.1-0.7,0.1
    c-0.3,0.1-0.4,0.3-0.4,0.7c0,0.6,0,1.9,0,3.1c0,1.5,0,2.8,0,3.3c0,0.4,0.1,0.6,0.4,0.8c0.2,0.1,0.5,0.1,0.9,0.2c0,0,0,0.3,0,0.3
    c-0.3,0-1.2-0.1-2-0.1c-0.9,0-1.4,0.1-2,0.1c0,0-0.1-0.3,0-0.3c0.3,0,0.6-0.1,0.8-0.1c0.3-0.1,0.4-0.3,0.5-0.7c0-0.4,0-2.4,0-3.7
    c0-1.1,0-2.2,0-2.8c0-0.4-0.1-0.6-0.4-0.7c-0.2-0.1-0.5-0.1-0.9-0.1C247.2,133.7,247.2,133.4,247.2,133.4z"/>
    <path fill="#FFFFFF" d="M258.8,141.7c0.4-0.1,0.6-0.3,0.6-1c0-0.6,0.1-4.4,0.1-6.7c0,0-0.1-0.1-0.1-0.1c-0.3,0-1.4,0-1.7,0
    c-0.3,0-0.6,0.2-0.7,0.5c-0.2,0.3-0.4,0.8-0.6,1.3c0,0-0.3,0-0.3-0.1c0.1-0.6,0.2-1.9,0.3-2.5c0,0,0,0,0.1,0
    c0.4,0.2,0.8,0.2,1.1,0.2h5.5c0.5,0,0.8,0,1.3-0.2c0,0,0.1,0,0.1,0.1c-0.1,0.5-0.2,1.8-0.3,2.5c0,0-0.3,0.1-0.3,0
    c-0.1-0.6-0.2-1-0.3-1.3c-0.2-0.4-0.4-0.5-0.7-0.6c-0.5,0-1.5-0.1-1.8,0c0,0-0.1,0.1-0.1,0.1c0,2,0,6.2,0.1,7
    c0,0.3,0.1,0.5,0.5,0.6c0.2,0.1,0.5,0.1,0.9,0.1c0.1,0,0,0.3,0,0.3c-0.4,0-1.3-0.1-2.2-0.1c-1,0-1.8,0.1-2.2,0.1
    c-0.1,0-0.1-0.3,0-0.3C258.3,141.8,258.6,141.7,258.8,141.7z"/>
    <path fill="#FFFFFF" d="M272.2,141.7c0.4-0.1,0.4-0.3,0.5-0.8l0-1.9c0-0.2,0-0.5-0.1-0.7c-0.3-0.7-1.2-2.2-1.7-3.2
    c-0.6-1.1-0.8-1.2-1.2-1.2c-0.2,0-0.3-0.1-0.6-0.1c-0.1,0-0.1-0.3,0-0.3c0.5,0,1.1,0.1,1.9,0.1c0.5,0,1.5-0.1,1.7-0.1
    c0.1,0,0.1,0.3,0,0.3l-0.5,0.1c-0.2,0.1-0.3,0.2-0.1,0.5c0.4,0.8,1.6,2.9,1.8,3.4h0.1c0.5-0.8,1.4-2.5,1.7-3.2
    c0.2-0.4,0.1-0.6-0.3-0.6c-0.2,0-0.4-0.1-0.7-0.1c0-0.1,0-0.3,0-0.3c0.4,0,1.1,0.1,1.6,0.1c0.5,0,1,0,1.4-0.1c0.1,0,0.1,0.3,0,0.3
    l-0.6,0.1c-0.5,0.1-0.7,0.4-0.9,0.9c-0.6,0.9-1.8,2.9-2,3.5c-0.1,0.1-0.1,0.4-0.1,0.5c0,0.7,0,1.4,0,2.1c0,0.6,0.1,0.9,0.5,0.9
    l0.8,0.1c0.1,0,0,0.3,0,0.3c-0.3,0-1.3-0.1-2-0.1c-0.7,0-1.6,0.1-2.1,0.1c-0.1,0-0.1-0.3,0-0.3L272.2,141.7z"/>
    <path fill="#FFFFFF" d="M232.1,29.5c0,0,17.1,28.5,43.1,38.7C275.2,68.2,239.2,75.3,232.1,29.5z"/>
    <path fill="#FFFFFF" d="M81.3,58.5c0,0,38.1-8.6,76.2-54.6C157.5,3.9,127.8,72.3,81.3,58.5z"/>
    <path fill="#FFFFFF" d="M227.3,23.6c0,0,2.4,10.4-12.6,19.2c0,0-17.5-39.2-42.3-42.7c0,0,19.6,0,39.7,23
    C219,30.9,223.1,28.8,227.3,23.6z"/>
    <path fill="#0083D6" d="M74.8,60c0,0,16.8,5.6,31.7,2.3c29.8-6.6,42.2-17.2,61.5-20.5c19.3-3.3,23.8-1.9,46.7,1
    c0,0-5-0.9-17.5,1.3c-33.7,5.8-51.5,21.8-80.2,23.9C88.2,70,74.8,60,74.8,60z"/>
    <path fill="#0083D6" d="M81.3,66.1c0,0,31.9,9.7,49.3,5.8c34.6-7.7,49-20,71.5-23.9c22.4-3.8,31.2-1.8,57.8,1.6
    c0,0-9.3-1.4-23.9,1.1c-39.1,6.7-59.9,25.4-93.3,27.8C109.3,80.9,81.3,66.1,81.3,66.1z"/>
  </svg>
</div>
        </a>
                  <a href="/" className={headerStyles['site-name']}>
              College of Having a Very Long Name to Take Up Much Space
          </a>
    </div>
    
    <button className={headerStyles['toggle'] + ' ' + headerStyles['toggle-menu'] + ' ' + headerStyles['toggle-open-menu']}><span className={headerStyles['material-icons']} aria-hidden="true">menu</span><span className={headerStyles['button-text'] + ' ' + headerStyles['visually-hidden']}>Open the menu</span></button>
      <nav className={headerStyles['quick-links desktop']} aria-label="Western Quick Links">
        <ul className={headerStyles.menu}>
          <li>
            <a href="https://admissions.wwu.edu/">Apply</a>
          </li>
          <li>
            <a href="https://securelb.imodules.com/s/1710/17give/giving.aspx?sid=1710&gid=2&pgid=1816&cid=3291&paymenttype=perpetual">Give</a>
          </li>
          <li>
            <a href="https://calendar.wwu.edu/">Calendar</a>
          </li>
          <li>
            <a href="https://www.wwu.edu/directory">Directory</a>
          </li>
          <li>
            <a href="https://www.wwu.edu/campus-maps">Map</a>
          </li>
          <li>
            <a href="https://mywestern.wwu.edu">myWestern</a>
          </li>
        </ul>
      </nav>
    
      <div className={headerStyles.search} role="search" aria-label="Western">
        <button className={headerStyles['toggle'] + ' ' + headerStyles['toggle-search']}><span className={headerStyles['material-icons']} aria-hidden="true">search</span><span className={headerStyles['button-text'] + ' ' + headerStyles['visually-hidden']}>Open the search box</span></button>
        <form className={headerStyles['search-area']} method="get" action="https://search2.wwu.edu/texis/search">
          <div className={headerStyles['search-box']}>
            <label for="search-box" className={headerStyles['search-label']}>Enter the terms you wish to search for.</label>
            <input id="search-box" placeholder="Search this site" name="query"></input>
            
          </div>
          <button className={headerStyles.toggle + ' ' + headerStyles['submit-search']}><span className={headerStyles['material-icons']} aria-hidden="true">chevron_right</span><span className={headerStyles['visually-hidden']}>Submit search</span></button>
          <input type="hidden" name="pr" value="Default-WWU-Base"></input>
        </form>
      </div>
    
  </div>
</div>
)
}

export default Header
