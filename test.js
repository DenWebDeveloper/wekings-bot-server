async function f1() {
    console.log('before async f1')
    await time().then(async ()=>{
        await time2()
    })
    await time1()
    console.log('after async f1')
    return 5
}

function time() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('timeout')
            res()
        },100)
    })
}

function time1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('timeout1')
            res()
        },300)
    })
}
function time2() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('timeout12')
            res()
        },400)
    })
}




f1().then(() => {
    console.log('out then 1')
})
