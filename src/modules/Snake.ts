class Snake {
  // 获取蛇头（也就是蛇下面的第一个div元素）
  head: HTMLElement;
  // 整个蛇 包括蛇头 HTMLCollection类型会返回一个实时更新的el集合
  bodies: HTMLCollection;
  // 包裹蛇的容器
  el: HTMLElement;
  constructor() {
    this.el = document.getElementById('snake')!;
    // as 表示断言 这肯定是个元素 因为querySelector返回值 不是HTMLElement类型 所以增加断言
    this.head = document.querySelector('#snake > div') as HTMLElement;
    // 获取蛇类下面所有div
    this.bodies = this.el.getElementsByTagName('div');
  }
  // 获取蛇的位置
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }
  // 设置蛇的坐标
  set X(value: number) {
    if (this.X === value) return;
    //   判断x值取值范围
    if (value < 0 || value > 290) throw new Error('蛇撞墙了！');
    //   判断是否发生了掉头的行为
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value)
      if (value > this.X) {
        //   throw new Error('蛇头被扭断了！');
        value = this.X - 10;
      } else {
        value = this.X + 10;
      }
    this.moveBody();
    this.head.style.left = value + 'px';
    this.checkHeadBody();
  }
  set Y(value: number) {
    if (this.Y === value) return;
    //   判断Y值取值范围
    if (value < 0 || value > 290) throw new Error('蛇撞墙了！');
    //   判断是否发生了掉头的行为
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      //   throw new Error('蛇头被扭断了！');
      //   还可以做方向判断 如果此时蛇正向上走 那就不允许向下走
      if (value > this.Y) {
        value = this.Y - 10;
      } else {
        value = this.Y + 10;
      }
    }
    this.moveBody();
    this.head.style.top = value + 'px';
    this.checkHeadBody();
  }
  // 吃到食物之后 增加蛇的长度
  addBody() {
    // 向el里面添加一个元素
    this.el.insertAdjacentHTML('beforeend', '<div></div>');
  }
  // 蛇身体的移动 就是除去蛇头 其他div的移动
  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;

      //将获取到的值 进行赋值
      (this.bodies[i] as HTMLElement).style.top = y + 'px';
      (this.bodies[i] as HTMLElement).style.left = x + 'px';
    }
  }
  // 检查有没有自己撞到自己
  checkHeadBody() {
    for (let i = 3; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement;
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        throw new Error('蛇撞到自己了！');
      }
    }
  }
}
export default Snake;
