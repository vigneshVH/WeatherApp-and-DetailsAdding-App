const yargs=require('yargs');
const argv=yargs.argv;
const fun=process.argv[2];
const nxtPage=require('./Functions.js');

if(fun==='add')
{
  var value=nxtPage.add(argv.name,argv.age);
  if(value)
  {
      console.log("Added Sucess")
  }
  else
  {
      console.log("already taken");

  }
}

if(fun==='read')
{
  var value=nxtPage.read(argv.name);
  nxtPage.logNote(value);
}

if(fun==='list')
{
var value=nxtPage.list();
console.log(value.length+" notes here");
  console.log();
value.forEach((value)=> nxtPage.logNote(value));

}

if(fun==='remove')
{
  var value=nxtPage.remove(argv.name);
}
