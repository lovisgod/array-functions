const consoleb = document.querySelector('#consoleb');
consoleb.addEventListener('click', () =>{
    myFucntions();
})


const inventors = [
    {first : 'Ayo', last: 'tomi', year : 1984, passed: 2067},
    {first : 'bayo', last: 'toma', year : 1986, passed: 2069},
    {first : 'Tayo', last: 'tomy', year : 1984, passed: 2070},
    {first : 'Mayo', last: 'tomex', year : 1985, passed: 2071},
    {first : 'Dayo', last: 'tomly', year : 1986, passed: 2072},
    {first : 'Layo', last: 'tomzy', year : 1985, passed: 2067},
    ];

const people= ['tommas, bright', 'tommy , lawson', 'mattman, johnson', 
            'bright, johnson' , 'mohammed, ali' , 'ibitayo, moses' , 
            'olosunde, ayooluwa' , 'ahmed, musa'];  

const data = [
    'bike', 'walk', 'walk', 'car', 'truck', 'bike', 'car', 'walk'
];
            
const myFucntions = () => {
    // array.prototype.filter
    //get people who are born in a particular year 
    const eightyFour = inventors.filter( (inventor) => {
        if(inventor.year === 1984) {
            return true // this means you keep the value
        }
    })

    console.table(eightyFour); //return a table of the datas

    //Array.prototype.map()
    // get the first and last name of inverstoors
    const fullName = inventors.map( (inventor) => {
        return `${inventor.first} ${inventor.last}`;
    })
        console.table(fullName);

    //Array.prototype.sort()
    //sort or arrange inventors by birthday oldest to youngest
    const arranged = inventors.sort((older, younger) => {
        return older.year > younger.year ? 1 : -1; //tenaty operator
    })  
    
    console.table(arranged);

    //Array.prototype.reduce()
    //how many years did all inventors live
    const yearDiff = inventors.map((oneInvestor) => {
        return oneInvestor.passed - oneInvestor.year ;
    })//this is for one inventor

    console.table((yearDiff));
    const totalYears = inventors.reduce((total,inventor) => {
        return total + (inventor.passed - inventor.year);
    },0);//this is for the total of all inventors

    console.log(totalYears);

    //sort inventors by years lived
    const oldest = inventors.sort((a, b) => {
        //first create variables holding the year differences
        const firstGuy = a.passed - a.year;
        const nextGuy = b.passed - b.year;
        return firstGuy > nextGuy ? -1 : 1; //tenary operator
    })
    console.table(oldest);

    //sorting people alphabetically by firstname
    const sorted = people.sort((firstGuy, nextGuy) =>{
        //use destructuring to get the splitted name into different variables
        const [afirst, alast] = firstGuy.split(','); //here we split the name of the fist person
        const [bfirst, blast] = nextGuy.split(','); //here we split the name of the second person
        return afirst > bfirst ? 1 : -1;//here we compared the names alphabetically by the first name and return an arranged name list
    })

    console.table(sorted);

    // sum up instances of each data item
    //here we use reduce function and initialize an empty object {} 
    //and then we checked if an instance of each item exist if not it should return the value of 0
    // else it should add one to the object instance
    const transport = data.reduce((obj, item) => {
        if(!obj[item]){
            obj[item] = 0;
        }
        obj[item]++;
        return obj;
    }, {})

    console.table(transport);
}


