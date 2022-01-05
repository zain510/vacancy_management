import React, {Component } from 'react';
import axios from 'axios';
import { MyContext } from '../components/CandidatesSignIn'
import UsersWelcome from '../components/UsersWelcome'

export default class CreateVacancy extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      job_category_id: '',
      job_categories: [],
      job_position_id: '',
      job_positions: [],
      experience: '',
      no_of_vacancy: '',
      position_fill: '',
      remaning_position: '',
      redirect: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }


  handleSubmit(event) {
    event.preventDefault();
    const url = "/api/v1/vacancies";
    const { experience, no_of_vacancy, position_fill, remaning_position, job_position_id } = this.state;
    
    const body = {
      experience: experience,
      no_of_vacancy: no_of_vacancy,
      position_fill: position_fill,
      remaning_position: remaning_position,
      job_position_id: job_position_id
    };

    this.setState({
      redirect: false
    });
    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then(response => this.props.history.push(`/vacancies/${response.id}`))
    .catch(error => console.log(error.message));
  }

  componentDidMount() {
    axios.get('/api/v1/job_categories').then(response => {
      // console.log(response.data);
      this.setState({
        job_categories: response.data
      });
    });
  }

  ChangeJobCategory= (e) => {
    this.setState({
      job_category_id: e.target.value
    });
    axios.get('/api/v1/get_job_positions_by_job_category?job_category_id=' + e.target.value).then(response => {
      // console.log(response.data);
      this.setState({
        job_positions: response.data,
      });
    });
  }

  ChangeJobPosition= (e) => {
    this.setState({
      job_position_id: e.target.value
    });
    axios.get('/api/v1/job_positions?job_position_id=' + e.target.value).then(response => {
      // console.log(response.data);
      this.setState({
        job_positions: response.data,
      });
    });
  }

  render() {
    if(this.state.redirect){
      return (
        <div>
          <h1>Create Vacancy</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group mt-3">
              <label>JobCategory</label>
              <select className="form-control" name="job_category_id" value={this.state.job_category_id} onChange={this.ChangeJobCategory}  >  
                <option>Select Job Category</option>  
                { this.state.job_categories.map((e, key) => {  
                  return <option key={ key } value={ e.id }>{ e.name }</option>;  
                })}  
              </select>
            </div>
     
            <div className="form-group mt-3">
              <label>JobPosition</label>
              <select className="form-control" name="job_position_id" value={this.state.job_position_id}  onChange={this.ChangeJobPosition} >  
                <option>Select Job Position</option>
                { this.state.job_positions.map((e, key) => {  
                  return <option key={ key } value={ e.id }>{ e.name }</option>;  
                })}  
              </select>
            </div>  

            <div className="form-group">
              <label htmlFor="experience">Experience</label>
              <input
                type="text"
                name="experience"
                id="experience"
                className="form-control"
                required
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="no_of_vacancy">NoOfVacancy</label>
              <input
                type="number"
                name="no_of_vacancy"
                id="no_of_vacancy"
                className="form-control"
                required
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="position_fill">PositionFill</label>
              <input
                type="number"
                name="position_fill"
                id="position_fill"
                className="form-control"
                required
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="remaning_position">RemaningPosition</label>
              <input
                type="number"
                name="remaning_position"
                id="remaning_position"
                className="form-control"
                required
                onChange={this.handleChange}
              />
            </div>

            <div>
              <button type="submit"> Create Vacancy </button>
            </div>
          </form>
        </div>
      )
    }
    else{
      return < UsersWelcome />
    }
  }
}
