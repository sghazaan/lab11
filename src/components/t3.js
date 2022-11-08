const T3 = () =>{
    const numbers = [1, 3, 5, 7, 9]
    const items = numbers.map((number) =>
    <li>{number}</li>
    );
    return( 
        <div data-testid ="Task">
            {items}

        </div>
    )
}
export default T3

