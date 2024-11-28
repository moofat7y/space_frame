export const navBarConfing = [
  {
    label: "home",
    href: "#home",
  },
  {
    label: "features",
    href: "#features",
  },
  {
    label: "aboutus",
    href: "#aboutus",
  },
  {
    label: "projects",
    href: "#projects",
  },
];

import { PiShareNetworkLight } from "react-icons/pi";
import { LiaCubeSolid } from "react-icons/lia";
import { FiLayers } from "react-icons/fi";
import { PiBezierCurve } from "react-icons/pi";
export const featuresConfig = [
  {
    title: "title1",
    description: "description1",
    icon: <PiShareNetworkLight />,
  },
  {
    title: "title2",
    description: "description2",
    icon: <LiaCubeSolid />,
  },
  {
    title: "title3",
    description: "description3",
    icon: <FiLayers />,
  },
  {
    title: "title4",
    description: "description4",
    icon: <PiBezierCurve />,
  },
];

export const visionList = ["vision", "mission", "principles", "values"];

import proj1 from "/public/projects/proj1.png";
import proj2 from "/public/projects/proj2.png";
import proj3 from "/public/projects/proj3.png";
export const projects = [proj1, proj2, proj3];
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

export const contactInfo = [
  {
    icon: <SlLocationPin />,
    label:
      "Number 57, Shahid Rezaei, Second Golbarg, West Sepehr Street, Tehran",
  },
  {
    icon: <BsTelephone />,
    label: "021-45338000",
  },
  {
    icon: <IoMailOutline />,
    label: "info@dbcompany.net",
  },
];

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export const socialMediaLinks = [
  {
    icon: <FaFacebookF />,
    href: "",
  },
  {
    icon: <FaTwitter />,
    href: "",
  },
  {
    icon: <FaInstagram />,
    href: "",
  },
  {
    icon: <FaLinkedinIn />,
    href: "",
  },
];
