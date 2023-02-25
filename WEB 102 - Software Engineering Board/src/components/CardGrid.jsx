// Import React from the react library
import React from 'react'

// Import the Card component
import Card from './Card'

const CardGrid = () => {
    return (
        <div className="CardGrid">

            {/* Create a Grid */}
            <table>
                <tbody>
                    {/* Grid row */}
                    <tr>
                        <Card name="Udemy" link="https://www.udemy.com/" picture="https://st.depositphotos.com/22265358/52213/i/600/depositphotos_522130398-stock-photo-november-2021-brazil-photo-illustration.jpg" />

                        <Card name="Geeks for Geeks" link="https://www.geeksforgeeks.org/" picture="https://repository-images.githubusercontent.com/389729275/371ba38b-8a03-4bff-916c-c3fa5396ceda" />

                        <Card name="GitHub" link="https://github.com/" picture="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" />
                    </tr>

                    {/* Grid row */}
                    <tr>
                        <Card name="W3Schools" link="https://www.w3schools.com/" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1200px-W3Schools_logo.svg.png" />
                        
                        <Card name="HackerRank" link="https://www.hackerrank.com/" picture="https://res.cloudinary.com/crunchbase-production/image/upload/lqlkg85sw4sgmp2xvznh" />
                        
                        <Card name="StackOverflow" link="https://stackoverflow.com/" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png" />
                    </tr>

                    {/* Grid row */}
                    <tr>
                        <Card name="freeCodeCamp" link="https://www.freecodecamp.org/" picture="https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png" />

                        <Card name="CodePath" link="https://www.codepath.org/" picture="https://pbs.twimg.com/profile_images/1527299950073217024/H3Kw4tkF_400x400.jpg" />
                        
                        <Card name="LeetCode" link="https://leetcode.com/" picture="https://cdn.cdo.mit.edu/wp-content/uploads/sites/67/2021/01/0_zuhXdNAIUoxEem4-.png" />
                    </tr>

                </tbody>
            </table>
            
        </div>
    )
}

export default CardGrid;