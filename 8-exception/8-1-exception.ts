// Java : Exception
// Javascript : Error

//const array = new Array(10000000000000000000);

// Error(Exception) Handling : try -> catch -> finally

function readFile(fileName: string): string{
    if(fileName === 'not exist!') {
        throw new Error(`file not exist ${fileName}`);
    }
    return 'file contents';
};

function closeFile(fileName: string){
    //
}

function run() {
    const fileName = 'file';
    try {
        console.log(readFile(fileName));
    } catch (error){
        console.log(`catched!!`)
    } finally {
        closeFile(fileName);
        console.log(`finally!!`);
    }
    // finally 안에있는 코드는 에러가 발생하고, catch가 되어도 항상 실행된다. 
}