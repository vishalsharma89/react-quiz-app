import { Button, MenuItem, TextField } from '@material-ui/core'
import React from 'react'
import Categories from '../../Data/Categories'
import "./Home.css"

const Home = () => {
    return (
        <div className='content'>
            <div className="settings">
                <span style={{ fontSize: 30 }}>Quiz Settings</span>

                <div className="settings__select">
                    <TextField
                        style={{ marginBottom: 25 }}
                        label="Enter Your Name"
                        varient="outlined"
                    />
                    <TextField
                        select
                        style={{ marginBottom: 30 }}
                        label="Select Category"
                        varient="outlined"
                    >
                        {Categories.map((cat) => (
                            <MenuItem key={cat.category} value={cat.value}
                            >
                                {cat.category}

                            </MenuItem>

                        ))}

                    </TextField>
                    <TextField
                        select
                        style={{ marginBottom: 30 }}
                        label="Select Category"
                        varient="outlined"
                    >
                        <MenuItem key="Easy" value="easy">
                            Easy
                        </MenuItem>
                        <MenuItem key="Medium" value="medium">
                            Medium
                        </MenuItem>
                        <MenuItem key="Hard" value="hard">
                            Hard
                        </MenuItem>
                    </TextField>

                    <Button variant="contained" color="primary" size="large">
                        Start Quiz
                    </Button>
                </div>
            </div>
            <img src="/quiz.svg" className="banner" alt="quiz img" />
        </div>
    )
}

export default Home