<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
<script type="text/ecmascript" src="md5.js"></script>
  <script>
  var alphanumeric = ['a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];

  //错误的地方很傻，就是i-》j-》k-》。。不能全都有用i...

  // 接受可变长数组参数，具体看下面的测试代码
  function Zuhe(){
    var heads=arguments[0];
    for(var i=1,len=arguments.length;i<len;i++){
        heads=addNewType(heads,arguments[i]);
    }
    return heads;
  }

  //在原有组合结果的基础上添加一种新的规格
  function addNewType(heads,choices){
    var result=[];
    for(var i=0,len=heads.length;i<len;i++){
        for(var j=0,lenj=choices.length;j<lenj;j++){
            result.push(heads[i]+choices[j]);
        }
    }
    return result;
  }

  function printResult(result){

    var raw = "3bed22f7f496e84b035a996522baa7594c27c7e5718a78bfddf9012904b70eb755d67f90c8de149ead7ee674b024f38c216642030c2d54cb1dd657dd66342c99c239f3c31fd399fc052a9b7861f2073d2b9f47811dd77fd544d570c34bf5f349d110389979571714694a5054238465ca38ba26c25fb1a32b4d0a3b93666b09b3";
    var itemLength = result[0].length;
    //1 0-32 2 32-64 ...
    var exactly = raw.substring(32*(itemLength - 1),32*(itemLength));

    for(var i=0,len=result.length;i<len;i++){

    //这里计算md5
    //计算md5
    var hashTheStr = hex_md5(result[i].toString());
    var hashV2ex = hex_md5("v2ex");
    var hashResult = hex_md5(hashV2ex+result[i].toString()+hashTheStr);
    // console.log(result[i].toString());
    // 3bed22f7f496e84b035a996522baa759
    // console.log(hashResult);
    if (hashResult == exactly) {
      console.log(result[i].toString());
      printResult(Zuhe([result[i].toString()],alphanumeric));
    }
    }
  }

  function test(md5){
    printResult(Zuhe([""],alphanumeric));
    // printResult(Zuhe(["S","M","L"],["R","B","S","M","L"]));
  }

  test();

  //csdaixie
  </script>
  </body>
</html>

