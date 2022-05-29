//构建食物类
class Food {
  el: HTMLElement
  constructor() {
    this.el = document.getElementById('food')!
  }
  get X() {
    return this.el.offsetLeft
  }
  get Y() {
    return this.el.offsetTop
  }
  // 生成随机坐标
  reast() {
    // x轴活动区域应该在 0 --- 290之间 且为整十数
    let top = Math.round(Math.random() * 29) * 10
    let left = Math.round(Math.random() * 29) * 10
    this.el.style.left = left + 'px'
    this.el.style.top = top + 'px'
  }
}
export default Food
