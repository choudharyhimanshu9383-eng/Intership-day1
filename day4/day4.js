// Question 1
// Yeh code kya print karega?
// Output
// oops true
// done

// Question 2
// Kya print hoga?
// Output
// TypeError

// Question 3
// Kya print hoga?
// Output
// inner
// caught 42
// outer

// Question 4
// Kya print hoga?
// Output
// 2

// Question 5
// Kya print hoga?
// Output
// bad

// Question 6
// Kya error type aayega?
// Output
// ReferenceError
// Output
// fail 404 true

// Question 8
// Kya print hoga?
// Output
// true

// Question 9
// Output order batao
// Output
// s s
// c p

// Question 10
// Error ka exact name batao

// Output
// TypeError
// Cannot read properties of undefined

// Question 11
// ValidationError, NetworkError,
// AuthError classes banao

class ValidationError extends Error{
    constructor(msg, field){
        super(msg);
        this.field = field;
    }
}

class NetworkError extends Error{
    constructor(msg, statusCode){
        super(msg);
        this.statusCode = statusCode;
    }
}

class AuthError extends Error{
    constructor(msg, userId){
        super(msg);
        this.userId = userId;
    }
}

function handle(err){

    if(err instanceof ValidationError){
        console.log(
            "Validation:",
            err.field
        );
    }

    else if(
        err instanceof NetworkError
    ){
        console.log(
            "Network:",
            err.statusCode
        );
    }

    else if(
        err instanceof AuthError
    ){
        console.log(
            "Auth:",
            err.userId
        );
    }
}

// Question 12
// safeDiv(a,b)

class DivisionByZeroError
extends Error{

    constructor(){
        super(
            "Cannot divide by zero"
        );
    }
}

function safeDiv(a,b){

    try{

        if(b===0){
            throw new DivisionByZeroError();
        }

        console.log(a/b);
    }
    catch(err){
        console.log(err.message);
    }
}

safeDiv(10,2);
safeDiv(10,0);

// Output
// 5
// Cannot divide by zero

// Question 13
// retry(fn,times)

class MaxRetriesError
extends Error{

    constructor(attempts){
        super(
            "All retries failed"
        );

        this.attempts =
        attempts;
    }
}

async function retry(
    fn,
    times
){

    for(
        let i=1;
        i<=times;
        i++
    ){

        try{
            return await fn();
        }
        catch(err){

            console.log(
                "Attempt",
                i,
                "failed"
            );
        }
    }

    throw new MaxRetriesError(
        times
    );
}

// Question 14
// ES Modules

// mathUtils.js

// main.js



// Question 15
// CommonJS logger module

// logger.js

// app.js

// Output
// Question 16
// Dynamic import() Plugin Loader

class PluginNotFoundError extends Error{
    constructor(name){
        super(`Plugin ${name} not found`);
    }
}

async function loadPlugin(name){

    try{
        const plugin =
        await import(
            `./plugins/${name}.js`
        );

        return plugin;
    }
    catch(err){
        throw new PluginNotFoundError(
            name
        );
    }
}

// Question 17
// config.js default export

// config.js
// main.js



// Question 18
// errorBoundary(fn)

async function errorBoundary(fn){

    try{

        const result =
        await fn();

        return {

            ok:true,

            data:result
        };
    }
    catch(err){

        return {

            ok:false,

            error:err.message
        };
    }
}
Example
async function test(){

    throw new Error("Failed");

}

errorBoundary(test)
.then(console.log);

// Output
// { ok:false, error:"Failed" }

// Question 19
// Barrel Export

// stringUtils.js
// arrayUtils.js


// objectUtils.js



// main.js


// Question 20
// fetchWithTimeout(url,ms)

class TimeoutError
extends Error{

    constructor(){

        super("Request Timeout");

    }
}

async function fetchWithTimeout(
    url,
    ms
){

    const timeout =
    new Promise(
        (_,reject)=>{

            setTimeout(()=>{

                reject(
                    new TimeoutError()
                );

            },ms);

        }
    );

    return Promise.race([

        fetch(url),

        timeout

    ]);
}

// Question 21
// Custom EventEmitter

class EventEmitter{

    constructor(){

        this.events = {};

    }

    on(event,cb){

        if(!this.events[event]){

            this.events[event] = [];

        }

        this.events[event].push(cb);
    }

    off(event,cb){

        this.events[event] =
        this.events[event]
        .filter(fn=>fn!==cb);
    }

    emit(event,...args){

        if(!this.events[event])
        return;

        this.events[event]
        .forEach(fn=>{

            try{

                fn(...args);

            }
            catch(err){

                console.log(
                    err.message
                );

            }
        });
    }
}

// Question 22
// parseJSON(str)

function parseJSON(str){

    try{

        return JSON.parse(str);

    }
    catch(err){

        console.log(
            "Invalid JSON"
        );

        return null;
    }
    finally{

        console.log(
            "Parsing Complete"
        );

    }
}

// Question 23
// Predict Output

const obj = {

    get val(){

        throw new Error("no");

    }
};

try{

    const { val } = obj;

}
catch(e){

    console.log(
        e.message
    );

}

// Output
// no

// Question 24
// Predict Output

function* gen(){

    try{

        yield 1;

        yield 2;

    }
    finally{

        yield 3;

    }
}

const g = gen();

console.log(g.next());

console.log(
    g.return("done")
);

console.log(g.next());

// Output
// {value:1,done:false}
// {value:3,done:false}
// {value:"done",done:true}

// Question 25
// Predict Output

class E extends Error{}

const e =
new E("test");

console.log(

    e instanceof E,

    e instanceof Error,

    e.name

);

// Output
// true true Error
// Question 26
// Bubbling order mein output kya hoga?

// HTML
// <div id="parent">
//   <span id="child">Click</span>
// </div>

parent.addEventListener(
    "click",
    ()=>{
        console.log("parent");
    }
);

child.addEventListener(
    "click",
    ()=>{
        console.log("child");
    }
);

// Span click

// Output
// child
// parent

// Question 27
// Kya aayega?

const el =
document.createElement("div");

el.textContent =
"<b>bold</b>";

console.log(el.innerHTML);

// Output
// &lt;b&gt;bold&lt;/b&gt;

// Question 28
// stopPropagation vs preventDefault

e.stopPropagation();

// Parent tak event nahi jayega
e.preventDefault();

// Browser ka default action stop
<a href="https://google.com">
Google
</a>
link.addEventListener(
    "click",
    (e)=>{

        e.preventDefault();

    }
);

// Link open nahi hoga

// Question 29
// Kya return karega?

localStorage.setItem(
    "x",
    {a:1}
);

console.log(
    localStorage.getItem("x")
);

// Output
// [object Object]

localStorage.setItem(
    "x",
    JSON.stringify({a:1})
);

// Question 30
// Kya print hoga?

const ul =
document.createElement("ul");

ul.innerHTML =
"<li>A</li><li>B</li>";

const items =
ul.querySelectorAll("li");

items.forEach(
    i => i.remove()
);

console.log(
    ul.children.length
);

// Output
// 0

// Question 31
// Difference

document.getElementById(
    "myId"
);

document.querySelector(
    "#myId"
);

// Both return same element

// getElementById
// Faster
// Only ID search

// querySelector
// Any CSS selector

// Question 32
// Kya print hoga?

const p =
document.createElement("p");

document.body.appendChild(p);

p.addEventListener(
    "click",
    ()=>{
        console.log("fired");
    }
);

p.dispatchEvent(
    new Event("click")
);

p.remove();

p.dispatchEvent(
    new Event("click")
);

// Output
// fired
// fired

// Question 33
// input vs change event

// User typing

input.addEventListener(
    "input",
    ()=>{
        console.log("input");
    }
);

// Output while typing
// input
// input
// input
// User tab or blur

input.addEventListener(
    "change",
    ()=>{
        console.log("change");
    }
);

// Output
// change

// Question 34
// e.target vs e.currentTarget

parent.addEventListener(
    "click",
    function(e){

        console.log(
            e.target
        );

        console.log(
            e.currentTarget
        );

    }
);

// If child clicked

// e.target
// child button

// e.currentTarget
// parent div

// Question 35
// sessionStorage

sessionStorage.setItem(
    "key",
    "val"
);

// Same tab reload

console.log(
    sessionStorage.getItem(
        "key"
    )
);

// Output
// val
// New tab

console.log(
    sessionStorage.getItem(
        "key"
    )
);

// Output
// null
// Question 35
// sessionStorage

sessionStorage.setItem(
    "key",
    "val"
);

// Same tab reload

console.log(
    sessionStorage.getItem(
        "key"
    )
);

// Output
// val
// New tab

console.log(
    sessionStorage.getItem(
        "key"
    )
);

// Output
// null




// Question 38
// virtualDOM(config)

function virtualDOM(node){

    const el =
    document.createElement(
        node.tag
    );

    if(node.props){

        for(
            let key
            in
            node.props
        ){

            el.setAttribute(
                key,
                node.props[key]
            );
        }
    }

    if(node.text){

        el.textContent =
        node.text;

    }

    if(node.children){

        node.children.forEach(
            child=>{

                el.appendChild(
                    virtualDOM(child)
                );

            }
        );
    }

    return el;
}

// Question 39
// Form Validation

const form =
document.getElementById(
    "form"
);

form.addEventListener(
    "submit",
    (e)=>{

        e.preventDefault();

        let name =
        document.getElementById(
            "name"
        ).value;

        let email =
        document.getElementById(
            "email"
        ).value;

        if(
            name === "" ||
            email === ""
        ){

            document
            .getElementById(
                "error"
            )
            .textContent =
            "All fields required";
        }
    }
);

// Question 40
// Drag & Drop Reorder

let dragItem;

document
.querySelectorAll("li")
.forEach(li=>{

    li.addEventListener(
        "dragstart",
        ()=>{

            dragItem = li;

        }
    );

    li.addEventListener(
        "dragover",
        (e)=>{

            e.preventDefault();

        }
    );

    li.addEventListener(
        "drop",
        ()=>{

            li.before(
                dragItem
            );

            localStorage.setItem(
                "order",
                document
                .getElementById(
                    "list"
                )
                .innerHTML
            );
        }
    );
});

// Question 41
// localStorage Wrapper Class

class StorageWrapper{

    set(key,value){

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );
    }

    get(key){

        return JSON.parse(
            localStorage.getItem(key)
        );
    }

    remove(key){

        localStorage.removeItem(
            key
        );
    }

    clear(){

        localStorage.clear();

    }
}

// Question 42
// sessionStorage Counter

let sessionCount =
Number(
    sessionStorage.getItem("s")
) || 0;

sessionCount++;

sessionStorage.setItem(
    "s",
    sessionCount
);

console.log(
    sessionCount
);
// localStorage Counter

let localCount =
Number(
    localStorage.getItem("l")
) || 0;

localCount++;

localStorage.setItem(
    "l",
    localCount
);

console.log(
    localCount
);

// Question 43
// MutationObserver

const observer =
new MutationObserver(
    (mutations)=>{

        mutations.forEach(
            mutation=>{

                mutation
                .addedNodes
                .forEach(node=>{

                    if(
                        node.nodeType===1 &&
                        node.hasAttribute(
                            "data-track"
                        )
                    ){

                        console.log(
                            "Tracked:",
                            node
                        );
                    }

                });

            }
        );

    }
);

observer.observe(
    document.body,
    {
        childList:true,
        subtree:true
    }
);

// Question 44
// Image Gallery

const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
];

let index = 0;

function showImage(){

    document
    .getElementById("big")
    .src =
    images[index];
}

document
.getElementById("next")
.addEventListener(
    "click",
    ()=>{

        index =
        (index+1)
        %
        images.length;

        showImage();
    }
);

document
.getElementById("prev")
.addEventListener(
    "click",
    ()=>{

        index =
        (
            index-1+
            images.length
        )
        %
        images.length;

        showImage();
    }
);

// Question 45
// PubSub Module

function PubSub(){

    const events = {};

    return {

        subscribe(
            event,
            fn
        ){

            if(
                !events[event]
            ){

                events[event]=[];
            }

            events[event]
            .push(fn);
        },

        publish(
            event,
            data
        ){

            if(
                events[event]
            ){

                events[event]
                .forEach(
                    fn=>fn(data)
                );
            }
        },

        unsubscribe(
            event,
            fn
        ){

            events[event] =
            events[event]
            .filter(
                f=>f!==fn
            );
        }
    };
}
// Question 46
// DOM Traversal Utility

function getSiblings(el){

    return [...el.parentElement.children]
    .filter(
        child => child !== el
    );
}

function getAncestors(el){

    const arr = [];

    while(el.parentElement){

        arr.push(
            el.parentElement
        );

        el = el.parentElement;
    }

    return arr;
}

function getAllDescendants(el){

    return [
        ...el.querySelectorAll("*")
    ];
}

// Question 47
// Debounce Function

function debounce(fn,ms){

    let timer;

    return function(){

        clearTimeout(timer);

        timer = setTimeout(
            fn,
            ms
        );
    };
}
// Throttle Function

function throttle(fn,ms){

    let allow = true;

    return function(){

        if(!allow) return;

        allow = false;

        fn();

        setTimeout(()=>{
            allow = true;
        },ms);
    };
}

// Lazy Image Loader

const images =
document.querySelectorAll(".lazy");

const observer =
new IntersectionObserver(
(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const img =
            entry.target;

            img.src =
            img.dataset.src;

            observer.unobserve(img);
        }
    });

});

images.forEach(img=>{

    observer.observe(img);

});

// Question 50
// Dynamic Table

const data = [

    {
        name:"Ram",
        age:20,
        city:"Delhi"
    },

    {
        name:"Shyam",
        age:22,
        city:"Mumbai"
    }

];

const table =
document.createElement("table");

const header =
document.createElement("tr");

["Name","Age","City"]
.forEach(text=>{

    const th =
    document.createElement("th");

    th.textContent = text;

    header.appendChild(th);

});

table.appendChild(header);

data.forEach(user=>{

    const tr =
    document.createElement("tr");

    Object.values(user)
    .forEach(value=>{

        const td =
        document.createElement("td");

        td.textContent = value;

        tr.appendChild(td);

    });

    table.appendChild(tr);

});

document.body.appendChild(table);

// Question 51
// Top Level Await

// main.js

const m =
await import("./mod.js");

console.log(
    m.default,
    m.named
);

// Works only in ES Module

// package.json
// {
//   "type":"module"
// }



// Question 52
// Predict Output

try{

    eval("{{bad syntax{{");

}
catch(e){

    console.log(e.name);

}

// Output
// SyntaxError

// Question 53
// Predict Output

class HttpError
extends Error{

    constructor(code){

        super(
            "HTTP " + code
        );

        this.code = code;

        this.name =
        "HttpError";
    }
}

const e =
new HttpError(500);

console.log(
    e.message,
    e.stack
    ?.split("\n")[0]
);

// Output
// HTTP 500
// HttpError: HTTP 500

// Question 54
// ESM vs CommonJS

// ESM

import x from "./a.js";

// CommonJS

const x =
require("./a.js");

// Difference

// ESM
// Static loading
// Live binding
// Async capable

// CommonJS
// Runtime loading
// Snapshot value
// Synchronous

// Question 55
// Predict Output

const err =
new TypeError(
    "bad type"
);

console.log(

    err instanceof TypeError,

    err instanceof Error,

    err instanceof RangeError

);
