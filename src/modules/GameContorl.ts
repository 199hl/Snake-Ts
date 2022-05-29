// 游戏控制器
// 引入食物
import Food from './Food'
// 引入积分牌
import Score from './Score'
// 引入蛇
import Snake from './Snake'

class GameContorl {
  // 实例化
  Food: Food
  Score: Score
  Snake: Snake
  // 移动方向
  direction: string = 'Right'
  // 游戏是否结束
  isLive = true
  constructor() {
    this.Food = new Food()
    this.Score = new Score()
    this.Snake = new Snake()
  }
  // 游戏初始化
  init() {
    document.addEventListener('keydown', this.keydownHander.bind(this))
    this.run()
  }
  keydownHander(ev: KeyboardEvent) {
    // 只监听上下左右
    this.direction = ev.key
  }
  // 蛇移动
  run() {
    // 获取当前蛇的坐标
    let { X, Y } = this.Snake
    //         ArrowUp
    //  ArrowDown
    //  ArrowLeft
    //  ArrowRight
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        // 向上移动 top 减少
        Y -= 10
        break
      case 'ArrowDown':
      case 'Down':
        // 向上移动 top 增加
        Y += 10
        break
      case 'ArrowLeft':
      case 'Left':
        // 向左移动 left 减少
        X -= 10
        break
      case 'ArrowRight':
      case 'Right':
        // 向右移动 left 增加
        X += 10
        break
    }
    this.checkEat(X, Y)

    try {
      this.Snake.X = X
      this.Snake.Y = Y
    } catch (e: any) {
      alert(e.message + 'Game Over !!!')
      this.isLive = false
    }

    this.isLive && setTimeout(() => this.run(), 300 - (this.Score.gq - 1) * 30)
  }
  // 是否吃到食物了
  checkEat(X: number, Y: number) {
    if (this.Food.X === X && this.Food.Y === Y) {
      this.Food.reast() // 食物重新生成
      this.Score.addscore() // 加分
      this.Snake.addBody() //蛇变长
    }
  }
}
export default GameContorl
