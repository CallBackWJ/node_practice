const wget1=(url,callback)=>{
    console.log('wget1['+url+']')
    setTimeout(()=>{
        const response={
            data:'Hello World1'
        }
        callback(response);
    },3000);
}

const wget2=(url)=>{
    console.log('wget2['+url+']')
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const response={
                data:'Hello World2'
            }
           resolve(response);
           //reject('fail:wget2');
        },2000);
    });
}

const wget3=async(url)=>{
    console.log('wget3['+url+']')
    let response=null;
   await setTimeout(()=>{
        response={
            data:'Hello World3'
        }
    },1000)

    return response;
}

const _fetch=async(url)=>{
    try{
    console.log('_fetch['+url+']')
    let response=await wget2(url);
    return response;
    }catch(err)
    {
        console.error(err);
    }
}

wget1('http://www.naver.com',(response)=>{
    console.log(response);
})
wget2('http://www.naver.com').then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.error(error);
})
_fetch('http://www.naver.com').then((response)=>{
    console.log(response);
})
console.log('do somtionf')