import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Link,location  } from "react-router-dom";
import Icons from "../lib/Icon/icon-exampe";
import Button from "../lib/Button/button-exampe";
import Dialog from "../lib/Dialog/dialog-example";
import Icon from "../lib/Icon/Icon";
import Card from "../lib/Card/card";
import Checkbox from "../lib/Checkbox/checkbox";
import Divider from "../lib/Divider/divider";
import IconButton from "../lib/IconButton/iconButton";
import Image from "../lib/Image/image";
import Input from "../lib/Input/input";
import Links from "../lib/Link/link";
import Radio from "../lib/Radio/radio";
import TextArea from "../lib/TextArea/textarea";

import "./index.scss";

const Index = () => {

  const [current,setCurrent] = useState('app')
  // 获取当前的 url
  function paramUrl() {
    let url = window.location.hash
    let res = url.replace('#/','')
    return res
  }

   // 获取当前选中的菜单
  function menu(param){
    let lis = param.innerText
    let num = lis.lastIndexOf('-')
    const str = lis.slice(num + 1)
    
    return str;
  }
  
  const element = () =>{
    let divs = document.getElementsByTagName('ul')[0]
    let list = divs.childNodes as any
    
    list.forEach((element,index) => {
      if(menu(element) === paramUrl()) {
        element.classList.add('button-select')
        element.childNodes[0].style.color = '#37474F'
      }else {
        element.classList.remove('button-select')
        element.childNodes[0].style.color = '#fafbfb'
      }
        
    });
  }

  useEffect(()=>{
    let moren = window.location.pathname
    setCurrent(moren.substring(moren.lastIndexOf('/')+1,moren.length))
    console.log(window.location,'window.location.hash');
    
    element()
  },[])

  useEffect(() => {

    window.addEventListener('click',()=>element())
    return ()=>{
      window.addEventListener('click',()=>{})
    }
  }, [window.location.hash]);

  return (
    <Router>
      <div className="contanier">
        <aside className="aside">
          <div className="horizonta">
            <img src="./image/artwork.png" alt="" />
            <span>artwork-elements</span>
          </div>
          <ul id="uls">
            <li>
              <Link to="/icon">artwork-icon</Link>
            </li>
            <li>
              <Link to="/button">artwork-button</Link>
            </li>
            <li>
              <Link to="/dialog">artwork-dialog</Link>
            </li>
            <li>
              <Link to="/card">artwork-card</Link>
            </li>
            <li>
              <Link to="/checkbox">artwork-checkbox</Link>
            </li>
            <li>
              <Link to="/divider">artwork-divider</Link>
            </li>
            <li>
              <Link to="/iconButton">artwork-iconButton</Link>
            </li>
            <li>
              <Link to="/image">artwork-image</Link>
            </li>
            <li>
              <Link to="/input">artwork-input</Link>
            </li>
            <li>
              <Link to="/link">artwork-link</Link>
            </li>
            <li>
              <Link to="/radio">artwork-radio</Link>
            </li>
            <li>
              <Link to="/textarea">artwork-textarea</Link>
            </li>
          </ul>
        </aside>

        <main className="main">
          <header className="header">
            <div className="content">artwork-elements</div>
            <Icon name="artwork" className="icon" />
          </header>

          <div id="main">
            <Route path="/icon" component={Icons} />
            <Route path="/button" component={Button} />
            <Route path="/dialog" component={Dialog} />
            <Route path="/card" component={Card} />
            <Route path="/checkbox" component={Checkbox} />
            <Route path="/divider" component={Divider} />
            <Route path="/iconButton" component={IconButton} />
            <Route path="/image" component={Image} />
            <Route path="/input" component={Input} />
            <Route path="/link" component={Links} />
            <Route path="/radio" component={Radio} />
            <Route path="/textarea" component={TextArea} />
          </div>
        </main>
      </div>
    </Router>
  );
};

export default Index;
