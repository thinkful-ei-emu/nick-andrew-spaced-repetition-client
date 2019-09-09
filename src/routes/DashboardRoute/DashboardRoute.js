import React, { Component } from 'react'
import config from '../../config';
import TokenService from '../../services/token-service';
import WordTable from '../../components/WordTable/WordTable';

class DashboardRoute extends Component {

  constructor(props){
    super(props)
    this.state = {
      error: null
    }
  }

  async componentDidMount(){

    try {
    const data = await fetch(`${config.API_ENDPOINT}/language`, {
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })

    const languageData = await data.json()

    console.log(languageData);
    }

    catch(e){
      this.setState({
        error: e
      })
    }

  }



  render() {
    return (
      <section>
        implement and style me
      </section>
    );
  }
}

export default DashboardRoute
