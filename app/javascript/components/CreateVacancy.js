import React, {Component } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export default class CreateVacancy extends React.Component {
  constructor(props){
    super(props);
    this.state = {
          job_position_id: '',
          job_positions: [],
          experience: '',
          no_of_vacancy: '',
          position_fill: '',
          remaning_position: ''
          };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }


    handleSubmit(event) {
    event.preventDefault();
    const url = "/vacancies";
    const { experience, no_of_vacancy, position_fill, remaning_position, job_position_id } = this.state;


    const body = {
      experience: experience,
      no_of_vacancy: no_of_vacancy,
      position_fill: position_fill,
      remaning_position: remaning_position,
      job_position_id: job_position_id
    };

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
    axios.get(`job_positions`)
      .then(res => {
        const job_positions = res.data;
        this.setState({ job_positions });
      })
      
  }

  ChangeJobPosition = (e) => {
    this.setState({
      job_position_id: e.target.value
      });
    axios.get('job_positions?job_position_id=' + e.target.value).then(response => {
      console.log(response.data);
    this.setState({
      job_positions: response.data,
      });
    });
  }
   stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  

  render() {
    return (
      
   
      <form onSubmit={this.handleSubmit}>
        <div className="form-group mt-3">
          <label>JobCategory</label>
          <select className="form-control" name="job_position_id" value={this.state.job_position_id} onChange={this.ChangeJobPosition}  >  
            <option>Select JobPosition</option>  
            {this.state.job_positions.map((e, key) => {  
              return <option key={key} value={e.id}>{e.name}</option>;  
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
        <button type="submit">
          Create Vacancy
        </button>
      </form>
    
    )
  }
}

