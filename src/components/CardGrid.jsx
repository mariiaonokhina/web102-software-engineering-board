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
                        <Card name="Udemy" link="https://www.udemy.com/" description="Website for online learning" picture="https://st.depositphotos.com/22265358/52213/i/600/depositphotos_522130398-stock-photo-november-2021-brazil-photo-illustration.jpg" />

                        <Card name="Geeks for Geeks" link="https://www.geeksforgeeks.org/" description="Learn tips and algorithms" picture="https://repository-images.githubusercontent.com/389729275/371ba38b-8a03-4bff-916c-c3fa5396ceda" />

                        <Card name="GitHub" link="https://github.com/" description="Open source community for developers" picture="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" />
                    </tr>

                    {/* Grid row */}
                    <tr>
                        <Card name="W3Schools" link="https://www.w3schools.com/" description="Learn HTML, CSS, Javascript, Python, Java, and more" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1200px-W3Schools_logo.svg.png" />
                        
                        <Card name="HackerRank" link="https://www.hackerrank.com/" description="Solve interview problems" picture="https://res.cloudinary.com/crunchbase-production/image/upload/lqlkg85sw4sgmp2xvznh" />
                        
                        <Card name="StackOverflow" link="https://stackoverflow.com/" description="Community for sharing programming knowledge" picture="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png" />
                    </tr>

                    {/* Grid row */}
                    <tr>
                        <Card name="freeCodeCamp" link="https://www.freecodecamp.org/" description="Free online school for programmers" picture="https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png" />

                        <Card name="CodePath" link="https://www.codepath.org/" description="Free programming courses and opportunities" picture="https://pbs.twimg.com/profile_images/1527299950073217024/H3Kw4tkF_400x400.jpg" />
                        
                        <Card name="LeetCode" link="https://leetcode.com/" description="Solve interview problems" picture="https://cdn.cdo.mit.edu/wp-content/uploads/sites/67/2021/01/0_zuhXdNAIUoxEem4-.png" />
                    </tr>

                    {/* Grid row */}
                    <tr>
                        <Card name="Font Awesome" link="https://fontawesome.com/" description="Find awesome icons and fonts for your web dev project" picture="https://www.drupal.org/files/project-images/font_awesome_logo.png" />

                        <Card name="Forage" link="https://www.theforage.com/" description="Gain experience by participating in virtual internships" picture="https://miro.medium.com/max/1200/1*Df5aldU_dXvFRsNQbGYLLA.png" />

                        <Card name="Real Python" link="https://realpython.com/" description="Learn tricks in Python" picture="https://files.realpython.com/media/real-python-logo-square.28474fda9228.png" />
                    </tr>

                </tbody>
            </table>
            
        </div>
    )
}

export default CardGrid;