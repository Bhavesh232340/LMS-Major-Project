import React from 'react'

const course_registration = () => {
  return (
    <div>
       <h1>Course Registration</h1>
       Course ID: 
       <input type="text"
        name="courseid"
        placeholder="Course ID"
        required maxLength={30} />
        <br></br>
        Course Name:
      <input type="text"
       name="coursename"
        placeholder="Course Name"
         required maxLength={300} />
      <br></br>
      Description:
      <input type="text"
       name="description"
      placeholder="Description"
      required maxLength={400} />
      <br></br>
      Duration:
      <input type="number"
       name="duration_in_hours"
        placeholder="Duration (hours)" required />
      <br></br>
      Min_Enrollment:
      <input type="number"
       name="min_enrollment"
        placeholder="Min Enrollment" required />
      <br></br>
      Max_Enrollment:
      <input type="number"
       name="max_enrollment"
        placeholder="Max Enrollment" required />
      <br></br>
      Created_or_Updated:
      <input type="date"
       name="created_or_updated" required />

    </div>
  )
}

export default course_registration
