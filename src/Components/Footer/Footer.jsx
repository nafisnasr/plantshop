import React from "react";
import "./Footer.css";
import FooterCol from "../FooterCol/FooterCol";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="wrapper row">
          <div className="col-lg-6 col-6">
            <div className="footer-wrapper">
              <h3 className="title my-3">
                <a href="#">GREENMIND</a>
              </h3>
              <div className="px-1 my-2">
                <h6 className="text sub-text">We help you find</h6>
                <h6 className="text sub-text">your dream plant</h6>
              </div>
              <div className="social-media-box my-4">
                <div className="social">
                  <BiLogoFacebook className="icon" />
                </div>
                <div className="social">
                  <FaInstagram className="icon" />
                </div>
                <div className="social">
                  <FaTwitter className="icon" />
                </div>
              </div>
            </div>
          </div>
          <FooterCol title="inforamtion">
            <a href="#" className="sub-text">
              About
            </a>
            <a href="#" className="sub-text">
              Products
            </a>
            <a href="#" className="sub-text">
              Blog
            </a>
          </FooterCol>
          <FooterCol title="company">
            <a href="#" className="sub-text">
              community
            </a>
            <a href="#" className="sub-text">
              carrer
            </a>
            <a href="#" className="sub-text">
              our story
            </a>
          </FooterCol>
          <FooterCol title="contact">
            <a href="#" className="sub-text">
              getting started
            </a>
            <a href="#" className="sub-text">
              pricing
            </a>
            <a href="#" className="sub-text">
              resourses
            </a>
          </FooterCol>
        </div>
        <div className="copyright">
            <p className="sub-text">2023 all Right Reserved Term of use <a href="#">GREENMIND</a></p>
        </div>
      </div>
    </footer>
  );
}
