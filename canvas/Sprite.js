function Sprite(option) {
  this._init(option)
}

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