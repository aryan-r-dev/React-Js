import React from 'react'
import Card from './components/card'

const App = () => {
  // const arr=[10,99,30] //we can pass values by using map function and it will display all the values from array to the component.

  /* const arr=[{user:'Aryan'},{user:'Aarav'},{user:'Ash'}] this is also a method to put multiple objects inside the array , 
  so when we pass the arr to the card component it will display all the values from array to the component. */

  const jobOpenings = [
    {
      logo: "https://i.pinimg.com/originals/74/c9/14/74c914ebbfc3167a7a8b9c0c7ba6693b.png",
      companyName: "Amazon",
      datePosted: "5 days ago",
      post: "Senior UI/UX Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$123/hr",
      location: "Mumbai, India",
    },
    {
      logo: "https://yt3.googleusercontent.com/bAseQlKvNmjdLQrvYWm_q3QDp8C8YKyYI-nYJewgOkPi0JU1_3X9oFgjrEdzkOlXzLGFxFbnsw=s900-c-k-c0x00ffffff-no-rj",
      companyName: "Google",
      datePosted: "2 weeks ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      salary: "$110/hr",
      location: "Bengaluru, India",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm9PU4PERGCnSR3vxVsg5zT-_i_EaDgRKWLqycvvzBcrb7bOwJHRWIf5jh&s=10",
      companyName: "Microsoft",
      datePosted: "1 day ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$130/hr",
      location: "Hyderabad, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
      companyName: "Apple",
      datePosted: "3 days ago",
      post: "Product Designer",
      tag1: "Part Time",
      tag2: "Mid Level",
      salary: "$105/hr",
      location: "Mumbai, India",
    },
    {
      logo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_960_720.png",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "React.js Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$125/hr",
      location: "Bengaluru, India",
    },
    {
      logo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "10 weeks ago",
      post: "UI/UX Researcher",
      tag1: "Part Time",
      tag2: "Junior Level",
      salary: "$90/hr",
      location: "Remote, India",
    },
    {
      logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Adobe_Express_2026_icon.svg/1280px-Adobe_Express_2026_icon.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
      companyName: "Adobe",
      datePosted: "4 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      salary: "$115/hr",
      location: "Noida, India",
    },
    {
      logo: "https://yt3.googleusercontent.com/btm1_PK-7VRUr9GY2D0UV_2XfbUZPBjghyptjSO1crsfN86HyTYDWPmUbq7JxC3H0Lxe_s067nA=s900-c-k-c0x00ffffff-no-rj",
      companyName: "NVIDIA",
      datePosted: "6 days ago",
      post: "AI/ML Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$140/hr",
      location: "Pune, India",
    },
    {
      logo: "https://yt3.googleusercontent.com/dhVlUr4qzdw97K77mitoVSZk8u3KLl4hWCeiAVNuoqG1W7WmcN86GSIl96Ge1PeauemTwCl5TA=s900-c-k-c0x00ffffff-no-rj",
      companyName: "IBM",
      datePosted: "2 months ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      salary: "$100/hr",
      location: "Kolkata, India",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9z3qFdgVI0oFpjXVNOeGLq-DqAnl85nWJi6978Er22A&s=10",
      companyName: "Salesforce",
      datePosted: "2 days ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$135/hr",
      location: "Hyderabad, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem) {

        // return hello // then it will print the number of times as the length of the array .

        // return <h1>elem.company</h1> // it will print only the company name -all companies name.


        return <Card company={elem.companyName} logo={elem.logo} date={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} salary={elem.salary} location={elem.location} />
      }
      )}
      {/* <Card /> */}
    </div>
  )
}

export default App