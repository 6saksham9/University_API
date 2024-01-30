let url="http://universities.hipolabs.com/search?name=";

let btn=document.querySelector("button");


btn.addEventListener("click", async() => {
    let country=document.querySelector("input").value;

    let colleges= await getcollege(country);

    show(colleges);
}
);

function show(colleges){
    let list=document.querySelector("#list");

    for(college of colleges){
        let li = document.createElement('li');
        li.innerHTML=`${college.name}, ${college["state-province"]},  ${college.country}`;
        list.appendChild(li);
        }
    }


async function getcollege(country){
    try{
        let res=await axios.get(url+country);
        return res.data;
    }
    catch(e){
        console.log("error found",e);
    }
}