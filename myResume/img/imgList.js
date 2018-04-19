let fs=require('fs'),
    ary=fs.readdirSync('./'),
    imgs=[];
    ary.forEach(function (item) {
       if(/\.(JPG|PNG|IMG)/i.test(item))
        imgs.push('img/'+item);
    });
    fs.writeFileSync('./result.txt',JSON.stringify(imgs),'utf-8');