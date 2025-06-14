import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BiSolidMobileVibration } from "react-icons/bi";
import { RiScrollToBottomLine } from "react-icons/ri";

export default function TopSection() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://www.instagram.com/aunujain/"
              target="_blank"
              className="home__social-icon"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/dodoxd1"
              target="_blank"
              className="home__social-icon"
            >
              <FaGithub />
            </a>

            <a
              href="https://leetcode.com/aunu"
              target="_blank"
              className="home__social-icon"
            >
              <SiLeetcode />
            </a>
          </div>

          <div className="home__img">
            <svg
              className="home__blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <image
                  className="home__blob-img"
                  x="15"
                  y="10"
                  href="./assets/img/arihant.png"
                />
              </g>
            </svg>
          </div>
          <div className="home__data">
            <h1 className="home__title">Hi, I'am Arihant</h1>

            <h3 className="home__subtitle">Android/Website Developer</h3>

            <p className="home__description">
              Quick learner, Tech Maven, Explorer, Versatile
            </p>

            <a href="#contact" className="button button--flex">
              Contact Me
              <BiSolidMobileVibration />
            </a>
          </div>
        </div>
        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <span className="home__scroll-name">Scroll down</span>
            <RiScrollToBottomLine />
          </a>
        </div>
      </div>
    </section>
  );
}
