

addEventListener('message', (e) => {
    const imageData = e.data;
    const { width, height, data } = imageData;
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const index = (x + (y * width)) * 4;
            data[index + 3] = 127;
        }
    }
    let count =0;
    for(let x=0;x<100000; x++){
        for(let x=0;x<100000; x++){
            count++;
        }
    }
    console.log(count);
    postMessage(imageData, [imageData.data.buffer]);
})