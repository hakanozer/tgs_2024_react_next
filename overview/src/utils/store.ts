export const addRemoveLike = (pid: string ) => {
    const stLikes = localStorage.getItem("likes")
    if(stLikes) {
        const arr = JSON.parse(stLikes) as string[]
        const index = arr.findIndex(item => item === pid)
        if (index === -1) {
            arr.push(pid)
            const stArr = JSON.stringify(arr)
            localStorage.setItem("likes", stArr)
        }else {
            arr.splice(index, 1)
            const stArr = JSON.stringify(arr)
            localStorage.setItem("likes", stArr)
        }
    }else {
        const arr = [pid]
        const stArr = JSON.stringify(arr)
        localStorage.setItem("likes", stArr)
    }
}

export const allLikes = () => {
    const stLikes = localStorage.getItem("likes")
    if (stLikes) {
        const arr = JSON.parse(stLikes) as string[]
        return arr
    }
    return []
}