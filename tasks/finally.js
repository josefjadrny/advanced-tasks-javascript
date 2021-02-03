// sub-task 1
function firsTest() {
    try {
        throw new Error('Damn...')
    } catch(error) {
        return
    } finally {
        console.log('Finally')
    }
    console.log('End')
}

// sub-task 2
function secondTest() {
    try {
        return 'First return'
    } finally {
        return 'Second return'
    }
}

firsTest()
console.log(secondTest())
