const parent=document.getElementById('parent');
// console.log(parent);
const root=ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{style:{color:"brown",backgroundColor:"cyan"}},"Welcome to React App");

// const li1=React.createElement("li",{style:{backgroundColor:"darkorange"}},"Java");
// const li2=React.createElement("li",{style:{backgroundColor:"white"}},"Python");
// const li3=React.createElement("li",{style:{backgroundColor:"green"}},"React");
// const ul=React.createElement("ul",{},li1,li2,li3);
// root.render(h2);

// const pic=React.createElement('img',{src:'https://wallpapers.com/images/hd/funny-gorilla-pictures-7xdeia62b4tt0qae.jpg',style:{width:'300px',height:'300px',borderRadius:'50%'}})
// const myname=React.createElement("h3",{style:{margin:'125px'}},"Garv Singhal")
// const wrapper=React.createElement('div',{},h2,ul);

// const wrapper1=React.createElement('div',{style:{display:'flex',}},pic,myname);

// const wrapper=React.createElement('div',{},h2,wrapper1,ul);
// root.render(wrapper);
// root.render(ul);

//JSX
const h2=<h1>welcome to jsx</h1>
const li1=<li>JAVA</li>
const li2=<li>Python</li>
const ul=<ul>{li1}{li2}</ul>
const container=(
    <div>
        {h2},
        {ul}
    </div>
)

root.render(container);