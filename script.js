var array = [
    {

 id:"1",
 title:"400 days",
 author:"chetan bhagat",
 subject:"comedy",
 pdate:"10-8-2020"
},
{

    id:"2",
    title:"once upon a time",
    author:"rajesh",
    subject:"auto-biography",
    pdate:"13-2-2009"
   }, {

    id:"3",
    title:"friends",
    author:"preetham",
    subject:"comedy",
    pdate:"12-02-2021"
   }, {

    id:"4",
    title:"half girlfriend",
    author:"chetan bhagat",
    subject:"love story",
    pdate:"9-10-2009"
   }, {

    id:"5",
    title:"raazi",
    author:"zaim ahmed",
    subject:"comedy",
    pdate:"10-10-2006"
   }, {

    id:"6",
    title:"a girl in room number 105",
    author:"chetan bhagat",
    subject:"suspense",
    pdate:"7-7-2003"
   }, {

    id:"7",
    title:"murder",
    author:"suma",
    subject:"thriller",
    pdate:"2-12-2005"
   }, {

    id:"8",
    title:"hostel",
    author:"preetham",
    subject:"thriller",
    pdate:"1-1-2001"
   }, {

    id:"9",
    title:"a stranger",
    author:"chetan bhagat",
    subject:"suspense",
    pdate:"12-02-2020"
   }, {

    id:"10",
    title:"bangalore days",
    author:"rakshitha",
    subject:"thriller",
    pdate:"05-01-2001"
   },{

    id:"11",
    title:"400 days",
    author:"chetan bhagat",
    subject:"comedy",
    pdate:"10-8-2020"
   },
   {
   
       id:"12",
       title:"once upon a time",
       author:"rajesh",
       subject:"auto-biography",
       pdate:"13-2-2009"
      }, {
   
       id:"13",
       title:"friends",
       author:"preetham",
       subject:"comedy",
       pdate:"12-02-2021"
      }, {
   
       id:"14",
       title:"half girlfriend",
       author:"chetan bhagat",
       subject:"love story",
       pdate:"9-10-2009"
      }, {
   
       id:"15",
       title:"raazi",
       author:"zaim ahmed",
       subject:"comedy",
       pdate:"10-10-2006"
      }, {
   
       id:"16",
       title:"a girl in room number 105",
       author:"chetan bhagat",
       subject:"suspense",
       pdate:"7-7-2003"
      }, {
   
       id:"17",
       title:"murder",
       author:"suma",
       subject:"thriller",
       pdate:"2-12-2005"
      }, {
   
       id:"18",
       title:"hostel",
       author:"preetham",
       subject:"thriller",
       pdate:"1-1-2001"
      }, {
   
       id:"19",
       title:"a stranger",
       author:"chetan bhagat",
       subject:"suspense",
       pdate:"12-02-2020"
      }, {
   
       id:"20",
       title:"bangalore days",
       author:"rakshitha",
       subject:"thriller",
       pdate:"05-01-2001"
      }

]

//show table

function showtable(curarray){

document.getElementById("mytable").innerHTML=`

<tr class="bg-primary text-white fw-bold">
<td>BOOK_ID</td>
<td>TITLE</td>
<td>AUTHOR</td>
<td>SUBJECT</td>
<td>PUBLISHED-DATE</td>
</tr>
<td style="text-align:center;color:red" ><b>Number of books available = ${curarray.length}</b></td>
`;

//FOR CHECKING ARRAY IS EMPTY


if(curarray==""){
    document.getElementById("error").innerHTML=`<span class="text-danger">Not Found</span>`
}
else{
    document.getElementById("error").innerHTML="";

    for(var i=0;i<curarray.length;i++){
     

  document.getElementById("mytable").innerHTML +=`
  <thread>
  <tr>
  <td>${curarray[i].id}</td>
  <td>${curarray[i].title}</td>
  <td>${curarray[i].author}</td>
  <td>${curarray[i].subject}</td>
  <td>${curarray[i].pdate}</td>
  </thread>
  
  </tr>`



    }
}



}

//calling 
showtable(array);

//take filtered data array

var newarr = [];

//for searching methods

document.getElementById("search").addEventListener("keyup",

function(){

var search=this.value.toLocaleLowerCase();

newarr = array.filter(function(val){

    if(val.id.includes(search) || val.pdate.includes(search)  || val.title.includes(search)  || val.author.includes(search)  || val.subject.includes(search)){

  var newobj ={id:val.id, title:val.title,author:val.author,subject:val.subject,pdate:val.pdate};
  return newobj;

    }



})

showtable(newarr);



})