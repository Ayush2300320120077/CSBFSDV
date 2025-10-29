const parent = document.getElementById("parent");
//console.log(parent);
const Root = ReactDOM.createRoot(parent);

//const h2 = React.createElement("h2",{style:{color:"browm",backgroundColor:"blue"}},"Hello");
const img = <img src="https://tse1.mm.bing.net/th/id/OIP.QKEwEVJlylLFZ4L75yhLPAHaEb?pid=Api&P=0&h=180"></img>
const myname = <h2>Garv Singhal</h2>;
const Branch = <p>Computer Science</p>;
const section = <p>B</p>
const college = "ABES Engineering College";

// const wrapper = React.createElement("div",{style:{backgroundColor:"grey" , width:"19%"}}, img,myname,Branch,section,college)
// Root.render(wrapper);
const container=(
    <div>
        {img}
        {myname}
        {Branch}
        {section}
        {college}
    </div>
)

Root.render(container);