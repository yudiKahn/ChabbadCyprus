import React from 'react';
import Link from 'next/link';
import text from '../assets/text.json';

export default function Navbar({lang,setLang}) {
    const toggleClass = e => {
        let btn = e.nativeEvent.path.find(el=>Array.from(el.classList).indexOf('navbar-toggler')>-1);
        Array.from(btn.classList).indexOf('click') < 0 ? btn.classList+=' click' : btn.classList.remove('click');
    }

    return (<header id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-white font-bold">
            <div className="row mx-0 w-100 justify-content-between">
                <div className="nav-col-1">
                    <Link href="/">
                        <a className="navbar-brand"></a>
                    </Link>
                </div>
                <div className="nav-col-2">
                    <button onClick={toggleClass} className="navbar-toggler" data-toggle="collapse" data-target="#nav-coll" aria-controls="nav-coll" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                    </button>
                </div>
                <div className="row w-100 collapse navbar-collapse justify-content-center" id="nav-coll">
                    <ul className="navbar-nav" style={lang==='he'?{direction:'rtl'}:{}}>
                        <li className="nav-item active">
                            <Link href="/">
                                <a className="nav-link">{text[lang].links[0]}</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/ShabbatMeals">
                                <a className="nav-link">{text[lang].links[1]}</a>
                            </Link>                        </li>
                        <li className="nav-item">
                            <Link href="/About">
                                <a className="nav-link">{text[lang].links[2]}</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Donate">
                                <a className="nav-link">{text[lang].links[3]}</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Gallery">
                                <a className="nav-link">{text[lang].links[4]}</a>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <p className="nav-link dropdown-toggle m-0" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {text[lang].links[5]}
                            </p>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link href="/">
                                <a className="dropdown-item">{text[lang].links[6]}</a>
                            </Link>
                            <Link href="/">
                                <a className="dropdown-item">{text[lang].links[7]}</a>
                            </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-btns">
                                <div className={`col ${lang==='he'?'text-right':''}`}>
                                    <button className="btn btn-blue mx-1" onClick={()=>setLang('he')}>עברית</button>
                                    <button className="btn btn-blue mx-1" onClick={()=>setLang('en')}>English</button>
                                </div>
                                <div className={`col ${lang==='he'?'':'text-right'}`}>
                                    <a href="https://www.facebook.com/chabadofnapa" target="_blank" rel="noreferrer">
                                        <i className="btn btn-blue fa m-1 fa-facebook"></i>
                                    </a>
                                    <a href="https://www.facebook.com/chabadofnapa" target="_blank" rel="noreferrer">
                                        <i className="btn btn-blue fa m-1 fa-instagram"></i>
                                    </a>
                                    <a href="https://www.facebook.com/chabadofnapa" target="_blank" rel="noreferrer">
                                        <i className="btn btn-blue fa m-1 fa-whatsapp"></i>
                                    </a>
                                    <Link href="/Admin">
                                        <a className="btn btn-blue fa m-1 fa-user-circle-o"></a>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>)
}