/**
 * 自动计算瀑布流的位置，每个item使用的是绝对定位，只需要计算每个item的偏移量就行
 */
 const computeWaterFallFlow = (ref,colums = 2) => {
    let resizeListener = null
    const computeItem = () => {
        const item = ref.children
        const winWidth = window.innerWidth
        const margin = Math.round(winWidth*0.015)
        const itemWidth = Math.floor((winWidth - (colums+1)*margin)/colums)
        const topList = new Array(colums).fill(0)
        for(let i = 0; i<item.length;i++){
            item[i].style.width = itemWidth + 'px'
        }
        for(let i = 0; i < item.length; i++){
            let min = Math.min(...topList)
            const minIndex =  topList.indexOf(min)

            let left = margin * (minIndex + 1) + itemWidth* minIndex
            let top = min + margin
            item[i].style.transform = `translate(${left}px,${top}px)`
            topList[minIndex] +=item[i].clientHeight + margin
        }
        ref.style.height = Math.max(...topList) + margin +'px'
    }
    computeItem()

    if(!resizeListener){
        resizeListener = window.addEventListener('resize',() => {computeItem()})
    }
}

export default computeWaterFallFlow