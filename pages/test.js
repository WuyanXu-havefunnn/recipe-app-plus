 import styled from "styled-components";

 const tags = [
     "beef",
     "healthy",
     "quick",
     "pork",
     "vegetarian"
 ]


const data = [
    { id: 1, name: "broccoli beef", tags: ["beef", "healthy"] },
    { id: 2, name: "fried tofu", tags: ["vegetarian", "quick"] },
    { id: 3, name: "braised pork", tags: ["stew", "pork"] },
    { id: 4, name: "chinese dumplings", tags: ["quick", "pork"] },
    { id: 5, name: "chive pockets", tags: ["vegetarian", "healthy"] },
]



 export default function TestPage() {
   return (
       <Test>
           <Filter>
            <h4>Filters</h4>
            <p>Active filter: </p>
            {/* loop over tags to create buttons  */}
            <BtnGroup>
                {tags.map((tag) => <Button>{tag}</Button>)}
            </BtnGroup>
           </Filter>
           

        <Recipe>
        {/*  map over the data array and render an li for each recipe */}
            <h2>Recipes</h2>
            <RecipeItem>
                <ul id="data">
                    {data.map((item) => (<ListItem key={item.id}>{item.name}</ListItem>))}
                </ul>
            </RecipeItem>
        </Recipe>
       </Test>
     )
 }



// use react state variable to store current filter (use the useState hook)
// click on a button to change active filter (active filter should be displayed in text next to Active filter: )
// change color of button that corresponds to currently active filter
// based on active filter, only display those recipes in recipes list which have the active tag in their tags list
// e.g. if active filter is pork, only display braised pork and chinese dumplings

const Test = styled.div`
    height: 100vh;
    padding: 30px;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    padding: 10px 15px;
    font-size: 1.2rem;
`
const BtnGroup =styled.div`
    padding-right: 20px;
    display: flex;
    gap: 15px;
`

const Filter = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px; 
`

const Recipe = styled.div`
    padding: 30px;
`


const RecipeItem = styled.div`
    padding: 10px;
   
`

const ListItem = styled.li`
    font-size: 1rem;


`