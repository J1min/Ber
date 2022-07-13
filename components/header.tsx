/* eslint-disable */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import * as S from "../styles/Style";
export default function Header() {
    const Logo = "Ber";
    let status = 0;

    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef
    // useRef

    useEffect(() => {}, []);

    if (process.browser) {
        const $ = document.querySelector.bind(document);
    }

    const [headerList, setHeaderList] = useState([
        "베르실 예약",
        "달력",
        "시간표",
        "급식",
        "학생증",
    ]);
    const [headerLinkList, setHeaderLinkList] = useState([
        "/reservation",
        "/calendar",
        "/timetable",
        "/meal",
        "/studentcard",
    ]);

    const [login, setlogin] = useState(["로그인"]);
    const [loginLink, setloginLink] = useState(["/login"]);

    let liClick = () => {
        $(".navbar__menu")!.classList.remove("active");
        $(".navbar__links")!.classList.remove("active");
        $("#btn")!.classList.remove("on");
    };

    let click = () => {
        if (!status) {
            $(".navbar__menu")!.classList.add("active");
            $(".navbar__links")!.classList.add("active");
            status = 1;
        } else {
            $(".navbar__menu")!.classList.remove("active");
            $(".navbar__links")!.classList.remove("active");
            status = 0;
        }
    };

    let eClick = () => {
        if (status) {
            $("#btn")!.classList.remove("on");
        } else {
            $("#btn")!.classList.add("on");
        }
    };

    return (
        <nav className="navbar">
            <S.MainText href="/" style={{ paddingLeft: "15px" }}>
                {Logo}
            </S.MainText>
            <ul className="navbar__menu">
                {headerList.map((a, i) => {
                    return (
                        <li
                            key={i}
                            onClick={() => {
                                liClick();
                            }}
                        >
                            <Link
                                style={{
                                    textDecoration: "none",
                                }}
                                href={headerLinkList[i]}
                            >
                                {a}
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <ul className="navbar__links">
                {login.map((a, i) => {
                    return (
                        <li
                            key={i}
                            onClick={() => {
                                liClick();
                            }}
                        >
                            <Link
                                style={{ textDecoration: "none" }}
                                href={loginLink[i]}
                            >
                                {a}
                            </Link>
                        </li>
                    );
                })}
                {/* <li>
          <Link href="/signup">회원가입</Link>
        </li> */}
            </ul>

            <Link href="#" className="navbar__toggleBtn" onClick={click}>
                <button id="btn" onClick={eClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </Link>
        </nav>
    );
}
