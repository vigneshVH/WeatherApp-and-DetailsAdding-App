
const fs=require('fs');

var saveData=function(empty)
{
  fs.writeFileSync('Values.JSON',JSON.stringify(empty));

}

var fetchData=function()
{
  try
  {
     var value=fs.readFileSync('Values.JSON');
     return JSON.parse(value);
  } catch (e)
  {
    return [];
  }


}



var add=function(name,age)
{
  var empty=fetchData();
  var obj={name,age};
var duplicate=empty.filter((obj)=>obj.name==name);
if(duplicate.length==0)
{
empty.push(obj)
saveData(empty);
return obj;
}
}

var read=function(name)
{
    var reading=fetchData();
    var str=reading.filter((obj)=> obj.name==name);
    return str[0];

}

var list=function()
{
  var lval=fetchData();
  return lval;
}

var remove=function(name)
{
  var rem=fetchData();
  var newArr=rem.filter((rem)=>rem.name!=name);
   saveData(newArr);
   if(rem.length!=newArr.length)
   {
     console.log("Remove Sucess");
   }
   else
    {
         console.log("Your details not is here  :(")
    }
}

var logNote=function(value)
{
  if(value)
  {

    console.log("Name : "+value.name);
    console.log("Age : "+value.age);
    console.log("---");
  }
  else
  {
    console.log("Notes not found")
  }
}

module.exports={
  add,
  read,
  list,
  remove,
  fetchData,
  saveData,
  logNote,

}
