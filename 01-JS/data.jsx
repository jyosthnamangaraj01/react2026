//JSX -> JavaScript XML
//JSX is a syntax extension that lets you write HTML- like code inside JavaScript. It is primarily used in react.

//vanila.js:-The pure/original form of Javascript
// function createElementJS(){
// const h1= document.createElement("h1");
// const p = document.createElement("p");

// h1.setAttribute("class", "heading")
// const body = document.querySelector("body");
// body.append(h1,p);
// }

// createElementJS();  //function call

//Using JSX:
//First character: uppercase
// jsx must return(<div> </div>);
// jsx call:<CreateElementsJS/>
function CreateElementJS(){
    return (
        <>
            <div className="container">
                <h1>Heading</h1>
                <p>Paragraph</p>
            </div>
            <div className="container">
                <h1>Heading</h1>
                <p>Paragraph</p>
            </div>
        </>
    );
};
<CreateElementsJS/>
