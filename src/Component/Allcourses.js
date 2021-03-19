import Course from "./Course"
import {React,useState} from 'react'

const Allcourse =() => {

    const [courses,setCourses] = useState([
        {title:"RCS Hockey", description: "The is demo play"},
        {title:"RCS Hockey", description: "The is demo play"},
        {title:"RCS Hockey", description: "The is demo play"},
    ]);

    return (
        <div>
            <h1>All Games</h1>
            <p> List of courses are as follows </p>
            {
                courses.length>0? courses.map((item)=>(
                    <Course course={item}/>
                    
                )) : "No Courses"
            }
        </div> 
    );
};

export default Allcourse;