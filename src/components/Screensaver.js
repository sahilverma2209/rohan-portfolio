import React from 'react';
import '../css/dvd.css';

class Dvd extends React.Component {
  constructor(){
    super()
    this.state = {
      imgIndex: 1
    }
  }
  componentWillUnmount(){
    console.log('\n\n unmounting...')
  }

  componentDidMount(){
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    console.log("scrolled = ", winScroll)
    var box = document.getElementById('dvd'),
    currIdx = Math.floor((Math.random() * 6) + 1),
    ww = window.innerWidth,
    // ww = win.clientWidth,
    wh = window.innerHeight,
    // wh = win.clientHeight,
    translateX = Math.floor((Math.random() * ww) + 1),
    translateY = Math.floor((Math.random() * wh) + 1)+winScroll,
    boxWidth = box.offsetWidth,
    boxHeight = box.offsetHeight,
    boxTop = box.offsetTop - winScroll,
    boxLeft = box.offsetLeft,
    xMin = -boxLeft,
    yMin = -boxTop,
    xMax = window.innerWidth - boxLeft - boxWidth,
    yMax = window.innerHeight - boxTop - boxHeight,
    direction = 'se',
    speed = 4,
    timeout = null;

    console.log("ww = ", ww, "wh = ", wh, "tx = ", translateX, " ty = ", translateY)
    
    init();

    // reset constraints on resize
    window.addEventListener('resize', function(argument) {
      clearTimeout(timeout);
      timeout = setTimeout(update, 100);
    }, false);

    function init() {
      requestAnimationFrame(init);
      move();
    }

    // reset constraints
    function update() {
      xMin = -boxLeft;
      yMin = -boxTop;
      xMax = window.innnerWidth - boxLeft - boxWidth;
      yMax = window.innerHeight - boxTop - boxHeight;
    }

    function move() {
      setDirection();
      setStyle(box, {
        transform: 'translate3d(' + translateX + 'px, ' + translateY + 'px, 0)',
      });
    }

    function setDirection() {
      switch (direction) {
        case 'ne':
          translateX += speed;
          translateY -= speed;
          break;
        case 'nw':
          translateX -= speed;
          translateY -= speed;
          break;
        case 'se':
          translateX += speed;
          translateY += speed;
          break;
        case 'sw':
          translateX -= speed;
          translateY += speed;
          break;
      }
      setLimits();
    }

    function setLimits() {
      if (translateY <= yMin) {
        if (direction === 'nw') {
          direction = 'sw';
        } else if (direction === 'ne') {
          direction = 'se';
        }
        switchColor();
      }
      if (translateY >= yMax) {
        if (direction === 'se') {
          direction = 'ne';
        } else if (direction === 'sw') {
          direction = 'nw';
        }
        switchColor();
      }
      if (translateX <= xMin) {
        if (direction === 'nw') {
          direction = 'ne';
        } else if (direction === 'sw') {
          direction = 'se';
        }
        switchColor();
      }
      if (translateX >= xMax) {
        if (direction === 'ne') {
          direction = 'nw';
        } else if (direction === 'se') {
          direction = 'sw';
        }
        switchColor();
      }
    }

    function switchColor() {
      var newIdx = Math.floor((Math.random() * 6) + 1);
      
      while(newIdx == currIdx ) {
        newIdx = Math.floor((Math.random() * 6) + 1)
      }
      box.style.backgroundImage = `url('/assets/dvd/portrait${newIdx}.jpg')`
      currIdx = newIdx
    }

    function getVendor() {
      var ua = navigator.userAgent.toLowerCase(),
        match = /opera/.exec(ua) || /msie/.exec(ua) || /firefox/.exec(ua) || /(chrome|safari)/.exec(ua) || /trident/.exec(ua),
        vendors = {
          opera: '-o-',
          chrome: '-webkit-',
          safari: '-webkit-',
          firefox: '-moz-',
          trident: '-ms-',
          msie: '-ms-',
        };

      return vendors[match[0]];
    };

    function setStyle(element, properties) {
      var prefix = getVendor(),
        property, css = '';
      for (property in properties) {
        css += property + ': ' + properties[property] + ';';
        css += prefix + property + ': ' + properties[property] + ';';
      }
      element.style.cssText += css;
    }

  }

  render(){
    return (
      <React.Fragment>
        <div id="dvd-mask"></div>
        <div id="dvd"></div> 
      </React.Fragment>
      )
  }
}

export default Dvd;
