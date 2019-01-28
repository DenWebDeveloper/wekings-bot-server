const f1 = async z1 => {
    return f2.bind(null, z1)
}

const f2 = async (z1, z2) => {
    return {z1, z2}
}

f1(1).then(r => {
    console.log(r(2))
})
