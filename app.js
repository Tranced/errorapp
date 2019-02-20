const func = () => {
    console.log("hi")
    throw new Error('Test!');
}

(func())