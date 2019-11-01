import React from 'react';
import './App.css';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

function App() {
  const jobquery = gql`{
    jobs { 
      title, 
      company{name}, 
      applyUrl, 
    }
  }`;

  const { loading, error, data } = useQuery(jobquery);

  if (loading)
    return "Loading..."
  if (error)
    return "Error";

  return (
    <div className="App">
      <table>
        <tbody>
          {
            data.jobs.map((job, index) => 
              <tr key={index}>
                <td>{job.title}</td>
                <td>{job.company.name}</td>
                <td><a href={job.applyUrl}>{job.applyUrl}</a></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
