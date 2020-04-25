## Canvas相关
### 一.canvas基本知识点

#### 1.1canvas创建

~~~javascript
var canvas = document.getElementById('test')
var ctx = canvas.getContext('2d')
~~~

开启新状态
当想要画两根颜色不一样的线时，需要开启新的状态
之前的状态可以保留，但修改后的状态会发生改变，
但是新开启的状态只能在新状态中使用
~~~javascript
ctx.beiginPath()
~~~

#### 1.2相关属性

**设置画布边框**：

~~~javascript
canvas.style.border = '1px solid #000';
~~~

**设置lineTo的相关属性**：

~~~javascript
// 线宽
ctx.lineWidth = 20
// 线的颜色
ctx.strokeStyle = 'blue'
~~~



### 二.相关API

#### 2.1 通用类

`ctx.beginPath()`:

- 开启一个新的状态，可以重新绘制颜色，线宽等状态

`ctx.moveTo(100,100)`:

- 开始绘制的起点，搭配`lineTo`，等

`ctx.fill()`:

- 填充

`ctx.fillStyle = '#26de81'`:

- 填充颜色

`ctx.closePath()`:

- 终点到起点闭合起来

`ctx.clearRect(0, 0, canvas.width, canvas.height)`:

- 清除画布内容

#### 2.2画线

`ctx.lineTo(300,300)`：

- 从**moveTo**坐标画直线到**lineTo**坐标

#### 2.3画弧(圆)

`ctx.arc(200, 200, 100, begin * Math.PI / 180, end * Math.PI / 180)`:

- 前两个参数为**坐标**，第三个为**半径**，4,5起始和结束

#### 2.4绘制图片

~~~javascript
// 只把img放在(100,100)坐标上，不裁剪，使用默认宽高
ctx.drawImage(img, 100, 100)

// 裁剪并设置宽高
// 第一个参数图片对象，
//第二丶三代表相对于图片对象的坐标，
//第四丶五代表从指定坐标开始裁剪的大小(宽高)
//第六七代表把图片放在画布上的坐标，
//第八九代表设置被裁减出来图片的宽高
ctx.drawImage(img,100,334/3,100,334/3,300,300,100,334/3)
~~~



### 三.面向对象封装精灵

#### 3.1相关代码

~~~javascript
Sprite.prototype = {
  _init: function (option) {
    this.x = option.x === 0 ? 0 : (option.y || 0)
    this.y = option.y === 0 ? 0 : (option.y || 0)

    this.w = option.w || 996 / 8
    this.h = option.h || 220

    this.fps = option.fps || 10 //frame per seconed
    this.originW = option.originH || 996 / 8
    this.originH = option.originH || 220
    this._dirIndex = 0

    this._imgSrc = option.imgSrc || '';
  },
  render: function (ctx) { //把自己画到画布
    // 1.加载图片 
    var img = new Image()
    img.src = this._imgSrc;

    var self = this // 下面onload函数的this指向img 无法拿到宽高 所以用self
    img.onload = function () {
      var frameIndex = 0
      // 2.启动定时器，不停发渲染
      setInterval(() => {
        clearInterval(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.drawImage(
          img,
          frameIndex * self.originW,
          0 * self.originH,
          self.originW,
          self.originH,
          self.x,
          self.y,
          self.w,
          self.h
        )
        frameIndex++
        frameIndex %= 8
      }, 1000 / self.fps);
    }

  },
  speedUp: function () {
    this.fps +=5
    console.log(this.fps)
  },
  speedDown: function() {
    this.fps /=2
    console.log(this.fps)
  }
}
~~~



