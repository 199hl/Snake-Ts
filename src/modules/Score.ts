// 构建记分牌
class Score{
    fs=0;
    gq=1;
    fsel:HTMLElement;
    gqel:HTMLElement;
    // 表示升分数
    upFs:number;
    // 表示最大等级
    maxLevel:number;
    constructor(upFs:number = 10,maxLevel:number = 10){
        // ! 表示不可能为空 避免语法检查报空
        this.fsel = document.getElementById('fs')!;
        this.gqel = document.getElementById('gq')!;
        this.upFs = upFs;
        this.maxLevel = maxLevel;
    }
    // 设置加分
    addscore(){
        this.fsel.innerHTML = ++this.fs + ''   
        if(this.fs % this.upFs === 0){
            this.addgq();
        } 
    }
    // 设置提升关卡等级
    addgq(){
        if(this.gq >= 10) return;
        this.gqel.innerHTML = ++this.gq + ''
    }

}
export default Score