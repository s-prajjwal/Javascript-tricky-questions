
// // class MyComponent extend React.Component {​​​​​
// // onScroll = (value) => {​​​​​
// // this.scrollPosition =value
// // }​​​​​

// // onClick = () => {​​​​​
// // if(this.scrollPosition > 10) {​​​​​
// // doStuff()
// // }​​​​​
// // }​​​​​

// // render() {​​​​​
// // return <div onScroll={​​​​​this.onScroll}​​​​​>
// // <button onClick={​​​​​this.onClick}​​​​​>Click me</button>
// // </div>
// // }​​​​​
// // }​​​​​

// function MyComponent () {
//     // const [scrollPosition, setScrollPosition] = useState(0); 
//     // let scrollPosition = 0;

//     let scrollPosition = useRef(0);
    
//     // useEffect(()=>{}, [])

//     const onScroll = (value) => {​​​​​
//         scrollPosition = value;
//     }​​​​​

//     const onClick = () => {​​​​​
//         if(scrollPosition > 10) {​​​​​
//             doStuff();
//         }​​​​​
//     }​​​​


//     return <div onScroll={onScroll}​​​​​>
//     <button onClick={onClick}​​​​​>Click me</button>
//     </div>

// }


const arr = [1,2,3,4,1,1,2,4,1, 4, 4];

const obj = {};

for(let i=0;i<arr.length;i++) {
    // initialize 
    if(obj[arr[i]] == undefined) obj[arr[i]] = 0;

    obj[arr[i]] = obj[arr[i]] + 1;
}

// find the largest frequency

let large = 0;
let num = [];
Object.keys(obj).forEach(function(key){
    if(large < obj[key]) {
        large = obj[key];
    }
});
num = Object.keys(obj).filter((key)=> obj[key] === large);

console.log("Most frequent numbers are - ", num);



