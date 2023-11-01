export const mock = (nums = 20) => {
    return new Array(nums).fill(1).map((a,i) => {
        let r = Math.random()
        r = Math.floor(r*9)+1
        return {
            id: i,
            isVideo: Math.random() > 0.5 ? 1 : 0,
            imageUrl: 'src/mock/images/p0' + r + '.jpg',
            title: "text text text text text text text text text text iiiiiiiiiiiiiiiiiiiii",
            avatar: "src/mock/images/avatar01.jpg",
            userName: 'mike' + r,
            likeCount: Math.floor(Math.random() * 1000)
        
        }
    })
}