// const myNums=[1,2,3,4,5,6,7,8,9,10];

// // const newNums=myNums.filter((num)=> num>4 );
// const newNums=myNums.filter((num)=>{
//     return num>4;
// })
// console.log(newNums);

const books = [
  { title: "The Alchemist", genre: "Fiction", publish: 1988, edition: 2005 },
  { title: "Clean Code", genre: "Programming", publish: 2008, edition: 2019 },
  { title: "Rich Dad Poor Dad", genre: "Finance", publish: 1997, edition: 2015 },
  { title: "You Don’t Know JS", genre: "Programming", publish: 2014, edition: 2020 },
  { title: "Ikigai", genre: "Self-help", publish: 2016, edition: 2017 }
];

// let userBooks=books.filter( (bk)=> bk.genre==="Programming" && bk.publish>=2010);
// console.log(userBooks);

let userBooks=books.filter((bk) => {
    return bk.title==="Ikigai" && bk.edition>=2016;
}) 
console.log(userBooks);